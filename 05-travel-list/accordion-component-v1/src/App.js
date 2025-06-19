import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);
  function handleCurOpen(num) {
    setCurOpen((curOpen) => (curOpen === num ? null : num));
  }

  return (
    <div className="accordion">
      {data.map((item, index) => (
        <AccordionItem
          curOpen={curOpen}
          handleCurOpen={handleCurOpen}
          key={index + 1}
          num={index + 1}
          title={item.title}
        >
          {item.text}
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({ curOpen, handleCurOpen, num, title, children }) {
  const isOpen = curOpen === num;
  return (
    <div
      className={"item" + (isOpen ? " open" : "")}
      onClick={() => handleCurOpen(num)}
    >
      <p className={"number"}>{num < 9 ? `0${num}` : num}</p>
      <p className={"title"}>{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
