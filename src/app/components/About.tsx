"use client";
import {
  Diversity2Outlined,
  Groups2Outlined,
  ImportantDevicesOutlined,
  InventoryOutlined,
} from "@mui/icons-material";

const aboutUs_Arr = [
  {
    _id: "1",
    icon: (
      <Groups2Outlined className="!text-secondary !text-5xl !bg-white !p-1 !rounded-md !shadow-lg" />
    ),
    count: "120+",
    title: "Research",
    description:
      "Customer satisfaction is a term frequently used in marketing.",
  },
  {
    _id: "2",
    icon: (
      <InventoryOutlined className="!text-secondary !text-5xl !bg-white !p-1 !rounded-md !shadow-lg" />
    ),
    count: "150+",
    title: "Profits",
    description: "Project managers can derail the success of a project. ",
  },
  {
    _id: "3",
    icon: (
      <Diversity2Outlined className="!text-secondary !text-5xl !bg-white !p-1 !rounded-md !shadow-lg" />
    ),
    count: "120+",
    title: "Team Members",
    description: "A team member is an employee who works in a group or team.",
  },
  {
    _id: "4",
    icon: (
      <ImportantDevicesOutlined className="!text-secondary !text-5xl !bg-white !p-1 !rounded-md !shadow-lg" />
    ),
    count: "06",
    title: "Years Experience",
    description:
      "Experience refers to conscious events specifically to perceptions.",
  },
];

const About = () => {
  return (
    <section
      className="main-container  md:py-16 py-8 w-full scroll-mt-12"
      id="about"
    >
      <div className="flex flex-col md:gap-10 gap-5 justify-center items-center w-full">
        <h1 className="md:text-4xl text-3xl tracking-tighter font-semibold">
          About <span className="text-secondary">Us</span>
        </h1>
        <p className=" md:tracking-wider tracking-tight text-center md:text-base text-xs">
          Navigate market ups and downs with confidence. Discover how our expert
          insights can
          <br />
          guide your investment decisions.
        </p>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-5 grid-cols-2 place-items-center mt-5 w-full">
          {aboutUs_Arr.map((item) => (
            <div
              key={item._id}
              className="flex flex-col md:gap-4 gap-2 md:h-64 lg:h-72 justify-center items-center border common-transition cursor-default hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-5 rounded-md text-center bg-primary/10"
            >
              <p>{item.icon}</p>

              <h5 className="md:text-3xl text-xl font-semibold">
                {item.count}
              </h5>
              <div className="flex flex-col gap-2">
                <h6 className="md:font-medium text-sm md:text-lg">
                  {item.title}
                </h6>
                <p className="text-gray-800 text-sm md:block hidden">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
