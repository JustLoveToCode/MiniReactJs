const url = 'https://course-api.com/react-tabs-project';
import JobInfo from './JobInfo';
import {useState, useEffect} from 'react';
import BtnContainer from './BtnContainer';


const App = () => {
  const [isLoading, setIsLoading]=useState(true);
  const [jobs, setJobs]=useState([]);
  const [currentItem, setCurrentItem]=useState(0);
  
  // Current Item:

  const fetchJobs=async()=>{
    // Using the await keyword to fetch the url:
    const response=await fetch(url);
    // It return the Promise hence you will need to use the keyword await:
    const newJobs=await response.json()
    setJobs(newJobs);
    // setIsLoading to be false if the Information have been done fetching:
    setIsLoading(false);
};

// Calling the fetchJobs once due to Empty Dependency Array:
useEffect(()=>{
  fetchJobs()
},[]);
  

// This is what will be displayed if isLoading is set to true
if(isLoading){
  return (
  <section className='jobs-center'>
  <div className='loading'></div>
  </section>
)
}

// This is what will be returned:
return (
  <section className='jobs-center'>
  <BtnContainer 
  jobs={jobs}
  currentItem={currentItem}
  setCurrentItem={setCurrentItem}
  />
  
  <JobInfo jobs={jobs} currentItem={currentItem}
  />

  </section>
)
  
  

}

export default App;


