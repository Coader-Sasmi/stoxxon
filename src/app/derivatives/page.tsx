"use client";
/* eslint-disable @next/next/no-img-element */
import { ArrowRight } from "@mui/icons-material";
import { HeroSec } from "../components";
import PublicLayout from "../layouts";

export default function Page() {
  const pricing_Arr = [
    {
      _id: "1",
      heading: "Basic",
      monthlyPrice: "11,800",
      monthlyPath: "for 1 month",
      button: "BUY NOW",
      description: [
        { title: "1 – 2 recommendations in a day." },
        {
          title:
            "Read the detailed Research reports on recommendations provided.",
        },
        {
          title: "Alert through SMS only.",
        },
      ],
    },
    {
      _id: "2",
      heading: "Premium",
      monthlyPrice: "23,600",
      monthlyPath: "for 1 month",
      button: "BUY NOW",
      description: [
        {
          title:
            "2-3 daily recommendations, including one in Nifty or Bank Nifty options.",
        },
        {
          title: "3 BTST/STBT calls per week.",
        },
        {
          title:
            "Alerts sent via SMS with telephonic assistance on provided recommendations.",
        },
        {
          title:
            "Detailed research reports available for all recommendations. ",
        },
      ],
    },
    {
      _id: "3",
      heading: "Modified",
      monthlyPrice: "41,772",
      monthlyPath: "for 1 month",
      button: "BUY NOW",
      description: [
        {
          title:
            "2-3 daily recommendations, including one in Nifty or Bank Nifty options.",
        },
        {
          title: "3 BTST/STBT calls per week.",
        },
        {
          title:
            "Alerts sent via SMS with telephonic assistance on provided recommendations.",
        },
        {
          title:
            "Detailed research reports available for all recommendations. ",
        },
      ],
    },
  ];
  return (
    <PublicLayout>
      <HeroSec title={"DERIVATIVES"} />
      <section className="main-container py-10 flex flex-col gap-10 bg-purple-50">
        <div className="flex flex-col gap-5">
          <h1 className="font-semibold text-xl">STOXXON - Derivatives</h1>
          <p className="text-gray-600">
            DerivativesThis tactical investment approach understands the trends
            in the markets and identifies the potential movement of the stocks &
            index. We offer the best industry research in identifying
            fundamentally potential stocks to generate uplifting returns in the
            volatile markets.
          </p>
        </div>
        <div className="flex lg:flex-row flex-col gap-10">
          <div className="flex flex-col gap-5 lg:w-2/3">
            <h1 className="font-semibold text-xl">METHODOLOGY :</h1>
            <p className="text-gray-600">
              We select strong F&O stocks, use advanced charting for trend-based
              trades, offer technical analysis tailored to your risk profile,
              provide portfolio reviews, and apply risk management techniques
              like hedging for key events.
            </p>
          </div>
          <div className="lg:w-1/3">
            <img src="./Risk_Meter.png" className="w-96 h-auto" />
          </div>
        </div>
        <div className="grid md:grid-cols-12 grid-cols-3 gap-5 w-full md:pt-16 pt-5 lg:px-40 ">
          {pricing_Arr.map((item, index) => (
            <div
              key={item._id}
              className={`bg-white shadow flex flex-col md:gap-5 gap-2 justify-center items-center rounded-xl relative md:py-14 py-8 px-6 col-span-4 ${
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

              <h5 className="lg:text-2xl text-xl font-medium">
                {item.heading}
              </h5>
              <h3 className="lg:text-5xl text-3xl">
                <span className="md:text-2xl text-lg text-gray-700">₹</span>
                {item?.monthlyPrice}
              </h3>
              <p className="text-sm">{item?.monthlyPath}</p>
              <h6
                className={` text-white text-sm lg:px-10 px-8 py-2 lg:py-3 common-transition cursor-pointer rounded-md font-medium lg:font-semibold ${
                  item._id === "3"
                    ? "bg-secondary"
                    : "bg-primary hover:bg-secondary"
                }`}
              >
                {item.button}
              </h6>
              <div className="lg:h-48 flex flex-col gap-1 pt-2 text-gray-500">
                {item.description?.map((newElm, i: number) => (
                  <p key={i} className="flex gap-1 ">
                    <ArrowRight className="text-2xl text-gray-950" />
                    <span>{newElm?.title}</span>
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </PublicLayout>
  );
}
