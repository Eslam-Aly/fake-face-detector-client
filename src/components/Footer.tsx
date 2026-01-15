import React from "react";

function Footer() {
  return (
    <div>
      <div className="flex justify-around p-4 bg-slate-200 text-slate-800 ">
        <p>
          © {new Date().getFullYear()} Fake Face Detector. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
