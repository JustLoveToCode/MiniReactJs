import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card'
import data from './data';



// img, rating, reviewCount, location, title and price properties
// will be used as part of the props. in the Individual Components
export default function App(){

const cards=data.map(item=>{
  return(
<div>
  

  <Card
  img={item.coverImg}
  rating={item.stats.rating}
  reviewCount={item.stats.reviewCount}
  location={item.location}
  title={item.title}
  price={item.price}
  description={item.description}
  openSpots={item.openSpots}
  />
</div> 
    
  )
})

return(
  <div>
  <Navbar/>
  <Hero/>
  <section className='cards'>
  {cards}
  </section>
  
  </div>
  
  
)



}