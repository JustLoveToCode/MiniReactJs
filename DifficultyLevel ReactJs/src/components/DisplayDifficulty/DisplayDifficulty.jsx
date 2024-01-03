import s from './style.module.css';

export function DisplayDifficulty(props){
    return(
    <div className={s.container}>
    {
    props.difficulty ? `Difficulty Set to  ${props.difficulty}`: "No Difficulty Set"
    }
    
    </div>
    );
}