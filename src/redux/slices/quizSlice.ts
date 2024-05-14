import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const additionalPoints = 10;

const secsPerQuestion = 15;

const initialState: StateType = {
  questions: [],
  answers: [],
  currentQuestion: 0,
  isAnswerCorrect: null,
  score: 0,
  gameOver: false,
  isLoading: false,
  errorWhenFetching: false,
  gameTime: 1,
};

const apiData: ApiDataType = {
  movies: 11,
  music: 12,
  books: 10,
  games: 15,
  geography: 22,
  scienceandnature: 17,
};

type StateType = {
  questions: string[];
  answers: AnswerType[][];
  currentQuestion: number;
  isAnswerCorrect: boolean | null;
  score: number;
  gameOver: boolean;
  isLoading: boolean;
  errorWhenFetching: boolean;
  gameTime: number;
};

type ApiDataType = {
  [key: string]: number;
  movies: number;
  music: number;
  books: number;
  games: number;
  geography: number;
  scienceandnature: number;
};

export type AnswerType = {
  text: string;
  correct: boolean;
};

type ResultType = {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

type FetchDataArg = {
  category: string;
  difficulty: string;
};

function tickUpdate(state: StateType) {
  if (state.gameTime > 0) {
    state.gameTime -= 1;
  }
  if (state.gameTime <= 0) {
    state.gameOver = true;
  }
}

function mapResultToAnswers(
  state: StateType,
  action: { payload: ResultType[] }
) {
  state.answers = action.payload.map((result) => {
    const answers: AnswerType[] = [
      { text: result.correct_answer, correct: true },
      ...result.incorrect_answers.map((answer) => ({
        text: answer,
        correct: false,
      })),
    ];
    return answers.sort(() => Math.random() - 0.5);
  });
}

function submitAnswerAndCheck(
  state: StateType,
  action: { payload: AnswerType; type: string }
) {
  const correctAnswer = state.answers[state.currentQuestion].find(
    (answer) => answer.correct === true
  );

  if (correctAnswer && correctAnswer.correct === action.payload.correct) {
    state.isAnswerCorrect = true;
    state.score += additionalPoints;
  } else {
    state.isAnswerCorrect = false;
  }
}

export const fetchData = createAsyncThunk(
  "quiz/fetchData",
  async ({ category, difficulty }: FetchDataArg) => {
    try {
      const formattedCategory = category.replace(/-/g, "");
      const categoryCode = apiData[formattedCategory];
      const response = await axios.get(
        `https://opentdb.com/api.php?amount=10&category=${categoryCode}&difficulty=${difficulty}&type=multiple`
      );

      return response.data.results as ResultType[];
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    startGame: (state) => {
      state.gameTime = secsPerQuestion * state.questions.length;
    },
    submitQuestion: (state, action: { payload: AnswerType; type: string }) => {
      submitAnswerAndCheck(state, action);
    },
    nextQuestion: (state) => {
      state.currentQuestion += 1;
      state.isAnswerCorrect = null;
    },
    finishGame: (state) => {
      Object.assign(state, initialState);
    },
    tick: (state) => {
      tickUpdate(state);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchData.fulfilled,
        (state, action: { payload: ResultType[] }) => {
          state.errorWhenFetching = false;
          state.questions = action.payload.map((result) => result.question);
          mapResultToAnswers(state, action);
          state.isLoading = false;
        }
      )
      .addCase(fetchData.rejected, (state, action) => {
        state.isLoading = false;
        if (action.error) {
          state.errorWhenFetching = true;
        }
      });
  },
});

export const { startGame, submitQuestion, nextQuestion, finishGame, tick } =
  quizSlice.actions;

export default quizSlice.reducer;
