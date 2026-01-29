import { useState, useMemo } from "react";
import fakeImg from "../assets/fake.jpg";
import realImg from "../assets/real.jpg";

type Choice = "real" | "fake" | null;

function RealFakeGame() {
  const [selected, setSelected] = useState<Choice>(null);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(0);

  // Randomize positions each round
  const images = useMemo(() => {
    const order = Math.random() > 0.5;
    return order
      ? [
          { type: "real", src: realImg },
          { type: "fake", src: fakeImg },
        ]
      : [
          { type: "fake", src: fakeImg },
          { type: "real", src: realImg },
        ];
  }, [round]);

  const handleSelect = (choice: Choice) => {
    if (selected) return;

    setSelected(choice);

    if (choice === "real") {
      setFeedback("Correct ✅ This image is REAL");
      setScore((s) => s + 1);
    } else {
      setFeedback("Wrong ❌ This image is FAKE");
    }
  };

  const nextRound = () => {
    setSelected(null);
    setFeedback(null);
    setRound((r) => r + 1);
  };

  return (
    <section className="bg-[#FBF9FE]">
      <div className="min-h-screen container mx-auto space-y-8 md:space-y-10 px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col justify-center items-center pt-12 sm:pt-14 md:pt-16 text-center">
          <h2 className="text-4xl font-bold mb-4 text-[#314473]">
            Can You Guess Which One is Real?
          </h2>
          <p className="text-lg mb-2 text-[#314473]">
            Test your skills by identifying the real image.
          </p>
          <p className="font-medium text-[#1a2542]/80">
            Click the image you think is REAL
          </p>

          <div className="mt-4 text-sm text-slate-600">
            Score: <strong>{score}</strong>
          </div>
        </div>

        {/* Images */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 sm:gap-8">
          {images.map((img, idx) => {
            const isWrong = selected && img.type === "fake";
            const isCorrect = selected && img.type === "real";

            return (
              <div
                key={idx}
                onClick={() => handleSelect(img.type as Choice)}
                className={`
                  border-4 rounded-xl shadow-lg cursor-pointer transition-all duration-200 sm:w-1/2 max-w-sm sm:max-w-md md:max-w-lg
                  hover:shadow-xl hover:-translate-y-1 
                  ${isCorrect ? "border-green-500 ring-4 ring-green-300" : ""}
                  ${isWrong ? "border-red-500 ring-4 ring-red-300" : "border-slate-800"}
                `}
              >
                <img
                  src={img.src}
                  alt={img.type}
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
            );
          })}
        </div>

        {/* Feedback */}
        {feedback && (
          <div className="flex flex-col items-center space-y-4 w-full max-w-md mx-auto">
            <p className="text-xl font-semibold text-[#314473]">{feedback}</p>
            <button
              onClick={nextRound}
              className="w-full sm:w-auto px-6 py-2 bg-[#314473] text-white rounded-lg hover:bg-[#25365E]"
            >
              Next Round
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default RealFakeGame;
