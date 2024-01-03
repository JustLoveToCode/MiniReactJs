import {useState} from 'react';

export default function Form({onAddItems}){
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);
    
      function handleSubmit(e){
        e.preventDefault();
    
        if(!description) return;
    
        const newItem={description, quantity, packed: false,
        // Using Date.now() to create the Random id:
        id: Date.now()};
    
        onAddItems(newItem);
        // Once the items have been added, set the description back to Empty String:
        setDescription('')
        // Set the quantity back to 1:
        setQuantity(1);
        
        
      }
    
      return (
        <form className='add-form' onSubmit={handleSubmit}>
          <h3>What do you need for your trip?🎄</h3>
          <select value={quantity} onChange={(e)=>setQuantity(Number(e.target.value))}>
            {/* Array.from is used to set a Certain Amount of items in the Array */}
            {Array.from({length:20}, (_,i)=>i+1).map
            ((num)=>(<option value={num} key={num}>{num}</option>
            ))}
          </select>
          <input type='text' placeholder='Enter your Text Here' 
          value={description} onChange={(e)=> 
          setDescription(e.target.value)}/>
    
          <button>Add</button>
        </form>
      )
    }