import styles from "./css/Milestone.module.css";

export interface MilestoneDf {
  timeline: string;
  inst?: string;
  desig?: string;
}

const Milestone = () => {
  const milestones: MilestoneDf[] = [
    { timeline: "2021-Present", inst: "Tata consultancy services", desig: "System Engineer" },
    { timeline: "2016-2020", inst: "GCETTB, Berhampore", desig: "Btech in computer science and engineering" },
    { timeline: "2015", inst: "Gopalnagar A.T.H.S school", desig: "Higher secondary" },
    { timeline: "2013", inst: "Vidyasagar Sikhsha Niketan", desig: "Secondary" },
  ];

  return (
    <div className={styles.timeline}>
      {milestones.map((milestone, index) => (
        <div
          key={index}
          className={[styles.container, index % 2 === 0 ? styles.left : styles.right].join(" ")}
        >
          <div className={styles.content}>
            <h2>{milestone.timeline}</h2>
            <p>{milestone.inst}, <i style={{color:'rgba(0,0,0,0.6)'}}>{milestone.desig}</i></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Milestone;
