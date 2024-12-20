"use client";
/* eslint-disable @next/next/no-img-element */

import {
  PeopleAltOutlined,
  Percent,
  QueryStats,
  TrendingUp,
} from "@mui/icons-material";
import ReadM from "./ReadM";

const aboutUs_Arr = [
  {
    _id: "1",
    icon: (
      <QueryStats className="!text-white bg-[#9aafc2] !text-6xl !p-1 !rounded-full" />
    ),
    count: "1512+",
    title: "Research Hour",
    description:
      "Dedicated time analyzing stock trends, data, and market opportunities.",
  },
  {
    _id: "2",
    icon: (
      <PeopleAltOutlined className="!text-white bg-[#9aafc2] !text-6xl !p-1 !rounded-full" />
    ),
    count: "103+",
    title: "Happy Clients",
    description:
      "Empowering investors with reliable insights for consistent stock market success.",
  },
  {
    _id: "3",
    icon: (
      <Percent className="!text-white bg-[#9aafc2] !text-6xl !p-1 !rounded-full" />
    ),
    count: "77%",
    title: "Expected Accuracy Percentage",
    description: "The stock market's expected accuracy depends.",
  },
  {
    _id: "4",
    icon: (
      <TrendingUp className="!text-white bg-[#9aafc2] !text-6xl !p-1 !rounded-full" />
    ),
    count: "06+",
    title: "Years Experience",
    description: "6 years of experience in stock market analysis and trading.",
  },
];

export default function About() {
  return (
    <aside
      className="main-container md:py-24 py-20 w-full scroll-mt-16 lg:px-48"
      id="about"
    >
      <section className="flex md:flex-row flex-col items-center gap-5 mb-20">
        <h1 className="md:text-4xl text-3xl tracking-tighter font-semibold lg:w-[35rem] md:w-full">
          About <span className="text-secondary">Us</span>
        </h1>
        <div className="w-1 h-16 bg-gray-300 hidden lg:block"></div>
        <p className="text-gray-600 tracking-wider hidden md:block">
          At Stoxxon, we offer expert research and investment guidance to help
          you maximize returns. Intraday trading can deliver significant
          profits, but it comes with higher risk. For those preferring lower
          risk, stock options or swing trading may be more suitable. Our team
          leverages advanced analytics to tailor strategies that balance risk
          and growth, ensuring you make informed decisions to optimize your
          portfolio.
        </p>
        <ReadM />
      </section>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mt-5 w-full bg-[#9aafc2] p-6 ">
        {aboutUs_Arr.map((item) => (
          <div
            key={item._id}
            className="relative flex flex-col md:gap-4 gap-2 md:h-60 justify-center items-center border common-transition cursor-default shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-5 rounded-sm text-center bg-white"
          >
            {/* <div className="w-[20rem] h-[10rem] border-t-2 border-dashed border-gray-500 rounded-t-full mx-auto"></div> */}

            <p className="absolute md:-translate-y-[7.7rem] -translate-y-16 hidden md:block">
              {item.icon}
            </p>

            <h5 className="md:text-3xl text-xl font-semibold">{item.count}</h5>
            <div className="flex flex-col gap-2">
              <h6 className="md:font-medium text-sm md:text-lg">
                {item.title}
              </h6>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
