import "./styles.css";
import questions from "./data";
import { useState } from "react";

export default function App() {
  const [selectedId, setSelectedId] = useState(null);


  return (
    <div className="flashcards">
      {questions.map((item) => (
        <div key={item.id} className={ selectedId === item.id? "selected" : ""} onClick={() => setSelectedId(selectedId === item.id ? null : item.id)}>
            {selectedId === item.id ? item.answer : item.question}
        </div>
      ))}
    </div>
  );
}


