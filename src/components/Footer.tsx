import fakeFaceImage from "../assets/fake-face-detector-high-resolution-logo-grayscale-transparent.png";

function Footer() {
  return (
    <div className="h-72 bg-[#DBE0FD] text-[#1a2542] py-8">
      <div className="flex flex-row justify-around items-start mb-12">
        <div className="flex flex-col justify-center items-start gap-2">
          <img
            src={fakeFaceImage}
            alt="Fake Face Detector Logo"
            className="h-20 ml-4 rounded-sm "
          />
          <p className="mt-4 text-sm">
            Xception-based deepfake detection system using transfer learning.{" "}
            <br />
            Images are processed temporarily and are not stored. <br />
            Trained on publicly available deepfake datasets.
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <h4 className="font-semibold text-lg">Project</h4>
          <a href="" className="hover:text-blue-600">
            Home
          </a>
          <a href="" className="hover:text-blue-600">
            Fake Face Detector
          </a>
          <a href="" className="hover:text-blue-600">
            Guess Game (experimental)
          </a>
          <a href="" className="hover:text-blue-600">
            About
          </a>
        </div>
        <div className="flex flex-col space-y-2">
          <h4 className="font-semibold text-lg">Resources</h4>
          <a href="" className="hover:text-blue-600">
            Research Paper
          </a>
          <a href="" className="hover:text-blue-600">
            GitHub (Client)
          </a>
          <a href="" className="hover:text-blue-600">
            GitHub (API)
          </a>
        </div>
        <div className="flex flex-col space-y-2">
          <h4 className="font-semibold text-lg">Contact</h4>
          <a href="" className="hover:text-blue-600">
            Phone: +49 162 332 0059
          </a>
          <a href="" className="hover:text-blue-600">
            Email: eslam.aly@eslamaly.com
          </a>
          <a href="" className="hover:text-blue-600">
            Portfolio: eslamaly.com
          </a>
          <a href="" className="hover:text-blue-600">
            LinkedIn
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-around items-center space-y-4">
        <hr className="border-t border-[#1a2542] w-full max-w-7xl mx-12 " />
        <p className="text-sm text-[#1a2542]">
          © {new Date().getFullYear()} Fake Face Detector. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
