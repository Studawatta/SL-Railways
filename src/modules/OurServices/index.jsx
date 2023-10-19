import React from "react";

const OurServices = () => {
  const trains = [
    {
      name: "Colombo Fort - Beliatta",
      type: "Intercity & Express trains",
      class_types: " 1st, 2nd and 3rd",
    },
    {
      name: "Colombo Fort - Badulla",
      type: "Intercity & Express trains",
      class_types: " 1st, 2nd, 3rd and observations saloon",
    },
    {
      name: "Colombo Fort - Talaimannar",
      type: "Night mail train",
      class_types: "2nd class",
    },
    {
      name: "Colombo Fort - Jaffna",
      type: "Intercity, Express & Night mail trains",
      class_types: " 1st, 2nd and 3rd",
    },
    {
      name: "Colombo Fort - Trincomalee",
      type: "Night mail train",
      class_types: "2nd and 3rd",
    },
    {
      name: "Kandy - Badulla",
      type: "Slow train",
      class_types: "Observations saloon",
    },
    {
      name: "Colombo Fort - Kandy",
      type: "Intercity & Express trains",
      class_types: " 1st, 2nd, 3rd and observations saloon",
    },
    {
      name: "Colombo Fort - Batticaloa",
      type: "Intercity, Express & Night mail trains",
      class_types: " 1st, 2nd and 3rd",
    },
  ];
  return (
    <div id="our_services" className="mx-auto w-[70%]  overflow-auto pt-16 ">
      <h1 className="text-[48px] font-thin">OurServices</h1>
      <div className="mt-2 grid w-full gap-y-6 lg:grid-cols-2 2xl:grid-cols-3 ">
        {trains.map((train, index) => (
          <div
            className="flex h-40 w-full items-center rounded-md bg-slate-900/90 lg:w-[340px]"
            key={index}
          >
            <div className="ml-5 flex cursor-pointer  flex-col gap-4">
              <h1 className="text-[20px] font-bold text-white">{train.name}</h1>
              <h2 className="text-[16px] font-semibold text-slate-300">
                {train.type}
              </h2>
              <p className="text-[14px] text-slate-300">
                Available class types :{" "}
                <span className="text-blue-500">{train.class_types}</span>{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
