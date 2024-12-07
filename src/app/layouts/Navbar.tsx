"use client";
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { MdMenuOpen } from "react-icons/md";
import ResponsiveNav from "./ResponsiveNav";

export default function Navbar() {
  const [color, SetColor] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 43) {
        SetColor(true);
      } else {
        SetColor(false);
      }
    };
    window.addEventListener("scroll", changeColor);
    return () => {};
  }, []);

  return (
    <nav
      className={`sticky top-0 z-[9000] transition-all duration-100 ease-in-out bg-white ${
        color ? "shadow-sm" : ""
      }`}
    >
      <ResponsiveNav openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
      <p className="text-primary text-center w-full md:text-sm text-xs md:tracking-wider tracking-tighter py-3 border-b-2 border-secondary">
        Investing in the stock market involves risk. Please read all related
        documents carefully before making any investment.
      </p>
      <section className="main-container w-full flex items-center justify-between pt-2 ">
        <aside className="lg:w-1/4 w-full flex justify-between items-center">
          <Link href="/">
            <img
              src="logo.png"
              alt="main-logo"
              className="h-[5.1rem] w-auto cursor-pointer"
            />
          </Link>
          <div className="text-secondary text-3xl lg:hidden block">
            <MdMenuOpen onClick={() => setOpenDrawer(true)} />
          </div>
        </aside>
        <aside className="hidden w-1/2 lg:flex justify-center gap-4 md:gap-6 tracking-wider font-semibold">
          <Link href="/">
            <h6 className="transition-color duration-150 ease-in-out hover:text-primary">
              Home
            </h6>
          </Link>
          <Link href="/#about">
            <h6 className="transition-color duration-150 ease-in-out hover:text-primary">
              About
            </h6>
          </Link>
          <div className="group relative duration-150 ease-in-out">
            <Link href="/#services">
              <h6 className="transition-color duration-150 ease-in-out hover:text-primary">
                Services
              </h6>
            </Link>
            <div className="absolute bg-white hidden group-hover:block px-5 rounded-md border">
              <Link href="/equity">
                <h6 className="transition-color duration-150 ease-in-out hover:text-secondary py-3 flex items-center">
                  <FaAngleRight />
                  <span>Equity</span>
                </h6>
              </Link>
              <Link href="/derivatives">
                <h6 className="transition-color duration-150 ease-in-out hover:text-secondary pb-3 flex items-center">
                  <FaAngleRight />
                  <span>Derivatives</span>
                </h6>
              </Link>
            </div>
          </div>
          <Link href="/#pricing">
            <h6 className="transition-color duration-150 ease-in-out hover:text-primary">
              Pricing
            </h6>
          </Link>
        </aside>
        <aside className="hidden lg:flex w-1/4 items-center justify-end gap-1 ">
          <div>
            <Link href="/#contact">
              <h6 className="border-2 border-primary px-4 hover:bg-primary hover:text-white common-transition font-semibold py-1 rounded-md">
                Contact Us
              </h6>
            </Link>
          </div>
        </aside>
      </section>

      {/* <ResponsiveNav /> */}
    </nav>
  );
}
