import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';



const url = 'https://course-api.com/react-tours-project';

// Using the useState() Hook here
const App = () => {
  const[isLoading, setIsLoading]=useState(true);
  const [tours, setTours]=useState([]);
  
// Filtering Method to filter out based on the id
const removeTour=(id)=>{
  const newTours=tours.filter((tour)=> tour.id !==id)
  setTours(newTours)
}
  
  
// Using the async and await method to fetch data
  const fetchTours=async()=>{
// This will create the setIsLoading to be true
// setIsLoading(true) which is the isLoading state,
// Initially the setIsLoading is set to be true because you need to load the data
    setIsLoading(true)
    
  // Using the try and catch method here, try is for trying to load the code
  // This is using the fetch method and the response is in the form of json data.
  // The try and catch method allowed you to define the block of code to be tested for error
    try{
      const response=await fetch(url);
      const tours=await response.json();
      // This is the data to be set once we have fetched the data
      // Initially, the tours is the empty array [], after fetching the data
      // you want to setTours(tours), using the useState(variables)
      setTours(tours)
    // catch is for catching the error
      } catch(error){
      console.log(error)
      }
// After the initial loading is done, setIsLoading to be false.
// Regardless of whether the loading is successful or not
// setIsLoading(false), this setIsLoading(false), this is outside the
// try and catch code block
    setIsLoading(false)

};
  


// Using the useEffect() Hook here
// Using the dependency array
useEffect(()=>{
    fetchTours();
  },[]);
  
  
  
  



// Do not have to use <main></main>, can be other different <div></div>
// But since the CSS is using the main to style, we will then use the <main></main> components
if(isLoading){
  return( 
  <main>
    <Loading/>
  </main>
)

}

if (tours.length===0){
  return (<main>
  <div className='title'>
  <h2>No Tours Left</h2>
  <button type='button' style={{marginTop:'2rem'}}
  className='btn' onClick={()=> fetchTours()}>Refresh Everything</button>
  
  </div>
  </main>)
}


// TODO
return (
<main>
<Tours tours={tours} removeTour={removeTour}/>
</main>)

};



export default App;
