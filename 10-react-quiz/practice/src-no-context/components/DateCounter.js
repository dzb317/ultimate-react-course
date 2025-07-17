import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + state.step };
    case "dec":
      return { ...state, count: state.count - state.step };
    case "reset":
      return { ...state, count: 0 };
    case "defineStep":
      return { ...state, step: action.step };
    case "defineCount":
      return { ...state, count: action.count };
    default:
      return state;
  }
}

function DateCounter() {
  const [{ count, step }, dispatch] = useReducer(reducer, {
    count: 0,
    step: 1,
  });
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);
  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => {
            dispatch({ type: "defineStep", step: Number(e.target.value) });
          }}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={() => dispatch({ type: "dec" })}>-</button>
        <input
          value={count}
          onChange={(e) => {
            dispatch({ type: "defineCount", count: Number(e.target.value) });
          }}
        />
        <button onClick={() => dispatch({ type: "inc" })}>+</button>
      </div>
      <p>{date.toDateString()}</p>
      <div>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
