import { IProject } from '@/state/reducers/project';
import styles from './css/Card.module.css'
import { FaArrowRight } from "react-icons/fa";


const Card=(props:IProject)=>{
    return (
        <div className={styles.card}>
            <h3>{props.name}</h3>
            <span>{props.description}</span>
            <a href={props.link} target="_blank" rel="noopener noreferrer">Link <FaArrowRight/></a>
        </div>
    )
}
export default Card;