import { configureStore } from "@reduxjs/toolkit";
import QuizReducer from "./slices/quizSlice";

export const store = configureStore({
  reducer: {
    Quiz: QuizReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
