"use client";
import { CheckCircleOutline } from "@mui/icons-material";
import { Divider } from "@mui/material";

const solution_Arr = [
  {
    _id: "1",
    heading: "Equity Cash",
    description:
      "Equity cash services facilitate seamless trading, settlement, and management of cash equity transactions for investors.",
    subheading: "POPULAR FEATURES",
    list: [
      {
        subtitle: "Real-time Market Data",
      },
      {
        subtitle: "Advanced Charting Tools",
      },
      {
        subtitle: "Seamless Order Execution",
      },
      {
        subtitle: "Comprehensive Risk Management",
      },
    ],
    started: "Get started",
  },
  {
    _id: "2",
    heading: "Options",
    description:
      "Options trading services provide tools, strategies, and insights for buying or selling options to maximize profits.",
    subheading: "POPULAR FEATURES",
    list: [
      {
        subtitle: "Real-time Market Data",
      },
      {
        subtitle: "Advanced Charting Tools",
      },
      {
        subtitle: "Seamless Order Execution",
      },
      {
        subtitle: "Comprehensive Risk Management",
      },
    ],
    started: "Get started",
  },
  {
    _id: "3",
    heading: "Equity Future",
    description:
      "Equity future services provide contracts to trade stocks at predetermined prices on future dates.",
    subheading: "POPULAR FEATURES",
    list: [
      {
        subtitle: "Real-time Market Data",
      },
      {
        subtitle: "Advanced Charting Tools",
      },
      {
        subtitle: "Seamless Order Execution",
      },
      {
        subtitle: "Comprehensive Risk Management",
      },
    ],
    started: "Get started",
  },
  {
    _id: "4",
    heading: "Commodity MCX",
    description:
      "Commodity MCX services offer trading, analysis, and support for commodities like gold, silver, and crude oil.",
    subheading: "POPULAR FEATURES",
    list: [
      {
        subtitle: "Real-time Market Data",
      },
      {
        subtitle: "Advanced Charting Tools",
      },
      {
        subtitle: "Seamless Order Execution",
      },
      {
        subtitle: "Comprehensive Risk Management",
      },
    ],
    started: "Get started",
  },
];
export default function TopServices() {
  return (
    <section className="main-container md:py-20 py-8 scroll-mt-4" id="solution">
      <div className="flex flex-col md:gap-10 gap-5 justify-center items-center w-full">
        <h1 className="md:text-4xl text-3xl tracking-tighter font-semibold">
          Popular Ser<span className="text-secondary">vices</span>
        </h1>
        <p className="  md:tracking-wider tracking-tight text-center md:text-base text-xs">
          Identify new opportunities, convert visitors, deliver customer
          happiness, <br className="hidden md:block" /> and more!
        </p>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 md:mt-10 mt-2">
        {solution_Arr.map((item) => (
          <div
            key={item._id}
            className="shadow md:p-10 p-5 rounded-xl flex flex-col md:gap-5 "
          >
            <div className="flex md:flex-row flex-col-reverse items-center md:gap-2 gap-5">
              <span className="md:w-5/6 w-full">
                <h5 className="font-semibold text-lg pb-5">{item.heading}</h5>
                <p className="text-sm text-gray-700">{item.description}</p>
              </span>
              <span className="md:w-1/6 w-full hidden md:block">
                <img src="./sharemarket.png" alt="icon" className="h-20 w-20" />
              </span>
            </div>
            <Divider />
            <span className="py-5 md:py-0">
              <h5 className="pb-3">{item.subheading}</h5>
              <h6 className="grid lg:grid-cols-2 grid-cols-1 gap-2">
                {item.list.map((innerItem, index) => (
                  <div key={index} className="flex gap-1 items-center">
                    <CheckCircleOutline className="text-secondary text-lg" />
                    <p className="">{innerItem.subtitle}</p>
                  </div>
                ))}
              </h6>
            </span>
            <span>
              <button className="btn-primary text-white bg-primary h-9 w-32 rounded-md">
                {item.started}
              </button>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
