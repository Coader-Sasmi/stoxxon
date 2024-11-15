"use client";
import { CheckCircleOutline } from "@mui/icons-material";
import { Divider } from "@mui/material";

const solution_Arr = [
  {
    _id: "1",
    heading: "CRM Software",
    description:
      "Store unlimited contacts and build stronger relationships by keeping track of all your customer details in one place",
    subheading: "POPULAR FEATURES",
    icon: "./home/crm_solutions.png",
    list: [
      {
        subtitle: "Contact Management",
      },
      {
        subtitle: "Deal Management",
      },
      {
        subtitle: "Sales Automation",
      },
      {
        subtitle: "Appointment Scheduling",
      },
    ],
    started: "Get started",
  },
  {
    _id: "2",
    heading: "Marketing Automation",
    description:
      "Save time by automating your marketing processes and sending personalized messages to target audiences",
    icon: "./home/marketing_automation_solutions.png",
    subheading: "POPULAR FEATURES",
    list: [
      {
        subtitle: "Forms & Landing Pages",
      },
      {
        subtitle: "Email Sequences",
      },
      {
        subtitle: "Marketing Automation",
      },
      {
        subtitle: "Email Template Builder",
      },
    ],
    started: "Get started",
  },
  {
    _id: "3",
    heading: "Process Management",
    description:
      "Store unlimited contacts and build stronger relationships by keeping track of all your customer details in one place",
    icon: "./home/process_management_icon.png",
    subheading: "POPULAR FEATURES",
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
    started: "Get started",
  },
  {
    _id: "4",
    heading: "Performance Management",
    description:
      "Store unlimited contacts and build stronger relationships by keeping track of all your customer details in one place",
    icon: "./home/performance_management_icon.png",
    subheading: "POPULAR FEATURES",
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
    started: "Get started",
  },
];
const Solution = () => {
  return (
    <section className="main-container md:py-20 py-8 scroll-mt-4" id="solution">
      <div className="flex flex-col md:gap-10 gap-5 justify-center items-center w-full">
        <h1 className="md:text-4xl text-3xl tracking-tighter font-semibold">
          Single Solu<span className="text-secondary">tion</span>
        </h1>
        <p className="  md:tracking-wider tracking-tight text-center md:text-base text-xs">
          Identify new opportunities, convert visitors, deliver customer
          happiness, <br className="hidden md:block" /> and more!
        </p>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 md:mt-10 mt-2">
        {solution_Arr.map((item) => (
          <div
            key={item._id}
            className="shadow md:p-10 p-5 rounded-xl flex flex-col md:gap-5 "
          >
            <div className="flex md:flex-row flex-col-reverse items-center md:gap-2 gap-5">
              <span className="md:w-5/6 w-full">
                <h5 className="font-medium text-lg pb-5">{item.heading}</h5>
                <p className="text-sm text-gray-700">{item.description}</p>
              </span>
              <span className="md:w-1/6 w-full">
                <img src={item.icon} alt="icon" className="h-20 w-20" />
              </span>
            </div>
            <Divider />
            <span className="py-5 md:py-0">
              <h5 className="pb-3">{item.subheading}</h5>
              <h6 className="grid lg:grid-cols-2 grid-cols-1 gap-2">
                {item.list.map((innerItem, index) => (
                  <div key={index} className="flex gap-1 items-center">
                    <CheckCircleOutline className="text-primary text-lg" />
                    <p className="">{innerItem.subtitle}</p>
                  </div>
                ))}
              </h6>
            </span>
            <span>
              <button className="btn-primary text-white bg-primary h-9 w-32 rounded-md">
                {item.started}
              </button>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Solution;
