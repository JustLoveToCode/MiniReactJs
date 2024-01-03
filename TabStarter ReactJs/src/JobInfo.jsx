import Duties from './Duties';

// jobs is the form of an Array and inside the Array is the group of Objects
// Hence, jobs[0] will give me the first item, and jobs[1] will give me the second item
const JobInfo=({jobs, currentItem})=>{
const {company, dates, duties, title}=jobs[currentItem];
return(
<article className='job-info'>
    <h3>{title}</h3>
    <span className='job-company'>{company}</span>
    <p className='job-date'>{dates}</p>
    <Duties duties={duties}/>
</article>  

       
)
    
}

export default JobInfo