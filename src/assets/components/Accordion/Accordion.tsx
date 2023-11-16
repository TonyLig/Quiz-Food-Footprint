"use client";
import { useState } from "react";
import MainButton from "../MainButton/MainButton";

interface Props {
  children: React.ReactNode;
}

export default function Accordion({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="flex flex-col items-center">
      <MainButton onClick={handleClick}>
        {isOpen ? "Close" : "Learn More"}
      </MainButton>
      {isOpen && <div>{children}</div>}
    </div>
  );
}
