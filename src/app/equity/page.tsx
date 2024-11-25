"use client";
/* eslint-disable @next/next/no-img-element */
import {
  ArrowCircleRightOutlined,
  CurrencyRupeeOutlined,
} from "@mui/icons-material";
import { HeroSec } from "../components";
import PublicLayout from "../layouts";

export default function Page() {
  const service_Arr = [
    {
      _id: "1",
      service:
        "Personalized service with a low advisor-to-investor ratio and timely updates via call & SMS.",
    },
    {
      _id: "2",
      service:
        "Weekly 3-4 trading recommendations with 7%-8% returns and 2%-3% risk, maintaining a 1:2.8 or 1:3 risk-reward ratio.",
    },
    {
      _id: "3",
      service:
        "Complimentary monthly portfolio review for existing investments.",
    },
    {
      _id: "4",
      service: "On-demand research reports tailored to client needs.",
    },
  ];
  const price_Arr = [
    { _id: "1", price: "9000", month: "1 Month" },
    { _id: "2", price: "21000", month: "3 Months" },
    { _id: "3", price: "33000", month: "6 Months" },
  ];
  return (
    <PublicLayout>
      <HeroSec title={"EQUITY"} />
      <section className="main-container py-10 flex flex-col gap-10 bg-purple-50">
        <div className="flex flex-col gap-5">
          <h1 className="font-semibold text-xl">STOXXON - Equity</h1>
          <p className="text-gray-600">
            Momentum trading using breakout/breakdown strategies identifies
            market trends and potential stock movements. Backed by
            industry-leading research, it focuses on fundamentally strong stocks
            to achieve high returns in volatile markets.
          </p>
        </div>
        <div className="flex lg:flex-row flex-col gap-10">
          <div className="flex flex-col gap-5 lg:w-2/3">
            <h1 className="font-semibold text-xl">SERVICE TAKEAWAYS :</h1>
            <div className="flex flex-col gap-3">
              {service_Arr?.map((curElm) => (
                <div key={curElm?._id}>
                  <p className="text-gray-600 flex items-start gap-3">
                    <ArrowCircleRightOutlined className="text-primary" />
                    {curElm?.service}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/3">
            <img src="./Risk_Meter.png" className="w-96 h-auto" />
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 lg:px-40">
          {price_Arr?.map((curElm) => (
            <div
              key={curElm?._id}
              className="bg-white rounded-md border hover:shadow-md"
            >
              <div className="flex items-center gap-5 p-5">
                <img src="./stock.png" className="md:w-20 w-12" />
                <div className="flex flex-col gap-2 ">
                  <p className="text-xl font-semibold">
                    <CurrencyRupeeOutlined />
                    <span>{curElm?.price} + 18% GST</span>
                  </p>
                  <p className="text-center text-gray-500">
                    for {curElm?.month}
                  </p>
                </div>
              </div>

              <div className="flex justify-center items-center bg-primary text-white py-2">
                <button className="font-semibold">BUY NOW</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PublicLayout>
  );
}
