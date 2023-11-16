"use client";

import { useSelector } from "react-redux";

import questions from "../../questions/questions.json";
import { RootState } from "../../redux/store";
import Answer from "../Answer/Answer";

export default function QuizCard() {
  const { questionIndex } = useSelector((state: RootState) => state.quiz);

  return (
    <div className="flex flex-col items-center mt-10">
      <p className="w-4/5 text-lg pb-5">{questions[questionIndex].question}</p>
      <div className="flex flex-col items-center gap-4 w-full">
        {questions[questionIndex].answers.map((answer) => (
          <Answer key={answer} answer={answer} />
        ))}
      </div>
    </div>
  );
}
