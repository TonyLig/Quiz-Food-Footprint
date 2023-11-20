import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import questions from "../questions/questions.json";

interface Question {
  id: number;
  question: string;
  answers: string[];
  correctAnswer: string;
  incorrectAnswers: string[];
}

interface QuizType {
  questions: Question[];
  userAnswer: string;
  questionIndex: number;
  disableButton: boolean;
  score: number;
}

const initialState: QuizType = {
  questions: questions,
  userAnswer: "",
  questionIndex: 0,
  disableButton: false,
  score: 0,
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    handleAnswer: (state, action: PayloadAction<string>) => {
      state.userAnswer = action.payload;
      state.userAnswer === state.questions[state.questionIndex].correctAnswer
        ? (state.score += 1)
        : state.score;
      state.disableButton = true;
    },

    nextQuestion: (state) => {
      (state.userAnswer = ""),
        (state.disableButton = false),
        (state.questionIndex += 1);
    },

    reset: (state) => {
      (state.userAnswer = ""),
        (state.questionIndex = 0),
        (state.disableButton = false),
        (state.score = 0);
    },
  },
});

export const { handleAnswer, nextQuestion, reset } = quizSlice.actions;

export default quizSlice.reducer;
