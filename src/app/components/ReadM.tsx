"use client";
import { useState } from "react";

interface ReadMoreProps {
  text: string;
}

const ReadMore: React.FC<ReadMoreProps> = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded((prevState) => !prevState);
  };

  const truncatedText = text.split(" ").slice(0, 20).join(" ") + "...";

  return (
    <div>
      <p>{isExpanded ? text : truncatedText}</p>
      <button
        onClick={toggleReadMore}
        className="text-blue-500 hover:underline"
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};

export default function ReadM() {
  const content =
    "At Stoxxon, we offer expert research and investment guidance to help you maximize returns. Intraday trading can deliver significant profits, but it comes with higher risk. For those preferring lower risk, stock options or swing trading may be more suitable. Our team leverages advanced analytics to tailor strategies that balance risk and growth, ensuring you make informed decisions to optimize your portfolio.";

  return (
    <div className="md:tracking-wider tracking-tight text-center md:text-base text-xs md:hidden block text-gray-600">
      <ReadMore text={content} />
    </div>
  );
}
