import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface QuizType {
  userAnswer: string;
  questionIndex: number;
  disableButton: boolean;
}

const initialState: QuizType = {
  userAnswer: "",
  questionIndex: 0,
  disableButton: false,
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setUserAnswer: (state, action: PayloadAction<string>) => {
      state.userAnswer = action.payload;
    },

    setQuestionIndex: (state) => {
      state.questionIndex += 1;
    },

    setDisableButton: (state, action: PayloadAction<boolean>) => {
      state.disableButton = action.payload;
    },

    nextQuestion: (state) => {
      (state.userAnswer = ""),
        (state.disableButton = false),
        (state.questionIndex += 1);
    },
  },
});

export const {
  setUserAnswer,
  setQuestionIndex,
  setDisableButton,
  nextQuestion,
} = quizSlice.actions;

export default quizSlice.reducer;
