import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";



const skills = [
  {
    skill: "HTML+CSS",
    level: "intermediate",
    color: "lightblue"
  },
  {
    skill: "JavaScript",
    level: "intermediate",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "intermediate",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "beginner",
    color: "#60DAFB",
  },
  {
    skill: "Video Edit",
    level: "beginner",
    color: "#FF3B00",
  }
];




function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        
        <Intro />
 
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(){
return(
  // Sunset image credit to skyrider74 from Pixabay
  <img className='avatar' src='/sunset.jpg' alt='sunset' 
  style={{backgroundSize: 'cover'}}
  />
)
}

function Intro(){
  return(
  <div>
    <h1>Hello Sunset</h1>
    <p>The Beautiful Sunset that you can actually enjoy by walking
      down the beach with your family and friends, look forward
      to seeing the Sunset every single day.
    </p>
  </div>
  )

}

function SkillList(){
  return(
<div className="skill-list">

{skills.map(skill=>{
  return(
  <Skill skill={skill}/>
  )
})}
</div>
  )

}

function Skill({skill}){
  return(
    <div className='skill' style={{backgroundColor:skill.color, color: 'black'}}>
      <span>{skill.skill}</span>
      <span>
        {skill.level==='beginner' && "😐"}
        {skill.level==='intermediate' && "😫"}
        {skill.level==='advanced' && "😌"}
      </span>
    </div>
  )
}


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

