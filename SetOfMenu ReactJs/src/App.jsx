import Title from './Title';
import {useState} from 'react';
import menu from './data';
import Menu from './Menu';
import Categories from './Categories';


// Creating the Array Consisting of the Different Categories:
// Using the map method to iterate through the menu which is the Array of data:
// Set will remove all the Duplicate Values in the Datasets:
// Spread Operator will convert the Set into the Array together with the "all" keyword:
const allCategories=['all',...new Set(menu.map((item)=>item.category))];



const App = () => {
  const [menuItems, setMenuItems]=useState(menu);
  const [categories, setCategories]=useState(allCategories);
  
  const filterItems=(category)=>{
    if(category==='all'){
    setMenuItems(menu)
    return;
  // Creating the Filter Method:
  // Using the filter method to filter the item by its category:
    }
    const newItems=menu.filter((item)=>item.category===category)
    setMenuItems(newItems)
  }
  
  return (
<main>

  <section className='menu'>
    <Categories categories={categories} filterItems={filterItems}/>
    <Title text='our menu'/>
    <Menu items={menuItems}/>
    
  </section>
</main>
  
  );
};
export default App;
