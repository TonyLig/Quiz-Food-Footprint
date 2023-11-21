"use client";

import Link from "next/link";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";

import { reset } from "../../redux/quizSlice";
import { RootState } from "../../redux/store";
import MainButton from "../MainButton/MainButton";
import notVeryAware from "../../images/not_very_aware.webp";
import moderatlyAware from "../../images/moderately_aware.webp";
import veryAware from "../../images/very_aware.webp";

// Style image
const skillImageStyle = {
  margin: "5 px",
};

let skillImage = notVeryAware;
let skillText = "NOT VERY AWARE";

export default function Skill() {
  // Redux state
  const { score, questions } = useSelector((state: RootState) => state.quiz);
  const dispatch = useDispatch();

  switch (score) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
      skillImage = notVeryAware;
      skillText = "NOT VERY AWARE";
      break;
    case 5:
    case 6:
    case 7:
      skillImage = moderatlyAware;
      skillText = "MODERATLY AWARE";
      break;
    case 8:
    case 9:
    case 10:
      skillImage = veryAware;
      skillText = "VERY AWARE";
      break;
  }

  return (
    <>
      <h1 className="font-semibold mt-2">
        Your Score is: {score} out of {questions.length}
      </h1>
      <h1 className="font-bold text-xl my-2">{skillText}</h1>
      <div className="m-3">
        <Image
          src={skillImage}
          style={skillImageStyle}
          alt="pasta"
          width={300}
          height={300}
        />
      </div>
      <Link href={"/"}>
        <MainButton onClick={() => dispatch(reset())}>Reset</MainButton>
      </Link>
    </>
  );
}
