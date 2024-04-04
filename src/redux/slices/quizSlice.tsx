import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiData = {
  movies: 11,
  music: 12,
  books: 10,
  games: 15,
  geography: 22,
  scienceAndNature: 17,
};

const initialState = {
  questions: [],
  answers: [],
  currentQuestion: 0,
  score: 0,
  quizOver: false,
};

export const fetchQuestions = createAsyncThunk(
  "quiz/fetchQuestions",
  async (category) => {
    const categoryCode = apiData[category];
    const response = await axios.get(
      `https://opentdb.com/api.php?amount=10&category=${categoryCode}&difficulty=easy&type=multiple`
    );
    console.log("Data from API:", response.data);
    return response.data;
  }
);

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchQuestions.fulfilled, (state, action) => {
      state.questions = action.payload.results;
    });
  },
});

export default quizSlice.reducer;
