import styles from './css/Card.module.css'
import { FaArrowRight } from "react-icons/fa";

export interface CardDef{
    title:string,
    description:string,
    link:string;
}
const Card=(props:CardDef)=>{
    return (
        <div className={styles.card}>
            <h3>{props.title}</h3>
            <span>{props.description}</span>
            <a href={props.link} target="_blank" rel="noopener noreferrer">Link <FaArrowRight/></a>
        </div>
    )
}
export default Card;