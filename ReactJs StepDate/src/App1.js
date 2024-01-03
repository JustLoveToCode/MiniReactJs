import { useState } from "react";


export default function App1() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(0);
  const [step, setStep]= useState(0);
  
  const date = new Date('june 21 2027');
  date.setDate(date.getDate()+ count);

  return(
  <div>
    <div>
      <div>
      <input type='range' 
      min="0" max="10"
      value={step} 
      onChange={e=>setStep(parseInt(e.target.value))}/>
      </div>

      <button onClick={()=> setStep((c)=>c-1)}>Step -</button>
      <span>Step: {step<0 ? setStep(0): step}</span>
      <button onClick={()=> setStep((c)=>c+1)}>Step +</button>
      </div>

      <div>
      <input type='text' value={count} onChange={e=> setCount(parseInt(e.target.value))}/>
      </div>

      <div>
      <button onClick={()=>setCount(count-step)}>-</button>
      <span>Count: {count < 0 ? setCount(0): count}</span>
      <button onClick={()=> setCount(count+step)}>+</button>
      </div>



    <p>
    <span>{count===0? "Today Is ": count > 0 ? `${count} Days from Today `: 
    `${Math.abs(count)} from Days Ago`}</span>
    <span>{date.toDateString()}</span>
    </p>
    <button onClick={()=>[setCount(0), setStep(0)]}>Reset</button>
  </div>


  )
}