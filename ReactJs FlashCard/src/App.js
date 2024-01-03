import "./styles.css";
import {useState} from 'react';

export default function App() {
  return (
    <div className="App">
      <FlashCards/>
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript"
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components"
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX"
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props"
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook"
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element"
  }
];

function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id){
    // If the id that is passed in is not equal to the selectedId
    // it will then be set to the id that is passed in which is the new id
    // If it is equal, it will be set to null:
    // setting it to null basically Deselect the Card:
    setSelectedId(id !== selectedId ? id : null);
  }
  

  return(
  <div className='flashcards'>
    {/* Using the map method to iterate through the questions */}
  {questions.map((question)=>(
  // Using the onClick Method to Invoke the handleClick Function
  // If question.id is equal to selectedId, the className will be "selected"
  // Otherwise it will be null which is " "
  // This question.id is the currently selected card:
    <div key={question.id} 
    onClick={()=>handleClick(question.id)} 
    className={question.id === selectedId? "selected": ""}>
      {/* Check if the question.id is equal to the selectedId, it will show the question.answer, otherwise,
      it will only be shown as a question */}
    <p>{question.id === selectedId? question.answer: question.question}</p>
    </div>
  ))}
  </div>
  )
  ;
}