"use client";

import { useSelector } from "react-redux";

import { RootState } from "../../redux/store";
import Answer from "../Answer/Answer";
import { redirect } from "next/navigation";

export default function QuizCard() {
  const { questionIndex, questions } = useSelector(
    (state: RootState) => state.quiz,
  );

  if (questionIndex >= questions.length) return redirect("/skill");

  return (
    <>
      <p className="mt-2 font-bold">
        Question {questions[questionIndex].id}/{questions.length}
      </p>
      <div className="flex flex-col items-center mt-5">
        <p className="w-9/12 max-w-[600px] h-[90px] text-lg mt-2">
          {questions[questionIndex].question}
        </p>
        <div className="flex flex-col items-center gap-4 w-full mt-6">
          {questions[questionIndex].answers.map((answer) => (
            <Answer key={answer} answer={answer} />
          ))}
        </div>
      </div>
    </>
  );
}
