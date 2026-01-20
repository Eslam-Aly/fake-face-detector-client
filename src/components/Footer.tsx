import fakeFaceImage from "../assets/fake-face-detector-high-resolution-logo-grayscale-transparent.png";

function Footer() {
  return (
    <div className="h-64 bg-[#DBE0FD] text-[#1a2542] py-8">
      <div className="flex flex-row justify-around items-start mb-10">
        <div className="flex justify-center items-center ">
          <img
            src={fakeFaceImage}
            alt="Fake Face Detector Logo"
            className="h-28 rounded-sm "
          />
        </div>
        <div className="flex flex-col space-y-2">
          <a href="">Home</a>
          <a href="">Guess Game</a>
          <a href="">Deepfake Detector</a>
          <a href="">About</a>
        </div>
        <div className="flex flex-col space-y-2">
          <a href="">GitHub</a>
          <a href="">LinkedIn</a>
          <a href="">Portfolio</a>
        </div>
        <div className="flex flex-col space-y-2">
          <a href="">Phone: +491623320059</a>
          <a href="">Email: eslam.aly@eslamaly.com</a>
          <a href="">-----------</a>
        </div>
      </div>
      <hr className="border-t border-[#1a2542] mx-12 mt-6" />
      <div className="flex justify-around items-center mt-6">
        <p className="text-sm text-[#1a2542]">
          © {new Date().getFullYear()} Fake Face Detector. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
