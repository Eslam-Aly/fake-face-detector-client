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
          <p className="mt-2 font-medium text-[#1a2542]/80">
            Click the image you think is REAL
          </p>
        </div>
        <div className="flex flex-row justify-center items-center space-x-8">
          <div
            className="border-4 border-slate-800 w-140 rounded shadow-lg  h-full flex flex-col justify-center items-center cursor-pointer 
              transition-all duration-200
              hover:shadow-xl hover:-translate-y-1
              hover:ring-2 hover:ring-blue-400"
          >
            <img src={fakeImg} alt="Fake" className="w-full" />
          </div>
          <div
            className="border-4 border-slate-800 w-140  rounded shadow-lg  h-full flex flex-col justify-center items-center cursor-pointer 
              transition-all duration-200
              hover:shadow-xl hover:-translate-y-1
              hover:ring-2 hover:ring-blue-400"
          >
            <img src={realImg} alt="Real" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default RealFakeGame;
