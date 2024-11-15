"use client";
const pricing_Arr = [
  {
    _id: "1",
    heading: "Basic",
    monthlyPrice: "11,800",
    yearlyPrice: "800",
    monthlyPath: "/user/month billed monthly",
    yearlyPath: "/user/month billed annually",
    button: "BUY NOW",
    description:
      "Streamline and elevate your trading journey with data-driven insights and smart automation.",
  },
  {
    _id: "2",
    heading: "Premium",
    monthlyPrice: "23,600",
    yearlyPrice: "1,400",
    monthlyPath: "/user/month billed monthly",
    yearlyPath: "/user/month billed annually",
    button: "BUY NOW",
    description:
      "Optimize investment strategies and drive financial growth with precision.",
  },
  {
    _id: "3",
    heading: "Modified",
    monthlyPrice: "41,772",
    yearlyPrice: "2,400",
    monthlyPath: "/user/month billed monthly",
    yearlyPath: "/user/month billed annually",
    button: "BUY NOW",
    description:
      "Navigate global markets seamlessly with our comprehensive stock trading and analysis platform.",
  },
];

const PricingSection = () => {
  // const [pricing, setPricing] = useState("year");
  // const handleChange = (type: string) => {
  //   setPricing(type);
  // };
  return (
    <section className="main-container  md:py-20 py-8 bg-gray-100" id="pricing">
      <div className="flex flex-col md:gap-10 gap-5 justify-center items-center w-full">
        <h1 className="md:text-4xl text-3xl tracking-tighter font-semibold">
          Our Pric<span className="text-secondary">ing</span>
        </h1>
        {/* <p className=" tracking-wider text-center">
          Honest pricing. Cancel anytime.
        </p> */}
        {/* <div className=" bg-purple-200 px-3 py-2 font-semibold shadow-2xl rounded-full ">
          <span className="flex gap-2 items-center cursor-pointer">
            <p
              onClick={() => handleChange("month")}
              className={`${
                pricing === "month"
                  ? "bg-black text-white py-1 px-3 text-sm rounded-full  "
                  : ""
              }`}
            >
              Monthly
            </p>
            <p
              onClick={() => handleChange("year")}
              className={`${
                pricing === "year"
                  ? "bg-black text-white py-1 px-3 text-sm rounded-full "
                  : ""
              }`}
            >
              Yearly
            </p>
          </span>
        </div> */}
      </div>
      <div className="grid md:grid-cols-12 grid-cols-3 gap-5 w-full md:pt-16 pt-5 lg:px-40 ">
        {pricing_Arr.map((item, index) => (
          <div
            key={item._id}
            className={`bg-white shadow flex flex-col md:gap-5 gap-2 justify-center items-center rounded-xl  relative md:py-14 py-8 px-6 col-span-4 ${
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

            <h5 className="lg:text-2xl text-xl font-medium">{item.heading}</h5>
            <h3 className="lg:text-5xl text-3xl">
              <span className="md:text-2xl text-lg text-gray-700">₹</span>
              {item.monthlyPrice}
              {/* {pricing === "year" ? item.yearlyPrice : item.monthlyPrice} */}
            </h3>
            <p className="text-sm">
              {item.monthlyPath}
              {/* {pricing === "year" ? item.yearlyPath : item.monthlyPath} */}
            </p>
            <h6
              className={` text-white text-sm lg:px-10 px-8 py-2 lg:py-3 common-transition cursor-pointer rounded-md font-medium lg:font-semibold ${
                item._id === "3"
                  ? "bg-secondary"
                  : "bg-primary hover:bg-secondary"
              }`}
            >
              {item.button}
            </h6>
            <p className="text-center h-16 pt-2 md:hidden lg:block block text-gray-500">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
