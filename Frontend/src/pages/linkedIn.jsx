import React from "react";
import dice from "../assets/dice.png";
import spiB from "../assets/spiralBall.png";
import flower from "../assets/flower.png";
import { FaUpload } from "react-icons/fa"; // install if not already

export default function linkedIn() {
  return (
    <div className="bg-radial-grad2 min-h-screen w-full relative overflow-hidden flex flex-row">
      {/* Left image column */}
      <div className="w-[20%] flex justify-center items-start pt-[10%]">
        <img
          className="w-[190px] absolute top-[45%] left-1"
          src={dice}
          alt="Dice"
        />
      </div>

      {/* Center content */}
      <div className="w-[60%] flex flex-col justify-center items-center text-white px-4">
        <div className="shadow-glow-inset2 rounded-[30px] border border-white/20 p-12 w-[90%] max-w-[700px] bg-radial-grad3 ">
          <p className="text-center text-[20px] md:text-[22px] font-semibold mb-10 leading-8">
            Go to your LinkedIn profile <br className="md:hidden" />
            <span className="hidden md:inline"> &gt; </span> Settings{" "}
            <span className="hidden md:inline"> &gt; </span> Data Privacy{" "}
            <span className="hidden md:inline"> &gt; </span> “Get a copy of your
            data”
          </p>

          <div className="border-dashed border-[2px] border-white/30 rounded-[15px] p-14 text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-[#AE4BFF] rounded-full p-6">
                <FaUpload className="text-white text-4xl" />
              </div>
            </div>
            <p className="text-[18px] font-medium text-white">
              Drop or upload your zip file here
            </p>
          </div>
        </div>
      </div>

      {/* Right image column */}
      <div className="w-[20%] flex flex-col absolute justify-between items-end left-[82%]">
        <img className="w-[180px]" src={flower} />
        <img className="w-[200px] translate-y-[340px]" src={spiB} />
      </div>
    </div>
  );
}
