import React from 'react';
import { useNavigate } from "react-router-dom";
import dice from "../assets/dice.png";
import ball from "../assets/ball.png";

export default function opnPage() {
const navigate = useNavigate();

  return (
    <div className='bg-radial-grad min-h-screen w-full relative overflow-hidden flex flex-row'>
      {/* Left image column */}
      <div className='w-[20%] flex justify-center items-start pt-[10%]'>
        <img className='w-[180px] absolute top-[47%] left-1 ' src={dice} alt="Dice" />
      </div>

      {/* Center content */}
      <div className='w-[60%] flex flex-col justify-center items-center text-white px-4'>
        <h1 className="text-[45px] mb-3 font-lbr text-center">
          Choose any of the following methods to introduce yourself to genie
        </h1>
        <p className="text-[22px] mt-4 mb-11 text-center font-semibold">
          Based on your profile, Genie will craft a resume for you ❤️
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-6 w-full items-center">
          <button className="w-[60%] py-3 text-white rounded-full border shadow-glow-inset border-white/20 hover:bg-[#35334D] text-lg font-semibold"
          onClick={() => navigate("/linkedIn")}>
            Upload your LinkedIn data (zip file)
          </button>
          <button className="w-[60%] py-3 text-white rounded-full border shadow-glow-inset border-white/20 hover:bg-[#35334D] text-lg font-semibold">
            Connect your GitHub account
          </button>
          <button className="w-[60%] py-3 text-white rounded-full border shadow-glow-inset border-white/20 hover:bg-[#35334D] text-lg font-semibold">
            Fill your details manually
          </button>
        </div>
      </div>

      {/* Right image column */}
      <div className='w-[20%] flex absolute justify-center items-end left-[85%] '>
        <img className='w-[180px]' src={ball} alt="Ball" />
      </div>
    </div>
  )
}