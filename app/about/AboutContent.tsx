"use client";
import { FaLaptop, FaCheckCircle, FaLightbulb } from "react-icons/fa";

const AboutContent: React.FC = () => {
  return (
    <>
      {/** ABOUT INTRODUCTION */}

      <div className="flex flex-col p-8 items-center justify-center w-full h-auto md:h-[1440px] mt-0">
        <h1 className="text-center text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-blue-500 drop-shadow-md hover:drop-shadow-xl animate-fade-up animate-once animate-ease-in">
          How it works
        </h1>
        <div className="flex flex-col md:flex-row justify-between">
          <div
            id="intro-text"
            className="flex flex-col items-center justify-center w-full md:w-1/2 h-auto"
          >
            <h2 className="text-center text-2xl md:text-4xl my-4 font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-gray-50 to-gray-400 drop-shadow-lg animate-fade-up animate-once animate-ease-in">
              You have the idea. We can make it a product.
            </h2>
            <h4 className="text-white text-center text-[16px] md:text-[20px] mt-4 mx-6 animate-fade-up animate-once animate-ease-in">
              We can help you define your priorities, features, and the scope of
              your application. Once we've established your idea, we'll get to
              work on it.
            </h4>
          </div>
          <div
            id="intro-anim"
            className="flex flex-col items-center justify-center w-full md:w-1/2 h-auto mt-8 md:mt-0 animate-fade-up animate-once animate-ease-in"
          >
            <FaLightbulb className="text-[40px] md:text-[60px] text-yellow-400 animate-pulse animate-ease-in-out" />
            <FaCheckCircle className="text-[40px] md:text-[60px] text-green-400 absolute -mt-[-25px] animate-jump-in animate-once animate-ease-in animate-delay-1000" />
            <FaLaptop className="text-[140px] md:text-[220px] mt-4 text-white" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
