import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import dice from "../assets/dice.png";
import spiB from "../assets/spiralBall.png";
import flower from "../assets/flower.png";
import { FaUpload } from "react-icons/fa";
// import PropTypes from 'prop-types';
// import { ImageConfig } from '../config/ImageConfig.jsx';
import axios from "axios";

export default function LinkedIn() {
  const navigate = useNavigate();

  const [selectedFile, setSelectedFile] = useState(null);
  const [hasSelectedFile, setHasSelectedFile] = useState(false);

  const [dragged, setDragged] = useState(false);

  const onFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setHasSelectedFile(true);
      console.log(file);
    }
  };

  const onFileUpload = () => {
    const formData = new FormData();
    formData.append("zF", selectedFile);
  
    console.log("Uploading file:", selectedFile);
  
    axios.post("http://127.0.0.1:5000/data", formData)
      .then((response) => {
        console.log("Upload successful:", response.data);
      })
      .catch((error) => {
        if (error.response) {
          console.error("❌ Backend Error:", error.response.data);
          console.error("📟 Status Code:", error.response.status);
        } else if (error.request) {
          console.error("❗ No response received from server. Request sent:", error.request);
        } else {
          console.error("🚨 Axios error:", error.message);
        }
      });
  };  

  return (
    <div
      className={`bg-radial-grad2 min-h-screen w-full relative overflow-hidden flex flex-row ${
        dragged ? "opacity-60" : ""
      }`}
      onDragEnter={() => setDragged(true)}
      onDragLeave={() => setDragged(false)}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        e.preventDefault();
        setDragged(false);
        const file = e.dataTransfer.files[0];
        // for onclick type functions e.target is used for drag, drop functions e.dataTransfer is used
        if(file){
          setHasSelectedFile(true);
          setSelectedFile(file);
          console.log(file);
        }
      }}
    >
      {/* Left image column */}
      <div className="w-[20%] flex justify-center items-start pt-[10%]">
        <img
          className="w-[190px] absolute top-[45%] left-1"
          src={dice}
          alt="Dice"
        />
        <button
          className={`w-[30%] mr-[40%] mt-[-30%] p-3 text-white rounded-[12px] border shadow-glow-inset border-white/20 hover:bg-[#35334D] text-lg font-semibold `}
          onClick={() => navigate("/opnPage")}
        >
          Back
        </button>
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
            <div className="flex flex-wrap justify-center items-center gap-2 text-[16px] font-medium text-white">
              <span>Drop or</span>

              <input
                type="file"
                id="zipUpload"
                accept=".zip"
                onChange={onFileChange}
                className="hidden"
              />

              <label
                htmlFor="zipUpload"
                className="bg-[#AE4BFF] text-white px-3 py-1 rounded-md cursor-pointer hover:bg-[#912ed8] transition"
              >
                choose a file
              </label>

              {selectedFile && (
                <span className="text-[12px] italic truncate max-w-[180px] overflow-hidden">
                  file choosen: {selectedFile.name}
                </span>
              )}

              <span>your zip file here</span>
            </div>
          </div>
        </div>

        <button
          disabled={!hasSelectedFile}
          className={`w-[30%] mt-3 p-3 text-white rounded-full border shadow-glow-inset border-white/20 hover:bg-[#35334D] text-lg font-semibold
        ${!hasSelectedFile ? "opacity-50 cursor-not-allowed" : ""} `}
          onClick={onFileUpload}
        >
          Send to genie
        </button>
      </div>

      {/* Right image column */}
      <div className="w-[20%] flex flex-col absolute justify-between items-end left-[82%]">
        <img className="w-[180px]" src={flower} />
        <img className="w-[200px] translate-y-[340px]" src={spiB} />
      </div>
    </div>
  );
}
