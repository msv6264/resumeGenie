import React from "react";
import logo from "../assets/logo.png";
import vec1 from "../assets/vec1.png";
import vec2 from "../assets/vec2.png";
import wand from "../assets/magic.png";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-radial-gradient p-6 md:p-10 text-white w-full min-h-screen relative overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center">
        <img className="w-[120px] sm:w-[180px]" src={logo} alt="logo" />
        <button className="font-pStrike text-lg sm:text-xl px-6 py-2 rounded-full bg-btn-gradient hover:bg-btn-hover transition duration-300">
          Login
        </button>
      </div>

      {/* Background Decoration (Left) */}
      <img
        className="w-[100px] sm:w-[160px] absolute bottom-0 left-2 translate-x-[-30%] translate-y-6"
        src={vec1}
        alt="vec1"
      />

      {/* Content */}
      <div className="w-full max-w-[1000px] mx-auto mt-10 px-4 text-center">
        {/* Badge */}
        <div className="max-w-[350px] p-2 rounded-[35px] mx-auto flex items-center justify-center border border-white/20 backdrop-blur-sm">
          <img src={wand} className="w-6 h-6 sm:w-8 sm:h-8 mr-3" alt="Wand Icon" />
          <div className="text-sm sm:text-lg font-bold">
            Create resume in minutes with AI
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-[32px] sm:text-[48px] md:text-[60px] lg:text-[98px] font-lbr mt-6 leading-tight">
          Welcome to Resume Genie
        </h1>

        {/* Subtext */}
        <p className="text-base sm:text-lg md:text-xl font-pLbr mt-4 px-2 sm:px-6">
          Resume Genie will craft a perfect, 100-score resume just for you.
          Tell the Genie about yourself or upload your profile—and watch your
          wish come true!
        </p>

        {/* Get Started Button */}
        <button
          className="mt-8 px-6 py-3 text-white rounded-full border shadow-glow-inset border-white/20 hover:bg-[#35334D] text-lg font-semibold transition duration-300 mx-auto block"
          onClick={() => navigate("/opnPage")}
        >
          Get started →
        </button>
      </div>

      {/* Background Decoration (Right) */}
      <img
        className="w-[140px] sm:w-[200px] md:w-[250px] absolute top-[40%] md:top-[25%] right-3 translate-x-[30%]"
        src={vec2}
        alt="vec2"
      />
    </div>
  );
}
