import React from "react";
import fakeFaceImage from "../assets/fake-face-detector-high-resolution-logo-transparent-2.png";

function Header() {
  return (
    <div className="flex justify-between px-12 bg-slate-800 text-white h-20 fixed w-full">
      <ul className="flex items-center">
        <a href="#">
          <img
            className=" h-16 rounded-sm"
            src={fakeFaceImage}
            alt="Fake Face Detector Logo"
          />
        </a>
      </ul>
      <ul className="flex items-center space-x-4 text-lg">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </ul>
    </div>
  );
}

export default Header;
