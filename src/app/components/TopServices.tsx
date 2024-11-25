"use client";
/* eslint-disable @next/next/no-img-element */
import { CheckCircleOutline } from "@mui/icons-material";
import { Divider } from "@mui/material";
import Link from "next/link";

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
        subtitle: "Comprehensive Risk Management",
      },
      {
        subtitle: "Type:Intraday | SMS/day:1-2",
      },
      {
        subtitle: "STARTS FROM 10,000",
      },
    ],
    started: "Get started",
  },
  {
    _id: "2",
    heading: "Stock Options",
    description:
      "Options trading services provide tools, strategies, and insights for buying or selling options to maximize profits.",
    subheading: "POPULAR FEATURES",
    list: [
      {
        subtitle: "Real-time Market Data",
      },
      {
        subtitle: "Comprehensive Risk Management",
      },
      {
        subtitle: "Type:Intraday | SMS/day:1-2",
      },
      {
        subtitle: "STARTS FROM 10,000",
      },
    ],
    started: "Get started",
  },

  {
    _id: "3",
    heading: "Index Options",
    description:
      "Commodity MCX services offer trading, analysis, and support for commodities like gold, silver, and crude oil.",
    subheading: "POPULAR FEATURES",
    list: [
      {
        subtitle: "Real-time Market Data",
      },
      {
        subtitle: "Comprehensive Risk Management",
      },
      {
        subtitle: "Type:Intraday | SMS/day:1-2",
      },
      {
        subtitle: "STARTS FROM 10,000",
      },
    ],
    started: "Get started",
  },
];
export default function TopServices() {
  return (
    <section className="main-container md:py-20 py-8 scroll-mt-4" id="services">
      <div className="flex flex-col md:gap-10 gap-5 justify-center items-center w-full">
        <h1 className="md:text-4xl text-3xl tracking-tighter font-semibold">
          Ser<span className="text-secondary">vices</span>
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
                <p className="text-sm text-gray-500">
                  Customers will receive recommendations via technical
                  analysis.This service is for those customers that have a High
                  Risk Appetite.
                </p>
              </span>
              <span className="md:w-1/6 w-full hidden md:block">
                <img src="./sharemarket.png" alt="icon" className="h-20 w-20" />
              </span>
            </div>
            <Divider />
            <span className="py-5 md:py-0">
              <h5 className="pb-3 text-primary text-sm">FEATURES & RISKS</h5>
              <h6 className="grid lg:grid-cols-2 grid-cols-1 gap-2">
                {item.list.map((innerItem, index) => (
                  <div key={index} className="flex gap-1 items-center">
                    <CheckCircleOutline className="text-secondary text-lg" />
                    <p className="">{innerItem.subtitle}</p>
                  </div>
                ))}
              </h6>
            </span>
            <Link href="/derivatives">
              <button className="btn-primary capitalize text-white bg-primary h-9 w-32 rounded-md">
                {item.started}
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
