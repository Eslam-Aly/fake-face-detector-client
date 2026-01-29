import { useState } from "react";
import { CgSoftwareUpload } from "react-icons/cg";
import { FiTrash2 } from "react-icons/fi";

type ResultState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; label: "REAL" | "FAKE"; confidence: number }
  | { status: "error"; message: string };

function DeepFakeDetector() {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [result, setResult] = useState<ResultState>({ status: "idle" });

  const handleFileChange = (f: File | null) => {
    if (!f) return;

    if (!["image/jpeg", "image/png"].includes(f.type)) {
      setResult({
        status: "error",
        message: "Only JPG or PNG files are allowed.",
      });
      return;
    }

    if (f.size > 5 * 1024 * 1024) {
      setResult({ status: "error", message: "Max file size is 5MB." });
      return;
    }

    setFile(f);
    setPreviewUrl(URL.createObjectURL(f));
    setResult({ status: "idle" });
  };

  const removeFile = () => {
    setFile(null);
    setPreviewUrl(null);
    setResult({ status: "idle" });
  };

  const handleDetect = async () => {
    if (!file) return;

    setResult({ status: "loading" });

    // TODO: replace with real API call
    await new Promise((r) => setTimeout(r, 1200));

    const isReal = Math.random() > 0.5;
    setResult({
      status: "success",
      label: isReal ? "REAL" : "FAKE",
      confidence: Math.floor(75 + Math.random() * 20),
    });
  };

  return (
    <div className="p-8 min-h-screen bg-[#FBF9FE]">
      {/* Title */}
      <div className="flex flex-col items-center mb-12 space-y-4">
        <h2 className="text-4xl font-bold text-[#314473]">Deepfake Detector</h2>
        <p className="text-lg text-[#314473]">
          Upload a face image and get a REAL/FAKE prediction with confidence.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-row justify-center gap-8">
        {/* Upload Card */}
        <div className="w-1/2 rounded-2xl border border-slate-200 shadow-lg p-6">
          <h3 className="text-xl font-semibold text-[#314473] mb-4">
            Upload Image
          </h3>

          {!previewUrl ? (
            <label className="border-2 border-dashed bg-slate-100 h-64 flex flex-col justify-center items-center cursor-pointer hover:bg-[#E6F2FF] transition rounded-xl">
              <CgSoftwareUpload size={36} className="text-[#314473] mb-2" />
              <p className="text-[#314473] text-center">
                Click to upload
                <br />
                or drag and drop
              </p>
              <input
                type="file"
                accept="image/png,image/jpeg"
                className="hidden"
                onChange={(e) => handleFileChange(e.target.files?.[0] || null)}
              />
            </label>
          ) : (
            <div className="relative h-64 flex justify-center items-center bg-slate-100 rounded-xl">
              <img
                src={previewUrl}
                alt="preview"
                className="h-full object-contain rounded-lg"
              />
              <button
                onClick={removeFile}
                className="absolute top-2 right-2 bg-white p-2 rounded-full shadow hover:bg-red-50"
              >
                <FiTrash2 className="text-red-600" />
              </button>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={handleDetect}
              disabled={!file || result.status === "loading"}
              className="flex-1 bg-[#314473] text-white py-2 rounded-lg disabled:opacity-50 hover:bg-[#25365E]"
            >
              {result.status === "loading" ? "Analyzing..." : "Detect"}
            </button>
            <button
              onClick={removeFile}
              disabled={!file}
              className="flex-1 border border-[#314473] text-[#314473] py-2 rounded-lg disabled:opacity-40"
            >
              Choose another
            </button>
          </div>

          <p className="text-sm text-slate-500 mt-4">
            JPG/PNG • Max 5MB • We don’t store uploads
          </p>
        </div>

        {/* Results Card */}
        <div className="w-1/2 rounded-2xl border border-slate-200 shadow-lg p-6 flex flex-col justify-center items-center text-center">
          <h3 className="text-xl font-semibold text-[#314473] mb-6">Results</h3>

          {result.status === "idle" && (
            <p className="text-slate-500">
              Upload a face image to see prediction
            </p>
          )}

          {result.status === "loading" && (
            <p className="text-[#314473] animate-pulse">Analyzing image…</p>
          )}

          {result.status === "error" && (
            <p className="text-red-600">{result.message}</p>
          )}

          {result.status === "success" && (
            <>
              <div
                className={`px-6 py-2 rounded-lg text-white text-2xl font-bold mb-4 ${
                  result.label === "REAL" ? "bg-green-600" : "bg-red-600"
                }`}
              >
                {result.label}
              </div>

              <p className="text-lg mb-2">
                Confidence: <strong>{result.confidence}%</strong>
              </p>

              <div className="w-full bg-slate-200 rounded-full h-3 mb-6">
                <div
                  className={`h-3 rounded-full ${
                    result.label === "REAL" ? "bg-green-600" : "bg-red-600"
                  }`}
                  style={{ width: `${result.confidence}%` }}
                />
              </div>

              <p className="text-sm text-slate-500 mb-2">
                This tool provides probabilistic predictions, not certainty.
              </p>
              <p className="text-xs text-slate-400">
                Model: Xception (Transfer Learning)
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default DeepFakeDetector;
