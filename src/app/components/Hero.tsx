"use client";
/* eslint-disable @next/next/no-img-element */
import { Done } from "@mui/icons-material";

export default function Hero() {
  return (
    <section className="h-[calc(100vh-89.6px)] relative ">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover opacity-90"
        aria-label="Background video showcasing stock trading"
      >
        <source src="/slow.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 flex flex-col gap-7 md:gap-10 justify-center items-center lg:py-24 py-28 text-center main-container">
        <h1 className="font-semibold md:font-medium lg:text-[4rem] md:text-5xl text-4xl text-white drop-shadow-md">
          Trade Smarter. Analyze Deeper.
          <br />
          Profit Faster.
        </h1>
        <p className="lg:text-2xl md:text-xl font-thin text-white drop-shadow-md">
          Empowering Your Intraday Success with Data-Driven Stock Market
          Insights!
        </p>
        <div className="border-2 flex md:justify-between border-secondary rounded-full md:p-3 p-2 bg-white w-[19rem] md:w-[30rem] lg:w-[40rem]">
          <input
            type="email"
            placeholder="Your email address"
            className="md:pl-5 pl-2 w-full outline-none"
            aria-label="Enter your email address"
          />
          <button
            className="text-white whitespace-nowrap bg-secondary md:font-semibold text-xs md:text-sm px-2 py-2 md:px-7 md:py-3 rounded-full"
            aria-label="Get Started with Stock Market Insights"
          >
            Get Started
          </button>
        </div>
        <div className="flex gap-5 md:text-base text-xs text-white">
          <span className="flex items-center gap-2">
            <Done className="bg-primary text-white rounded-full md:text-lg text-sm" />
            <h6 className="font-semibold">Join Us Now!</h6>
          </span>
          <span className="flex items-center gap-2">
            <Done className="bg-primary text-white rounded-full md:text-lg text-sm" />
            <h6 className="font-semibold">Boost Share Market Profits!</h6>
          </span>
        </div>
      </div>
    </section>
  );
}
