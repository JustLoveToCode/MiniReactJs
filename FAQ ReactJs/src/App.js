import './styles.css';
import {useState} from 'react';

// Creating the faqs which is actually an Array that contain the Different Objects:
const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }

];

export default function App() {
  return (
    <div>
      {/* data properties which is equal to the Array which contain Objects,
      faqs is with reference to the Objects that is inside the Array */}
      <Accordion data={faqs} />
    </div>
  );
}


function Accordion({data}) {
  const [curOpen, setCurOpen] = useState(null);
  return (<div className='accordion'>
    {/* Using the map method to loop through the Array,
    passing the Optional index keyword */}
    {data.map((el,index)=>
    // Creating the Different AccordionItem Component:
    // Based on the Different Properties:
    <AccordionItem 
    curOpen={curOpen} onOpen={setCurOpen}
    title={el.title} num={index} key={el.title}>
    {el.text}
    </AccordionItem>
    )}

    {/*  Creating Another Component for Testing Purposes */}
    <AccordionItem 
    curOpen={curOpen} onOpen={setCurOpen}
    title='Testing Title' num={1}>
    <h1>'This is a Testing Text Kit for you'</h1>
    <ul>
      <li>This is the Test</li>
      <li>This is the Developement Site</li>
      <li>How to be a Good Freelance</li>
    </ul>
    </AccordionItem>
  </div>
  );
}

// num, title, curOpen, onOpen and children are the props:
function AccordionItem({num, title,curOpen, onOpen, children}){

  const isOpen = num === curOpen;

  function handleToggle(){
    // Check the Boolean of true or false for isOpen:
    // if isOpen is true, it will be set to null
    // otherwise it will be num
    onOpen(isOpen? null: num)
  }
  
  return(
    // If isOpen is true, the className be set to the "open" otherwise it will be " "
    // onClick will invoke the handleToggle Function which will trigger isOpen of
    // If isOpen set to num, it will be open for the className
  <div className={`item ${isOpen? "open" :" "}`} onClick={handleToggle}>
      <p className='number'>{num<9? `0${num+1}`: num+1}</p>
      <p className='title'>{title}</p>
      {/* if isOpen is true, it will be '-', otherwise it will be '+' */}
      <p className='icon'>{isOpen? "-" :"+"}</p>
      {/* If isOpen is true */}
      {isOpen && <div className='content-box'>{children}</div>}
  </div>
  
  )
}

