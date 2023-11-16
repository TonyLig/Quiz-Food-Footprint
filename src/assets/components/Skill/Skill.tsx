"use client";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../../redux/store";
import MainButton from "../MainButton/MainButton";
import Link from "next/link";
import { reset } from "../../redux/quizSlice";

export default function Skill() {
  const { score } = useSelector((state: RootState) => state.quiz);
  const dispatch = useDispatch();
  return (
    <>
      <h1>{score}THIS IS MY FUCKING SKILL LEVEL</h1>
      <Link href={"/"}>
        <MainButton onClick={() => dispatch(reset())}>Reset</MainButton>
      </Link>
    </>
  );
}
