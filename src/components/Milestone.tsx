import styles from "./css/Milestone.module.css";

interface ExperienceDf {
  title: string;
  tools: string[];
  languages: string[];
}

export interface MilestoneDf {
  timeline: string;
  inst?: string;
  desig?: string;
  experience: ExperienceDf[];
}

const Milestone = () => {
  const milestones: MilestoneDf[] = [
    {
      timeline: "2021-Present",
      inst: "Tata Consultancy Services",
      desig: "System Engineer",
      experience: [
        {
          title:
            "Developed three terminal emulator Android apps using the native Android framework.",
          tools: ["Android Studio", "Azure Cloud", "JIRA"],
          languages: ["Java"],
        },
        {
          title:
            "Independently architected and developed a highly efficient and scalable Node.js application with Express, utilizing Azure cloud services.",
          tools: ["Node.js", "Express", "Azure Cloud", "MQTT"],
          languages: ["TypeScript"],
        },
        {
          title:
            "Played a pivotal role in a major cloud migration project as an active React developer and subject matter expert,guiding a team of over 20 members.",
          tools: [
            "React.js",
            "React Native",
            "Angular",
            "Spring Boot",
            "Azure Cloud",
          ],
          languages: ["Java", "Javascript", "Typescript"],
        },
        {
          title:
            "Actively contributed to a large-scale parcel management system by developing robust React-based applications",
          tools: [
            "ReactJS",
            "React Native",
            "Microsoft SQL server management studio",
            "Walmart cloud",
          ],
          languages: ["Javascript", "SQL"],
        }
      ],
    },
  ];

  return (
    <div className={styles.timeline}>
      {milestones.map((milestone, index) => (
        <div
          key={index}
          className={[
            styles.container,
            styles.right,
          ].join(" ")}
        >
          <div className={styles.content}>
            <h2>{milestone.timeline}</h2>
            <p>
              {milestone.inst},{" "}
              <i >{milestone.desig}</i>
            </p>
            {milestone.experience.map((exp, i) => (
              <div key={i} className={styles.experienceBlock}>
                <p className={styles.title}>• {exp.title}</p>
                <div>
                  <p className={styles.sectionHeading}>Tools and Technologies</p>
                  {exp.tools.map((tool, idx) => (
                    <span key={idx} className={styles.badge}>
                      {tool}
                    </span>
                  ))}
                </div>
                <div>
                  <p className={styles.sectionHeading}>Languages</p>
                  {exp.languages.map((lang, idx) => (
                    <span key={idx} className={styles.badge}>
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Milestone;
