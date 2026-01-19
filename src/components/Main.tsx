import heroImg from "../assets/backgroundHero.jpg";

function Main() {
  return (
    <section className=" bg-slate-50">
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat w-full"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="container mx-auto h-screen flex flex-row justify-between items-center">
          <div className="w-2/3 flex flex-col space-y-6 justify-center items-start">
            <div>
              <h1 className="text-6xl font-bold text-[#314473]">
                Fake Face Detector <br />
              </h1>
              <p className="text-3xl font-semibold text-[#314473]">
                (Deepfake Check)
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-xl text-[#314473]">
                Upload an image and get a prediction with confidence score.
              </p>
              <p className="text-sm text-[#314473]">
                Built with React + TypeScript + Xception
              </p>
            </div>
            <div className="flex flex-row space-x-4">
              <button className="mt-2 px-4 py-2 bg-[#314473] text-[#EBEEF7] rounded-md w-32 h-12 hover:bg-[#768DD2] cursor-pointer  hover:scale-105 transition-all ">
                Try it now
              </button>
              <button className="mt-2 px-4 py-2 bg-[#EBEEF7] text-[#314473] rounded-md w-32 h-12 hover:bg-slate-100 cursor-pointer  hover:scale-105 transition-all border border-[#314473]">
                How it works
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
