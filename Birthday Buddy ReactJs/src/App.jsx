import {useState} from 'react';
import data from "./data";
import List from './List';

const App = () => {
  const [people, setPeople]=useState(data);
  // data here is in the form of the Array, useState(data) 
  // is stored in the variable people
  // Inside the Array, there is a group of the objects
  // people=[{},{},{}]
  
  return <main>
  <section className='container'>
  <h3>{people.length} Birthday Today</h3>
  <List people={people}/>
  <button type='button' className='btn btn-block' onClick={()=>setPeople([])}>Clear All</button>
  </section>
  
  </main>;
};

export default App;
