import "./styles.css";
import {useState} from 'react';

export default function App() {
  return (
    <div>
      <TextExpander>
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
      >
        {/* The above properties will replace the default
        text inside the TextExpander Functional Component */}
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      {/* expanded = {true} will go to the Functional Component 
      which will replace the expanded=false*/}
      <TextExpander expanded={true} className="box">
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  );
}

// Reusable TextExpander Component:
function TextExpander({collapsedNumWords=10, expandButtonText="Show More",
collapseButtonText='show less', buttonColor='#1f09cd', expanded=false, className, children}) {
  // expanded is initially set to false:
  const [isExpanded, setIsExpanded]= useState(expanded);
  // If it is true, it will display the children, children represent the entirety of the text
  // for the TextExpander itself, otherwise if it is false, the children.split() method will apply:
  const displayText= isExpanded ? children : children.split(' ').slice(0,collapsedNumWords).join('')+ "..."
  // Creating the buttonStyle here:
  const buttonStyle={
    background: 'none',
    border: 'none',
    font: 'inherit',
    cursor: 'pointer',
    marginLeft: '6px',
    color: buttonColor
  }

  return (
  <div className={className}>
    <span>{displayText}</span>
    {/* Creating the function inside the button here and Flip it */}
    <button onClick={()=>setIsExpanded((exp)=> !exp)} style={buttonStyle}>
    {/* If isExpanded is true */}
    {isExpanded? collapseButtonText:expandButtonText}</button>
  </div>
  )
}
