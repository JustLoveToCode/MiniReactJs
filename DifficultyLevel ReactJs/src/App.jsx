import {DisplayDifficulty} from './components/DisplayDifficulty/DisplayDifficulty';
import {useState} from 'react';
import { MenuListItem } from './components/MenuListItem/MenuListItem';
import {MenuList} from './components/MenuList/MenuList';
import s from './style.module.css';

export function App(){

// currentDifficulty State is '' empty string:
const [currentDifficulty, setCurrentDifficulty]=useState('')

const onMenuListItemClick=(difficulty)=>{
    setCurrentDifficulty(difficulty)
}
    return (
<div>
    <h1>Select your React Difficulty</h1>
    <div className={s.workspace}>
        <MenuList onItemClick={onMenuListItemClick} difficulty={currentDifficulty}/>
        <DisplayDifficulty difficulty={currentDifficulty}/>
    </div>
   
</div>
    );
    
}

export default App;