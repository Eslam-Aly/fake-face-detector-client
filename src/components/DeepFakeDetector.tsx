import React from "react";
import { CgSoftwareUpload } from "react-icons/cg";

function DeepFakeDetector() {
  return (
    <div className="p-8 min-h-screen bg-[#FBF9FE] ">
      <div className="flex flex-col justify-center items-center mb-12 space-y-6">
        <h1 className="text-4xl text-[#314473]">Deepfake Detector</h1>
        <p className="text-lg text-[#314473]">
          Upload a face image and get a REAL/FAKE prediction with confidence.
        </p>
      </div>

      <div className="flex flex-row justify-center items-center space-x-8">
        <div className="border-2 border-slate-200 w-1/2 rounded-2xl shadow-lg flex flex-col justify-center items-center h-120">
          <div className="border-2 border-dashed w-120 bg-slate-200 h-64 flex flex-col justify-center items-center cursor-pointer hover:bg-[#9ECFFA] transition-all m-8">
            <CgSoftwareUpload size={32} className="text-[#314473]" />
            <p className="text-[#314473] text-center">
              Click to upload image <br />
              or <br />
              drag and drop
            </p>
          </div>
        </div>

        <div className="border-2 border-slate-200 w-1/2 rounded-2xl shadow-lg h-120 flex flex-col justify-center items-center">
          <h3>results</h3>
        </div>
      </div>
      <p className="text-sm text-slate-600 mt-4">
        JPG/PNG • Max 5MB • We don’t store uploads
      </p>
    </div>
  );
}

export default DeepFakeDetector;
