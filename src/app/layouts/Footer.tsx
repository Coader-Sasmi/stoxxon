"use client";

import { Call, ChevronRight, MailOutline } from "@mui/icons-material";
import { Divider } from "@mui/material";
import Link from "next/link";

const footerArr = [
  {
    _id: "1",
    heading: "OTHER LINKS",
    list: [
      {
        title: "Term & Conditions",
        path: "/term",
      },
      {
        title: "Privacy Policy",
        path: "/privacy",
      },
      {
        title: "Cancellation & Refund Policy",
        path: "/cancelation",
      },
    ],
  },
  {
    _id: "2",
    heading: "OUR SERVICES",
    list: [
      {
        title: "Stock Cash",
        path: "/",
      },
      {
        title: "Stock Futures",
        path: "/",
      },
      {
        title: "Stock Options",
        path: "/",
      },
      {
        title: "Index Options",
        path: "/",
      },
      {
        title: "BTST/STBT Pack",
        path: "/",
      },
      {
        title: "Delivery Pack",
        path: "/",
      },
    ],
  },
];

const Footer = () => {
  return (
    <section className=" shadow">
      <section className="main-container py-10  md:px-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-8">
          <div className="flex flex-col gap-5 md:justify-start justify-center items-start">
            <Link href="/">
              <img src="logo.png" alt="logo" className="w-32 cursor-pointer" />
            </Link>
            <div className="flex flex-col gap-4">
              <Link
                href="mailto:stoxxon5@gmail.com"
                className="flex items-center gap-1"
              >
                <MailOutline className="!text-secondary !text-xl" />
                Email :<p> stoxxon5@gmail.com</p>
              </Link>
              <Link
                href="tel:+919632445616"
                className="flex items-center gap-1"
              >
                <Call className="!text-secondary !text-xl" />
                Phone :<p>+91 9632445616</p>
              </Link>
            </div>
          </div>
          {footerArr.map((curElm, index) => (
            <div className=" w-52 md:w-full" key={index}>
              <div className="">
                <h1 className="mb-2 font-semibold uppercase ">
                  {curElm.heading}
                </h1>
                <ul className="flex flex-col ">
                  {curElm.list.map((curElm, index) => (
                    <li
                      className="mt-4 flex w-fit cursor-pointer list-none items-center common-transition hover:text-primary hover:underline"
                      key={index}
                    >
                      <Link href={curElm?.path}>
                        <div className="flex items-center">
                          <ChevronRight />

                          <p className=" tracking-wide text-sm font-medium ">
                            {curElm.title}
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Divider />
      <section className="bg-primary">
        <div className="main-container flex  py-4 justify-center items-center text-white tracking-wide">
          <p>
            Copyright &copy; {new Date().getFullYear()} Stoxxon Research
            Services . All rights reserved.
          </p>
        </div>
      </section>
    </section>
  );
};

export default Footer;
