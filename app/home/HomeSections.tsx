"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { use, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const HomeSections = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      {/** SECTION 1 - MAIN IDEA */}
      <div className="bg-[url('../public/background-img/top-wave.svg')] bg-no-repeat bg-cover flex flex-col h-[728px] w-[100vw] justify-center items-center text-center">
        <h1
          className=" text-[50px] text-white mx-4"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          Need a Web Page? We are here for you.
        </h1>
        <h4
          className=" text-white text-[30px] mt-[20px] mx-4"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          Hire one of our members and receive the very best app you can dream.
        </h4>
      </div>
      {/**SECTION 2: REQUIREMENTS/FEATURES */}
      <div className="bg-[url('../public/background-img/middle-wave.svg')] bg-no-repeat bg-cover flex flex-col h-[728px] w-[100vw] justify-center items-center text-center">
        <h1
          className="text-[45px] text-white mx-8"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          Your requirements? Our specialty.
        </h1>
        <h4
          className="text-white text-[30px] mt-[20px] mx-4"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          Our development team is integrated with professional and experienced
          devs that possess a complete set of skills. If you have an specific
          requirement, they can do it.
        </h4>
      </div>
      {/**SECTION 3: DESIGN PREMISE */}
      <div className="bg-[url('../public/background-img/middle-circles.svg')] bg-no-repeat bg-cover bg-center flex flex-col h-[728px] w-[100vw] justify-center items-center text-center">
        <h1
          className="text-[45px] text-white mx-8"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          Elegant. Simple. Functional.
        </h1>
        <h4
          className="text-white text-[30px] mt-[20px] mx-4"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          Behind a great business there's a great design. We believe that your
          web application not only has to be functional, but visually appealing.
        </h4>
      </div>
      {/**SECTION 4: DEMONSTRATION */}
      <div className="bg-[url('../public/background-img/bottom-wave.svg')] bg-no-repeat bg-cover bg-center flex flex-col h-[1024px] w-[100vw] justify-center items-center">
        <div className="text-center">
          <h1
            className="text-[45px] text-white mx-8"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            See what we can offer.
          </h1>
          <h4
            className="text-white text-[30px] mt-[20px] mx-4"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            Visit some of the websites that we've work on.
          </h4>
        </div>
        {/**LAPTOP IMAGE */}
        <div
          className="hidden md:flex flex-col items-center justify-center"
          data-aos="flip-up"
          data-aos-duration="2000"
        >
          <div className="relative w-[768px] h-[500px] my-[10px]">
            <Image
              className="mx-auto"
              src="/img/laptop-frame.webp"
              alt="laptop-frame"
              fill
            />
            <a href="https://pethical-beta.vercel.app">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[23rem] w-[35.8rem] border-2 border-gray-800 border-solid">
                <Image
                  className="object-cover h-full w-full"
                  src="/img/pethical-desktop.png"
                  alt="laptop-preview"
                  fill
                />
              </div>
            </a>
          </div>
        </div>

        {/**MOBILE IMAGE */}
        <div className="md:hidden flex flex-col items-center justify-center" data-aos="fade-up" data-aos-duration="2000">
          <div className="relative w-[300px] h-[600px] my-[10px]">
            <a href="https://pethical-beta.vercel.app">
              <Image
                id="phone-png"
                className="mx-auto z-10"
                src="/img/phone-frame.webp"
                alt="phone-frame"
                fill
              />
            </a>
            <div className="absolute top-1/2 left-1/2 z-[9] transform -translate-x-1/2 -translate-y-1/2 h-[37rem] w-[18rem] ">
              <Image
                id="mobile-page"
                className="object-cover h-full w-full border-2 border-gray-800 border-solid rounded-[50px]"
                src="/img/pethical-mobile.png"
                alt="mobile-preview"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSections;
