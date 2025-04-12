import { IProject } from '@/state/reducers/project';
import styles from './css/Card.module.css';
import { FaArrowRight } from "react-icons/fa";

const Card = (props: IProject) => {
  return (
    <div className={styles.card}>
      <div className={styles.cover}>
        <h3>{props.name}</h3>
      </div>
      <div className={styles.content}>
        <p>{props.description}</p>
        <div className={styles.tools}>
          {props.tools.map((tool, index) => (
            <span key={index} className={styles.toolTag}>{tool}</span>
          ))}
        </div>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          View Project <FaArrowRight />
        </a>
      </div>
    </div>
  );
};

export default Card;
