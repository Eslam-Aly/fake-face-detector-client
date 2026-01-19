import React from "react";
import fakeImg from "../assets/fake.jpg";
import realImg from "../assets/real.jpg";

function RealFakeGame() {
  return (
    <section className=" bg-[#FBF9FE]">
      <div className=" h-screen container mx-auto space-y-8">
        <div className="flex flex-col justify-center items-center pt-12">
          <h2 className="text-4xl font-bold mb-4 text-[#314473]">
            Can You Guess Which One is Real?
          </h2>
          <p className="text-lg mb-8 text-[#314473]">
            Test your skills by identifying the real image among the fake ones!
          </p>
        </div>
        <div className="flex flex-row justify-center items-center space-x-8">
          <div className="border-4 border-slate-800 w-1/2 rounded-lg shadow-lg  h-full flex flex-col justify-center items-center">
            <img src={fakeImg} alt="Fake" className="w-full" />
          </div>
          <div className="border-4 border-slate-800 w-1/2 rounded-lg shadow-lg  h-full flex flex-col justify-center items-center">
            <img src={realImg} alt="Real" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default RealFakeGame;
