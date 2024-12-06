"use client";
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { useState } from "react";

const pricing_Arr = [
  {
    _id: "1",
    heading: "Basic",
    monthlyPrice: "11,800",
    yearlyPrice: "9000",
    monthlyPath: "for 1 month",
    yearlyPath: "for 1 month",
    button: "BUY NOW",
    description: "Essential tools for beginners to start trading confidently.",
  },
  {
    _id: "2",
    heading: "Premium",
    monthlyPrice: "23,600",
    yearlyPrice: "21,000",
    monthlyPath: "for 1 month",
    yearlyPath: "for 3 months",
    button: "BUY NOW",
    description: "Unlock advanced insights with our Premium Stock Plan.",
  },
  {
    _id: "3",
    heading: "Modified",
    monthlyPrice: "41,772",
    yearlyPrice: "33,000",
    monthlyPath: "for 1 month",
    yearlyPath: "for 6 months",
    button: "BUY NOW",
    description: "Adapted strategy ensures better returns in stock market.",
  },
];
export default function PricingSection() {
  const [pricing, setPricing] = useState("equity");
  const handleChange = (type: string) => {
    setPricing(type);
  };
  return (
    <section className="main-container md:py-36 py-32 bg-gray-100" id="pricing">
      <div className="flex flex-col md:gap-10 gap-5 justify-center items-center w-full">
        <h1 className="md:text-4xl text-3xl tracking-tighter font-semibold">
          Our Pric<span className="text-secondary">ing</span>
        </h1>
        <div className=" bg-purple-200 px-3 py-2 font-semibold shadow-2xl rounded-full ">
          <span className="flex gap-2 items-center cursor-pointer">
            <p
              onClick={() => handleChange("equity")}
              className={`${
                pricing === "equity"
                  ? "bg-black text-white py-1 px-3 text-sm rounded-full "
                  : ""
              }`}
            >
              Equity
            </p>
            <p
              onClick={() => handleChange("Derivatives")}
              className={`${
                pricing === "Derivatives"
                  ? "bg-black text-white py-1 px-3 text-sm rounded-full  "
                  : ""
              }`}
            >
              Derivatives
            </p>
          </span>
        </div>
      </div>
      <div className="grid md:grid-cols-12 grid-cols-3 gap-5 w-full md:pt-16 pt-5 lg:px-40 ">
        {pricing_Arr.map((item, index) => (
          <div
            key={item._id}
            className={`bg-white shadow flex flex-col md:gap-5 gap-2 justify-center items-center rounded-xl  relative md:py-14 py-8 px-6 col-span-4 ${
              item._id === "3" ? "border-b-8  border border-black" : " "
            }`}
          >
            {index === 2 && (
              <p
                className={`${
                  item._id === "3"
                    ? "absolute top-2 -right-2 bg-green-400 px-3 py-1 text-xs rounded-r-lg font-medium"
                    : ""
                }`}
              >
                MOST POPULAR
              </p>
            )}

            <h5 className="lg:text-2xl text-xl font-medium">{item.heading}</h5>
            <h3 className="lg:text-5xl text-3xl">
              <span className="md:text-2xl text-lg text-gray-700">₹</span>
              {pricing === "equity" ? item.yearlyPrice : item.monthlyPrice}
            </h3>
            <p className="text-sm">
              {pricing === "equity" ? item.yearlyPath : item.monthlyPath}
            </p>
            <Link href={`${pricing === "equity" ? "/equity" : "/derivatives"}`}>
              <button
                className={` text-white text-sm lg:px-10 px-8 py-2 lg:py-3 common-transition cursor-pointer rounded-md font-medium lg:font-semibold ${
                  item._id === "3"
                    ? "bg-secondary"
                    : "bg-primary hover:bg-secondary"
                }`}
              >
                {item.button}
              </button>
            </Link>

            <p className="text-center h-16 pt-2 md:hidden lg:block block text-gray-500">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
