import react from 'react';




export default function Card(props){
    
    
    // Using the Ternary Operator of Truthy and Falsy Values
    // Initially badgeText is Undefined and hence it is Falsy
    let badgeText
    if (props.openSpots===0){
        badgeText='SOLD OUT'
    } else if(props.location==='Online'){
        badgeText='ONLINE'
    } else{
        badgeText="NoWhere"
    }
// For the && AND Operator, Both Condition must be satisfied
return(
<div className='card'>
{badgeText && <div className='card--badge'>{badgeText}</div>}
    <img src={`../images/${props.img}`} className='card--image' width='400' height='400'/>
        <div className='card--stats'>
            <img src='../images/image5.png' className='star'/>
            <span>{props.rating}</span>
            <span className='gray'>({props.reviewCount})</span>
            <span className='gray'>{props.location}</span>
            <div>{props.description}</div>
        </div>
    <p>{props.title}</p>
    <p><span className='bold'>From {props.price}</span>/person</p>
    
</div> 


    )
}