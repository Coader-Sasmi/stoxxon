"use client";
// import { TestimonialCard } from "components/cards";
// import Slider from "react-slick";
// import { TestimonialCardType } from "types";
export const testimonialSlideArr = [
  {
    id: 1,
    quote:
      "If integrating your CRM system is difficult for you, the CRM system is ineffective. Another excellent feature of YARDCRM is seamless integration. ",
    name: "Olive Yew / CEO",
    user_id: "@Olive_Yew",
    dp: "./home/profile_image_1.jpg",
    star: 4,
  },
  {
    id: 2,
    quote:
      "It is simpler to hire new sales representatives when the sales and communication processes are standardised. As rapidly as we plug in new clients, we can plug in new sales representatives.",
    name: "Aida Bugg / Director",
    user_id: "@Aida_Bugg",
    dp: "./home/profile_image_3.jpg",
    star: 5,
  },
  {
    id: 3,
    quote:
      "Our entire company uses YARDCRM, with the sales department using it the most regularly. For all of our leads, contacts, and clients, YARDCRM serves as a database.",
    name: "Teri Dactyl / Manager",
    user_id: "@Teri_Dactyl",
    dp: "./home/profile_image_2.jpg",
    star: 5,
  },
  {
    id: 4,
    quote:
      "A significant component of our business is YARDCRM. Prior to using YARDCRM, our management team had trouble keeping track of ongoing deals. ",
    name: "Allie Grater / Client",
    user_id: "@Allie_Grater",
    dp: "./home/profile_image_4.jpg",
    star: 4,
  },
  {
    id: 5,
    quote:
      "I'm overjoyed with how productive my company is now that I incorporate YARDCRM into my regular activities. ",
    name: "Aida Bugg / Director",
    user_id: "@Aida_Bugg",
    dp: "./home/profile_image_3.jpg",
    star: 5,
  },
  {
    id: 6,
    quote:
      "We are observing improved business-wide coordination, particularly between Sales and Support, as well as an increase in the effectiveness of our marketing initiatives. ",
    name: "Allie Grater / Client",
    user_id: "@Allie_Grater",
    dp: "./home/profile_image_4.jpg",
    star: 4,
  },
];

const CustomerReview = () => {
  //   const settings = {
  //     dots: false,
  //     infinite: true,
  //     slidesToShow: 4,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     speed: 500,
  //     cssEase: "linear",
  //     autoplaySpeed: 4000,
  //     pauseOnHover: false,
  //     arrows: false,
  //     responsive: [
  //       {
  //         breakpoint: 1024,
  //         settings: {
  //           slidesToShow: 2,
  //           slidesToScroll: 1,
  //           infinite: true,
  //         },
  //       },
  //       {
  //         breakpoint: 940,
  //         settings: {
  //           slidesToShow: 2,
  //           slidesToScroll: 1,
  //           infinite: true,
  //           arrows: false,
  //         },
  //       },
  //       {
  //         breakpoint: 760,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1,
  //           infinite: true,
  //           arrows: false,
  //         },
  //       },
  //     ],
  //   };
  return (
    <section
      className="main-container  md:py-20 py-8 scroll-mt-8"
      id="testimonial"
    >
      <h1 className="md:text-4xl text-3xl tracking-tighter font-semibold text-center mb-10">
        What Our <span className="text-secondary">Clients</span> Says
      </h1>

      <section className="">
        {/* <Slider {...settings}>
          {testimonialSlideArr.map((curElm) => (
            <TestimonialCard curElm={curElm} key={curElm.id} />
          ))}
        </Slider> */}
      </section>
    </section>
  );
};

export default CustomerReview;
