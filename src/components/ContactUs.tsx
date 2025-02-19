"use client";
/* eslint-disable @next/next/no-img-element */

import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <section
      className="main-container md:py-16 py-12 bg-purple-100 scroll-mt-16"
      id="contact"
    >
      <div className="flex md:flex-row flex-col items-center bg-white md:gap-10 gap-5 w-full">
        <div className="w-full flex flex-col gap-5 justify-center items-center p-3 relative lg:border-r border-secondary">
          <h1 className="md:text-4xl text-3xl tracking-tighter font-semibold">
            Get In <span className="text-secondary">Touch</span>
          </h1>
          <p className="md:tracking-wider tracking-tight text-center md:text-base text-xs">
            If you need us you can always call us or fill in the form
          </p>
          <div className="w-full md:w-[40rem] md:p-10 ">
            <ContactForm />
          </div>
        </div>

        <div className="w-full hidden md:block ">
          <video
            autoPlay
            loop
            muted
            className=" w-full h-full object-cover opacity-90"
            aria-label="Background video showcasing stock trading"
          >
            <source src="/support.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
