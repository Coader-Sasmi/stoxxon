"use client";
// import Ticker from "hooks/ticker";

const counter_Arr = [
  {
    _id: "1",
    count: "4.8",
    title: "Positive Review",
  },
  {
    _id: "2",
    count: "35",
    title: "Best Features",
  },
  {
    _id: "3",
    count: "150",
    title: "Project Done",
  },
  {
    _id: "4",
    count: "120",
    title: "Happy Clients",
  },
];
const Counter = () => {
  return (
    <section
      id="counter"
      className="md:h-[18rem] h-[24rem] w-full bg-[#0f142b] bg-blend-overlay bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(/home/counter_bg.jpg)`,
      }}
    >
      <div className="main-container grid md:grid-cols-4 grid-cols-1 gap-3 place-items-center text-white py-3 md:py-16 lg:px-28">
        {counter_Arr.map((item, index) => (
          <div
            key={item._id}
            className={`flex flex-col lg:gap-5 justify-center items-center lg:w-72  w-full p-1 md:p-8 ${
              index === 3 ? null : "md:border-r"
            }`}
          >
            <span className="flex flex-col justify-center items-center md:gap-5 gap-1">
              {/* <Ticker
                className="lg:text-5xl text-4xl font-bold text-secondary"
                end={item.count}
              /> */}
              <p className="lg:text-xl text-lg md:font-semibold text-center whitespace-nowrap">
                {item.title}
              </p>
            </span>
            {/* <p className="text-center">{item.description}</p> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Counter;
