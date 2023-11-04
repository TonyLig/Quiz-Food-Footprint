"use client";
import { useState } from "react";

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
      <button
        className="rounded-full bg-mainGreen px-4 py-2 mb-3 mt-2 font-semibold max-w-[120px] min-w-[120px]"
        onClick={handleClick}
      >
        {isOpen ? "Close" : "Learn More"}
      </button>
      {isOpen && <div>{children}</div>}
    </div>
  );
}
