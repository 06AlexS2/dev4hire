"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import PlanCards from "./PlanCards";
import PlanTables from "./PlanTables";

const PricingContent: React.FC = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      {/**SECTION 1: MAIN PREMISE */}
      <div className="flex flex-col mt-20 md:mt-0 justify-center items-center w-[100vw] h-auto md:h-[1400px] lg:h-[768px] sm:h-[1400px] mb-[20px]">
        <h1
          data-aos="zoom-in-up"
          data-aos-duration="1500"
          className="sm:mt-[50px] md:mt-[140px] mb-[25px] text-4xl md:text-6xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-blue-500 drop-shadow-md hover:drop-shadow-xl"
        >
          Find the perfect developer. Find the perfect price.
        </h1>
        <PlanCards />
      </div>
      <div className="hidden md:flex flex-col mt-20 md:mt-0 justify-center items-center w-[100vw] h-[1440px]">
        <h1
          className="text-6xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-blue-500 drop-shadow-md hover:drop-shadow-xl"
        >
          Compare our plans in detail.
        </h1>
        <PlanTables />
      </div>
    </>
  );
};

export default PricingContent;
