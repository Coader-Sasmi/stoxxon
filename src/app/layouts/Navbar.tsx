"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ResponsiveNav from "./ResponsiveNav";

export default function Navbar() {
  const [color, SetColor] = useState(false);

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
      <section className="main-container hidden items-center justify-between pt-2 lg:flex">
        <aside className="w-1/4">
          <Link href="/">
            <img
              src="logo.png"
              alt="main-logo"
              className="h-[5.1rem] w-auto cursor-pointer"
            />
          </Link>
        </aside>
        <aside className="w-1/2 flex justify-center gap-4 md:gap-6 tracking-wider font-semibold">
          <Link href="/">
            <h6 className="transition-color duration-150 ease-in-out hover:text-secondary">
              Home
            </h6>
          </Link>
          <Link href="/#about">
            <h6 className="transition-color duration-150 ease-in-out hover:text-secondary">
              About
            </h6>
          </Link>
          <Link href="/#services">
            <div className="group relative ">
              <h6 className="transition-color duration-150 ease-in-out hover:text-secondary">
                Services
              </h6>
              <div className="absolute bg-white hidden group-hover:block px-5 py-2 rounded-md border">
                <Link href="/derivatives">
                  <h6 className="transition-color duration-150 ease-in-out hover:text-secondary py-2">
                    Derivatives
                  </h6>
                </Link>
                <Link href="/equity">
                  <h6 className="transition-color duration-150 ease-in-out hover:text-secondary">
                    Equity
                  </h6>
                </Link>
              </div>
            </div>
          </Link>
          <Link href="/#pricing">
            <h6 className="transition-color duration-150 ease-in-out hover:text-secondary">
              Pricing
            </h6>
          </Link>
        </aside>
        <aside className="flex w-1/4 items-center justify-end gap-1 ">
          <div>
            <Link href="/#contact">
              <h6 className="border-2 border-primary px-4 hover:bg-primary hover:text-white common-transition font-semibold py-1 rounded-md">
                Contact Us
              </h6>
            </Link>
          </div>
        </aside>
      </section>
      <ResponsiveNav />
    </nav>
  );
}
