"use client";
/* eslint-disable @next/next/no-img-element */

import { ChevronRight, Close, Menu } from "@mui/icons-material";
import { Collapse } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

export default function ResponsiveNav() {
  const [open, setOpen] = useState(false);
  const [serviceMore, setServiceMore] = useState(false);
  return (
    <section className="main-container block lg:hidden py-1 relative z-[9000] ">
      <div className="flex justify-between items-center">
        <Link href="/" className="">
          <img src="logo.png" alt="logo" className="md:w-[20%] w-[30%]" />
        </Link>

        <span className="" onClick={() => setOpen(!open)}>
          {open ? (
            <Close className="text-secondary text-3xl" />
          ) : (
            <Menu className="text-secondary text-3xl" />
          )}
        </span>
      </div>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <section className="flex flex-col gap-2 absolute bg-white w-full p-5 left-0 border-b shadow-sm ">
          <Link href="/#about">
            <h6 className="hover:text-secondary common-transition text-sm">
              About
            </h6>
          </Link>
          <Link href="/#services">
            <h6
              className="common-transition text-sm hover:text-secondary"
              onClick={() => setServiceMore(!serviceMore)}
            >
              Services
            </h6>
          </Link>

          <div className={`${serviceMore ? "hidden" : "block pl-2"}`}>
            <Link href="/equity">
              <h6 className="transition-color text-sm duration-150 ease-in-out hover:text-secondary py-2 flex items-center">
                <ChevronRight />
                <span>Equity</span>
              </h6>
            </Link>
            <Link href="/derivatives">
              <h6 className="transition-color text-sm duration-150 ease-in-out hover:text-secondary pb-3 flex items-center">
                <ChevronRight />
                <span>Derivatives</span>
              </h6>
            </Link>
          </div>
          <Link href="/#pricing">
            <h6 className="hover:text-secondary common-transition text-sm">
              Pricing
            </h6>
          </Link>
          <div className="flex flex-col gap-4 mb-4 ">
            <Link href="/#contact">
              <button className="rounded-md common-transition text-start hover:text-center hover:bg-primary/10 hover:px-5 hover:py-1">
                Contact Us
              </button>
            </Link>
          </div>
        </section>
      </Collapse>
    </section>
  );
}
