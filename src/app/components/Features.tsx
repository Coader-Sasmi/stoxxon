"use client";
import { Check } from "@mui/icons-material";
import { useState } from "react";

const features_Arr = [
  {
    _id: "1",
    icon: "/home/sales_force_automation.png",
    heading: "Sales Force Automation",
    title: "Generate, organize, and manage leads with ease",
    description:
      "Automate time-consuming sales, marketing, and support tasks to free up more of your time to focus on your clients. Create efficient processes to reduce human data entry, get rid of duplication, and accelerate the entire process.",
    subheading: "SALES FORCE AUTOMATION FEATURES",
    animation: "/home/sales_force_automation_image.png",
    list: [
      {
        subtitle: "Lead Management",
      },
      {
        subtitle: "Deal Management",
      },
      {
        subtitle: "Contact Management",
      },
      {
        subtitle: "Workflow Automation",
      },
    ],
  },
  {
    _id: "2",
    icon: "/home/marketing_automation.png",
    heading: "Marketing Automation",
    title: "Divide and conquer with targeted marketing",
    description:
      "Bring your sales and marketing teams together. Use the Integration to generate new leads, carry out customised email marketing campaigns, and assess the relationship between advertising spending and sales income.",
    subheading: "MARKETING AUTOMATION FEATURES",
    animation: "/home/marketing_automation_image.png",
    list: [
      {
        subtitle: "Customer Segmentation",
      },
      {
        subtitle: "Lead Nurturing",
      },
      {
        subtitle: "Campaign Integration",
      },
      {
        subtitle: "Event Management",
      },
    ],
  },
  {
    _id: "3",
    heading: "Process Management",
    icon: "./home/process_management.png",
    title: "Build and implement scalable sales processes",
    description:
      "Does your sales team understand what has to be done at each pipeline stage? Your sales team can always determine the best course of action with Blueprints. Set up a clear sales procedure that the rest of the team can follow.",
    subheading: "PROCESS MANAGEMENT FEATURES",
    animation: "/home/process_management_image.png",
    list: [
      {
        subtitle: "Sales Process Builder",
      },
      {
        subtitle: "Processing Rules",
      },
      {
        subtitle: "Review Process",
      },
      {
        subtitle: "Approval Process",
      },
    ],
  },
  {
    _id: "4",
    heading: "Performance Management",
    icon: "./home/performance_management.png",
    title: "Categorize your customers, quickly & easily!",
    description:
      "With realistic revenue predictions and the help of productivity games, you can increase the output of your sales staff and beat your quotas. Customers can be swiftly categorised, various currencies can be set up, AI predictions can be used to prioritise leads and deals that are most likely to close, and website visitor tracking can be used to convert more prospects.",
    subheading: "PERFORMANCE MANAGEMENT FEATURES",
    animation: "/home/performance_management_image.png",
    list: [
      {
        subtitle: "Forecasting",
      },
      {
        subtitle: "Territory Management",
      },
      {
        subtitle: "Analytics",
      },
      {
        subtitle: "Visitor Tracking",
      },
    ],
  },
];

const Features = () => {
  const [isActive, setIsActive] = useState(0);

  return (
    <section
      className="main-container  md:py-20 py-8 shadow bg-primary/10 scroll-mt-16"
      id="features"
    >
      <div className="flex flex-col md:gap-10 gap-5 justify-center items-center">
        <h5 className="md:text-4xl text-3xl tracking-tighter font-semibold ">
          Powerful Fea<span className="text-secondary">tures</span>
        </h5>
        <p className="md:tracking-wider tracking-tight text-center text-xs md:text-base">
          Limitless Possibilities. What will you do for your business?
        </p>
      </div>

      <div
        className={` relative rounded-2xl md:p-8 py-5  grid md:grid-cols-4 md:px-10 place-item-center md:gap-10 gap-5 `}
      >
        {features_Arr.map((item, index) => (
          <div
            key={item._id}
            onClick={() => setIsActive(index)}
            className={`md:p-3 p-5 shadow  flex flex-col 
            gap-4 md:h-36 h-14 justify-center rounded-xl cursor-pointer items-center ${
              isActive === index ? "bg-purple-100" : "bg-primary/20"
            }`}
          >
            <span className="md:block hidden">
              <img src={item.icon} alt="icon" className="h-14 w-14" />
            </span>
            <h5 className="lg:text-lg font-semibold lg:whitespace-nowrap">
              {item.heading}
            </h5>
            {isActive === index ? (
              <div className="md:block hidden md:absolute top-[10.9rem] bg-purple-100 shadow h-9 w-9 rotate-45"></div>
            ) : null}
          </div>
        ))}
      </div>

      <div className="flex gap-10 w-full grid-cols-3 bg-white p-8 md:h-[35rem] h-[30rem] rounded-xl">
        <div className="lg:w-5/12 w-full flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <h5 className="font-semibold md:text-2xl text-xl md:w-96">
              {features_Arr[isActive]?.title}
            </h5>
            <div className="w-40 h-1 bg-secondary rounded-xl"></div>
          </div>
          <p className="md:block hidden">
            {features_Arr[isActive]?.description}
          </p>
          <div className="flex flex-col gap-5 ">
            <p className="font-medium md:text-base text-xs">
              {features_Arr[isActive]?.subheading}
            </p>
            {features_Arr[isActive]?.list?.map((item, index) => (
              <h6 key={index} className="flex items-center gap-2 font-semibold">
                <Check className="text-secondary" />
                {item?.subtitle}
              </h6>
            ))}
          </div>
        </div>
        <div className="lg:w-7/12 w-full lg:block hidden">
          <img
            src={features_Arr[isActive]?.animation}
            alt="animation"
            className="h-full w-full rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
