"use client";
import { useState, useEffect } from "react";
import PlanCards from "./PlanCards";

const PricingContent: React.FC = () => {
  return (
    <>
      {/**SECTION 1: MAIN PREMISE */}
      <div className="flex flex-col mt-20 md:mt-0 justify-center items-center w-[100vw] h-auto md:h-[1200px] lg:h-[768px] sm:h-[1400px] mb-[20px]">
        <h1 className="sm:mt-[40px] mb-[10px] text-center text-[38px] font-bold text-white">
          Find the perfect developer. Find the perfect price.
        </h1>
        <PlanCards />
      </div>
    </>
  );
};

export default PricingContent;
