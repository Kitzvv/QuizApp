import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const additionalPoints = 10;

const SECS_PER_QUESTION = 30;

const apiData = {
  movies: 11,
  music: 12,
  books: 10,
  games: 15,
  geography: 22,
  scienceandnature: 17,
};

type StateType = {
  questions: string[];
  answers: { text: string; correct: boolean }[][];
  currentQuestion: number;
  isAnswerCorrect: boolean | null;
  score: number;
  gameOver: boolean;
  isLoading: boolean;
  gameTime: number;
};

const initialState: StateType = {
  questions: [],
  answers: [],
  currentQuestion: 0,
  isAnswerCorrect: null,

  score: 0,
  gameOver: false,
  isLoading: false,
  gameTime: 1,
};

export const fetchData = createAsyncThunk(
  "quiz/fetchData",
  async ({ category, difficulty }) => {
    const formattedCategory = category.replace(/-/g, "");
    const categoryCode = apiData[formattedCategory];
    const response = await axios.get(
      `https://opentdb.com/api.php?amount=10&category=${categoryCode}&difficulty=${difficulty}&type=multiple`
    );

    return response.data;
  }
);

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    startGame: (state) => {
      state.gameTime = SECS_PER_QUESTION * state.questions.length;
    },
    submitQuestion: (state, action) => {
      const correctAnswer = state.answers[state.currentQuestion].find(
        (answer) => answer.correct === true
      );

      if (correctAnswer.correct === action.payload.correct) {
        state.isAnswerCorrect = true;
        state.score += additionalPoints;

        console.log(state.isAnswerCorrect);
      } else {
        state.isAnswerCorrect = false;
      }
    },
    nextQuestion: (state) => {
      state.currentQuestion += 1;
      state.isAnswerCorrect = null;
    },
    finishGame: (state) => {
      Object.assign(state, initialState);
    },
    tick: (state) => {
      if (state.gameTime > 0) {
        state.gameTime -= 1;
      }
      if (state.gameTime === 0) {
        state.gameOver = true;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.questions = action.payload.results.map(
          (result) => result.question
        );
        state.answers = action.payload.results.map((result) => {
          const answers = [
            { text: result.correct_answer, correct: true },
            ...result.incorrect_answers.map((answer) => ({
              text: answer,
              correct: false,
            })),
          ];
          return answers.sort(() => Math.random() - 0.5);
        });
        console.log(state.answers);
        state.isLoading = false;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const { startGame, submitQuestion, nextQuestion, finishGame, tick } =
  quizSlice.actions;

export default quizSlice.reducer;
