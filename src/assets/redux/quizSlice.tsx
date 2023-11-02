import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface QuizState {
  value: number;
}

const initialState: QuizState = {
  value: 7,
};

export const quizSlice = createSlice({
  name: "lallero",
  initialState,
  reducers: {},
});

export const {} = quizSlice.actions;
export default quizSlice.reducer;
