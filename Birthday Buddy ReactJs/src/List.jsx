import Person from './Person';

// Using the map method
const List=({people})=>{
  return (
    <section>
  {people.map((person)=>{
    return <Person key={person.id}{...person}/>;
    
  })}
  
  
  </section>
 )
}

export default List