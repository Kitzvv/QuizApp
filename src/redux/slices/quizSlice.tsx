import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiData = {
  movies: 11,
  music: 12,
  books: 10,
  games: 15,
  geography: 22,
  scienceandnature: 17,
};

const initialState = {
  questions: [],
  answers: [],
  currentQuestion: 0,
  score: 0,
  quizOver: false,
  isLoading: false,
};

export const fetchData = createAsyncThunk(
  "quiz/fetchData",
  async ({ category, difficulty }) => {
    const categoryCode = apiData[category];
    const response = await axios.get(
      `https://opentdb.com/api.php?amount=10&category=${categoryCode}&difficulty=${difficulty}&type=multiple`
    );

    return response.data;
  }
);

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {},
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

export default quizSlice.reducer;
