import Milestone from "../../components/Milestone";
import SectionTitle from "../../components/sectiontitle/SectionTitle"
import styles from './Experience.module.css'
const Experience=()=>{
    return (
        <div className={styles.container}>
            <div style={{marginLeft:'10%',marginTop:'5%',width:'100%'}}> <SectionTitle title='Journey'/></div>
            <div className={styles.content}>
                <Milestone/>
            </div>
            
        </div>
    )
}
export default Experience;