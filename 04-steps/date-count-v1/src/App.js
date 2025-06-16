import React from "react";
import { useState } from "react";
import "./index.css";

export default function App() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <>
      <div className="container">
        <div>
          <button
            onClick={() => setStep((step) => (step - 1 > 0 ? step - 1 : 0))}
          >
            {"-"}
          </button>
          <span> Step:{step}</span>
          <button onClick={() => setStep((step) => step + 1)}>{"+"}</button>
        </div>
        <div>
          <button
            onClick={() =>
              setCount((count) => (count - step > 0 ? count - step : 0))
            }
          >
            {"-"}
          </button>
          <span> Count:{count}</span>
          <button onClick={() => setCount((count) => count + step)}>
            {"+"}
          </button>
        </div>
        <div>{`${count} days from today is ${date.toLocaleDateString()}`}</div>
      </div>
    </>
  );
}
