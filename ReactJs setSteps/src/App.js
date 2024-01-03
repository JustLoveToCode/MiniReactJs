import {useState} from 'react';

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];


function App(){
  // The initial state for the step which is 1:
  const [step, setSteps] = useState(1)
  // The initial state for the isOpen which is true:
  const [isOpen, setIsOpen] = useState(true)

  
 

  function handlePrevious(){
      // If the step is more than 1:
      if(step>1)
      // Invoke the useState Method and Decrement by 1
      // If the step is at 2 or 3:
      setSteps((currentStep)=>currentStep-1
    );
      }

  function handleNext(){
    // If the step is less than 3:
    if(step<3)
    // Invoke the setSteps useState Method and increment by 1
    // When the step is at 1 or 2:
    setSteps((currentStep)=>currentStep+1)
  }

  return(
  <>
  {/* When you clicked on it, the setIsOpen will change from true or false or Vice Versa
  and it will Disappear */}
    <button className="close" onClick={()=>setIsOpen(!isOpen)}>Change Modal</button>
  {
    // If isOpen is true the && And Operator will be Invoked:
    isOpen && (
    <div className="steps">
    <div className="numbers">
      {/* Checking the step for the className to be either active or " " */}
      <div className={`${step >=1? 'active': ""}`}>1</div>
      <div className={`${step >=2? 'active': ""}`}>2</div>
      <div className={`${step >=3? 'active': ""}`}>3</div>
    </div>

    <p className='message'>Step {step}:{messages[step-1]}</p>
    <div className="buttons">
      {/* Invoke the onClick handlePrevious Function */}
      <button style={{backgroundColor: '#7950f2', color: 'white'}} onClick={handlePrevious}>Previous</button>
      {/* Invoke the onClick handleNext Function */}
      <button style={{backgroundColor: '#7950f2', color: 'white'}} onClick={handleNext}>Next</button>
    </div>
  </div>
    )
}
</>
  );
}

export default App;