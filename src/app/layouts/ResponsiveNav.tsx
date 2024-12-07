"use client";
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { CustomDrawer } from "../core";

type ResponsiveProps = {
  openDrawer: boolean;
  setOpenDrawer: Dispatch<SetStateAction<boolean>>;
};

export default function ResponsiveNav({
  openDrawer,
  setOpenDrawer,
}: ResponsiveProps) {
  const [serviceMore, setServiceMore] = useState(false);
  return (
    <CustomDrawer
      open={openDrawer}
      onClose={() => setOpenDrawer(false)}
      anchor="right"
      drawerStyle="w-[60vw] md:w-[50vw] h-screen "
    >
      <section className="p-5">
        <div className="flex justify-end items-end text-2xl">
          <RxCross2 onClick={() => setOpenDrawer(false)} />
        </div>
        <section className="flex flex-col gap-2 w-full">
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
                <FaAngleRight />
                <span>Equity</span>
              </h6>
            </Link>
            <Link href="/derivatives">
              <h6 className="transition-color text-sm duration-150 ease-in-out hover:text-secondary pb-3 flex items-center">
                <FaAngleRight />
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
      </section>
    </CustomDrawer>
  );
}
