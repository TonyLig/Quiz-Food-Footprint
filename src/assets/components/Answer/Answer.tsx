"use client";

import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../../redux/store";
import { handleAnswer, nextQuestion } from "../../redux/quizSlice";

const TIME_TO_NEXT_ANSWER = 100;

interface Props {
  answer: string;
}

export default function Answer({ answer }: Props) {
  // Redux golbal state
  const { userAnswer, questionIndex, disableButton, questions } = useSelector(
    (state: RootState) => state.quiz,
  );
  const dispatch = useDispatch();

  function handleUserAnswer(userAnswer: string) {
    dispatch(handleAnswer(userAnswer));
    setTimeout(() => {
      dispatch(nextQuestion());
    }, TIME_TO_NEXT_ANSWER);
  }

  const highlightsAnswer = !userAnswer
    ? "bg-mainGreen hover:bg-hoverGreen"
    : answer === questions[questionIndex].correctAnswer
    ? "bg-green-700 focus:ring-green-700 ml-8 text-zinc-100"
    : "bg-red-500 focus:ring-red-800";

  return (
    <button
      className={`${highlightsAnswer} px-4 py-2 rounded-full font-semibold min-w-fit w-10/12 focus:outline-none`}
      disabled={disableButton}
      onClick={() => handleUserAnswer(answer)}
    >
      {answer}
    </button>
  );
}
