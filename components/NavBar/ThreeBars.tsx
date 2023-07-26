"use client";
import { useEffect, useState } from "react";

interface Props {
  isClicked: boolean;
}
export const ThreeBars: React.FC<Props> = ({ isClicked }) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    setShouldAnimate(isClicked);
  }, [isClicked]);

  return (
    <div className="flex flex-col items-center w-[2rem] h-[1.5rem] border-0 bg-transparent gap-[0.6rem]">
      <div
        className={`bg-white h-[2px] w-[100%] rounded-[5px] transition-all duration-500 origin-left ${
          shouldAnimate && "rotate-45"
        }`}
      ></div>
      <div
        className={`bg-white h-[2px] w-[100%] rounded-[5px] transition-all duration-500 origin-left ${
          shouldAnimate && "opacity-0"
        }`}
      ></div>
      <div
        className={`bg-white h-[2px] w-[100%] rounded-[5px] transition-all duration-500 origin-left ${
          shouldAnimate && "rotate-[-45deg]"
        }`}
      ></div>
    </div>
  );
};
