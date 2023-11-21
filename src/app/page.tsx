import Image from "next/image";
import Footprint from "../assets/images/footprint.webp";
import MainButton from "../assets/components/MainButton/MainButton";
import Accordion from "../assets/components/Accordion/Accordion";
import Link from "next/link";

// Style images
const footImageStyle = {
  borderRadius: "5%",
  border: "1px solid ",
  marginBottom: "5px",
  marginLeft: "20px",
};

export default function Home() {
  return (
    <main className="flex flex-col items-center mt-10 gap-4">
      <Image
        src={Footprint}
        alt="footprint"
        style={footImageStyle}
        width={500}
        height={200}
      />
      <Link href={"/quiz"}>
        <MainButton>Start Quiz</MainButton>
      </Link>

      <Accordion>
        <p className="text-left p-5">
          Our goal with this quiz is to empower you with the knowledge of the
          impact your food choices have on both the environment and people.
          We&apos;ll take you on an engaging educational journey to test your
          awareness of food-related issues. By the end, you&apos;ll discover
          your skill level and be better equipped to make more sustainable and
          socially responsible food choices.
        </p>
      </Accordion>
    </main>
  );
}
