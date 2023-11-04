import Image from "next/image";
import Footprint from "../assets/images/footprint.png";
import MainButton from "../assets/components/MainButton";
import Accordion from "../assets/components/Accordion";

const imageStyle = {
  borderRadius: "5%",
  border: "1px solid ",
  marginBottom: "20px",
};

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Image
        style={imageStyle}
        src={Footprint}
        alt="footprint"
        width={500}
        height={200}
      />
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
      <MainButton>Start Quiz</MainButton>
    </main>
  );
}
