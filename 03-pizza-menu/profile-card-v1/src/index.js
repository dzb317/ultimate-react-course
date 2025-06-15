import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}


function Avatar(){
  return (
    <img
      className="avatar"
      src="avatar.jpeg"
      alt="avatar"
    />
  );
}


function Intro(){
  return (
    <div className="intro">
      <h1>Zebin Ding</h1>
      <p>Front-end developer</p>
    </div>
  );
}

function SkillList(){
  return (
    <div className="skill-list">
      <Skill name="HTML😊" color="red" />
      <Skill name="CSS👍" color="blue" />
      <Skill name="JavaScript😂" color="yellow" />
    </div>
  );
}

function Skill({name,color}){
  return (
    <div className="skill" style={{backgroundColor:color}}>
      <p>{name}</p>
    </div>
  );
}






const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
