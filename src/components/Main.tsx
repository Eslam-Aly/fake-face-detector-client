import React from "react";

import heroImg from "../assets/backgroundHero.jpg";

function Main() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat w-full"
      style={{ backgroundImage: `url(${heroImg})` }}
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
          <div className="flex flex-row space-x-4">
            <button className="mt-2 px-4 py-2 bg-slate-800 text-slate-100 rounded-md w-32 h-12 hover:bg-slate-700 cursor-pointer  hover:scale-105 transition-all ">
              Try it now
            </button>
            <button className="mt-2 px-4 py-2 bg-slate-100 text-slate-800 rounded-md w-32 h-12 hover:bg-slate-300 cursor-pointer  hover:scale-105 transition-all border border-slate-800">
              How it works
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
