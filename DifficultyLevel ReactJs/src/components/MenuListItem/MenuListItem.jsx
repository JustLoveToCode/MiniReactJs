import {useState} from 'react';
import s from './style.module.css';

export const MenuListItem=(props)=>{
    const [isHovered, setIsHover]= useState(false);
    
    function activate(){
        setIsHover(true)
    }
    
    function deactivate(){
        setIsHover(false)
        
    }
    
    // console.log("Set is Hover?", isHovered)
    // Using the State Update
const getBackgroundColor=()=>{
    
    if (isHovered){
        return "#a5e9ff";
    } else{
       if(props.isSelected) {
        return "#26baea";
       } else{
        return "#eff0ef";
       }
        
    }
  
}

    
    // The onClick come from the App.jsx file
    const onItemClick=()=>{
        props.onClick(props.difficulty)
    };
    
    
    return (
    <div
        onClick={onItemClick}
        className={s.container} 
        onMouseEnter={activate} 
        onMouseLeave={deactivate}
        style={{backgroundColor : getBackgroundColor()}}>
        Set to: {props.difficulty}
    
    </div>
    )
};