import {useState} from 'react';
import Logo from './components/Logo';
import Form from './components/Form';
import PackingList from './components/PackingList';
import  Stats  from './components/Stats';



export default function App(){
  const [items, setItems] = useState([]);
 

  function handleAddItems(item) {
    setItems((items)=>[...items, item])
  }

  function handleDeleteItem(id){
    setItems((items)=>items.filter(item=>item.id !==id))
  }

  function handleToggleItem(id){
    // if item.id === id:
    setItems((items)=>items.map((item)=> item.id===id?
    {...item, packed: !item.packed}:item)
    );
  }

  function clearAllItem(){
    const confirmed = window.confirm('Are you sure you want to delete all items?')
    // setItems to be Empty Array using the setItems Method:
    if(confirmed) setItems([]);
  }

  return(
  <div className='app'>
    <Logo/>
    <Form onAddItems={handleAddItems}/>
    <PackingList items={items} onDeleteItem={handleDeleteItem}
    onToggleItem={handleToggleItem} onClearItem={clearAllItem}/>
    <Stats items={items}/>
  </div>
  )

}






