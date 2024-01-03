import s from './style.module.css';
import {MenuListItem} from "../MenuListItem/MenuListItem";

// The MenuListItem is referring to the 4 different options that is present
export function MenuList(props){
    return (
    <div className={s.container}>
    <MenuListItem isSelected={props.difficulty==='Low'} onClick={props.onItemClick} difficulty="Low"/>
    <MenuListItem isSelected={props.difficulty==='Medium'} onClick={props.onItemClick} difficulty="Medium"/>
    <MenuListItem isSelected={props.difficulty==='High'} onClick={props.onItemClick} difficulty="High"/>
    <MenuListItem isSelected={props.difficulty==='Insane'} onClick={props.onItemClick} difficulty="Insane"/>
    </div>
    )
}