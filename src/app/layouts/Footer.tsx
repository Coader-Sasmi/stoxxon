"use client";

import {
  Call,
  Facebook,
  Instagram,
  LinkedIn,
  MailOutline,
  Twitter,
} from "@mui/icons-material";
import { Divider } from "@mui/material";
import Link from "next/link";

const footerArr = [
  {
    _id: "1",
    heading: "FEATURES",
    list: [
      {
        title: "Lead Management",
        path: "/",
      },
      {
        title: "Contact Management",
        path: "/#about",
      },

      {
        title: "Deal Management",
        path: "/#problems",
      },
      {
        title: "Account Management",
        path: "/#benefits",
      },
      {
        title: "Sales Automation",
        path: "/#benefits",
      },
      {
        title: "Sales Analytics",
        path: "/#benefits",
      },
    ],
  },
  {
    _id: "2",
    heading: "SOLUTIONS",
    list: [
      {
        title: "Sales CRM",
        path: "/#my-account",
      },
      {
        title: "CRM Software",
        path: "/my-account/my-order",
      },
      {
        title: "Workflow Automation",
        path: "/wishlist",
      },
      {
        title: "Retail CRM",
        path: "/wishlist",
      },
      {
        title: "Real Estate CRM",
        path: "/wishlist",
      },
      {
        title: "CRM System",
        path: "/wishlist",
      },
    ],
  },

  {
    _id: "3",
    heading: "RESOURCES",
    list: [
      {
        title: "Essentials",
        path: "/#contact",
      },
      {
        title: "Compare Us",
        path: "/privacy-policy",
      },
      {
        title: "Salesforce Alternative",
        path: "/terms",
      },
      {
        title: "Pipedrive Alternative",
        path: "/shipping-policy",
      },
      {
        title: "Hubspot Alternative",
        path: "/refund-policy",
      },
      {
        title: "Freshsales Alternative",
        path: "/refund-policy",
      },
    ],
  },

  {
    _id: "4",
    heading: "Attract Web Visitors",
    list: [
      {
        title: "Email Marketing",
        path: "/#contact",
      },
      {
        title: "Email Templates",
        path: "/privacy-policy",
      },
      {
        title: "Email Broadcast",
        path: "/terms",
      },
      {
        title: "Double Opt-In Email",
        path: "/shipping-policy",
      },
      {
        title: "Autoresponder Email",
        path: "/shipping-policy",
      },
      {
        title: "Email A/B Testing",
        path: "/shipping-policy",
      },
    ],
  },
];

const Footer = () => {
  return (
    <section className="bg-gradient-to-r from-yellow-50 to-red-50 shadow">
      <section className="main-container py-10  md:px-10">
        <div className="flex md:flex-row flex-col md:justify-between justify-center md:gap-0  gap-5 items-center  ">
          <Link href="/">
            <div className="flex md:justify-start justify-center items-center">
              <img
                src="logo.png"
                alt="logo"
                className="w-[55%] md:w-[28%] lg:w-[20%] cursor-pointer"
              />
            </div>
          </Link>
        </div>
        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 mt-10  gap-8">
          {footerArr.map((curElm, index) => (
            <div className=" w-52" key={index}>
              <div>
                <h1 className="mb-2 font-semibold uppercase">
                  {curElm.heading}
                </h1>
                <ul className="flex flex-col ">
                  {curElm.list.map((curElm, index) => (
                    <li
                      className="mt-4 flex w-fit cursor-pointer list-none items-center  common-transition hover:text-secondary"
                      key={index}
                    >
                      <p className=" tracking-wide text-sm font-medium ">
                        {curElm.title}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          <div className="flex flex-col gap-4">
            <p className="mb-2 font-semibold uppercase">Contact Info.</p>
            <span className="flex items-center gap-1">
              <MailOutline className="!text-secondary !text-xl" />
              Email :<p> sales@yardcrm.com</p>
            </span>
            <span className="flex items-center gap-1">
              <Call className="!text-secondary !text-xl" />
              Phone :<p>+91 8114957912</p>
            </span>
            <div className="flex gap-3 items-center pt-4">
              <Link href="https://www.facebook.com/searchingyard/" target=" ">
                <h5 className="!text-white !bg-facebook !p-1 rounded-lg">
                  <Facebook />
                </h5>
              </Link>
              <Link href="https://www.instagram.com/SearchingYard/" target=" ">
                <h5 className="!text-white !bg-instagram !p-1 rounded-lg">
                  <Instagram />
                </h5>
              </Link>
              <Link href="https://twitter.com/YardSearching" target=" ">
                <h5 className="!text-white !bg-twitter !p-1 rounded-lg">
                  <Twitter />
                </h5>
              </Link>
              <Link
                href="https://www.linkedin.com/company/searchingyardindia/"
                target=" "
              >
                <h5 className="!text-white !bg-linkedin !p-1 rounded-lg">
                  <LinkedIn />
                </h5>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Divider />
      <section className="bg-primary">
        <div className="main-container flex  py-4 justify-center items-center text-white tracking-wide">
          <p>
            Copyright &copy; {new Date().getFullYear()} The YARDCRM A Product Of{" "}
            <Link
              href="https://searchingyard.com/"
              target=" "
              className="hover:cursor-pointer hover:!text-orange-400"
            >
              SearchingYard Software Group.
            </Link>{" "}
            All rights reserved.
          </p>
        </div>
      </section>
    </section>
  );
};

export default Footer;
