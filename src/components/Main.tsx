import React from "react";
import fakeFaceImage from "../assets/fake-face-detector-high-resolution-logo-transparent.png";
import heroImg from "../assets/heroCard.jpg";
import bg from "../assets/background.jpg";

function Main() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat w-full"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container mx-auto h-screen flex flex-row justify-between items-center">
        <div className="w-2/3 flex flex-col space-y-6 justify-center items-start">
          <div>
            <h1 className="text-6xl font-bold text-slate-800">
              Fake Face Detector <br />
            </h1>
            <p className="text-3xl font-semibold">(Deepfake Check)</p>
          </div>
          <div className="flex flex-col space-y-2">
            <p className="text-xl text-slate-800">
              Upload an image and get a prediction with confidence score.
            </p>
            <p className="text-sm text-slate-800">
              Built with React + TypeScript + Xception
            </p>
          </div>
          <button className="mt-2 px-4 py-2 bg-slate-800 text-slate-100 rounded-md w-32 h-12 hover:bg-slate-700 cursor-pointer  hover:scale-105 transition-all">
            Try it now
          </button>
        </div>
        <div className="flex justify-center lg:justify-end">
          <img
            src={heroImg}
            alt="Hero"
            className="w-140 h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
