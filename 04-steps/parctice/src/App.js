import { useState } from "react";

const message = [
  "Learn React 🌟",
  "Apply for jobs 💼",
  "Invest your new income 💰",
];

export default function App() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="steps">
      <div className="numbers">
        <div
          className={currentStep >= 1 ? "active" : ""}
          onClick={() => setCurrentStep(1)}
        >
          1
        </div>
        <div
          className={currentStep >= 2 ? "active" : ""}
          onClick={() => setCurrentStep(2)}
        >
          2
        </div>
        <div
          className={currentStep >= 3 ? "active" : ""}
          onClick={() => setCurrentStep(3)}
        >
          3
        </div>
      </div>
      <p className="message">{`step ${currentStep - 1}: ${
        message[currentStep - 1]
      }`}</p>
      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={() =>
            setCurrentStep(currentStep > 1 ? currentStep - 1 : currentStep)
          }
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={() =>
            setCurrentStep(currentStep < 3 ? currentStep + 1 : currentStep)
          }
        >
          Next
        </button>
      </div>
    </div>
  );
}
