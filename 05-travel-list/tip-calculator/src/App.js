import { useState } from "react";
import "./styles.css";

export default function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);
  const total = Math.round(bill * (1 + (tip + friendTip) / 2));

  function handleTipChange(e) {
    setTip(() => Number(e.target.value));
  }
  function handleFriendTipChange(e) {
    setFriendTip(() => Number(e.target.value));
  }

  function handleBillChange(e) {
    setBill(() => Number(e.target.value));
  }

  function handleReset() {
    setBill(0);
    setTip(0);
    setFriendTip(0);
  }

  return (
    <div className="App">
      <Bill bill={bill} onBillChange={handleBillChange}>
        How much was the bill?
      </Bill>
      <Tip tip={tip} onTipChange={handleTipChange}>
        How did you like the service?
      </Tip>
      <Tip tip={friendTip} onTipChange={handleFriendTipChange}>
        How did your friend like the service?
      </Tip>
      <Total total={total} onReset={handleReset} />
    </div>
  );
}

function Bill({ bill, children, onBillChange }) {
  return (
    <div>
      <p>{children}</p>
      <input onChange={onBillChange} value={bill} />
    </div>
  );
}

function Tip({ tip, children, onTipChange }) {
  return (
    <div>
      <p>{children}</p>
      <select value={tip} onChange={onTipChange}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="0.05">It was okay (5%)</option>
        <option value="0.1">It was good (10%)</option>
        <option value="0.2">Absolutely amazing (20%)</option>
      </select>
    </div>
  );
}

function Total({ total, onReset }) {
  return (
    <div>
      <p>Total: {total}</p>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
