import {useState} from 'react';

const Form=({addItem})=>{
   const [newItemName, setNewItemName]=useState('');

// If there is no items, we simply return, on the other hand
// if there is items, we will addItem(newItemName)
// In this case, we will want to set the setNewItemName back to empty string
// after we have submitted the form
   const handleSubmit=(e)=>{
    e.preventDefault();
    if(!newItemName) return;
    addItem(newItemName)
    setNewItemName('')
   }
   
    return <form onSubmit={handleSubmit}>
    <h4>Grocery Bud</h4>
    <div className='form-control'>
    <input type='text' className='form-input' value={newItemName} onChange={(event)=>setNewItemName(event.target.value)}/>
    <button type='submit' className='btn'>Add Items</button>
    </div>
    </form>
    
}
export default Form;