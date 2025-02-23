import Card, { CardDef } from "../../components/Card";
import SectionTitle from "../../components/sectiontitle/SectionTitle";
import styles from './Project.module.css'


const Project:React.FC<{}>=()=>{
    const projects:CardDef[]=[
        {
            title:'Secfam',
            description:"An SOS Android app that offers users the opportunity to find the closest helpful people. People can track live with map and video",
            link:'https://github.com/Mahato12nikhil/SecFam_ver1.0.0'
        },{
            title:'Cardmaster',
            description:'An Android puzzle game app.',
            link:'https://github.com/Mahato12nikhil/CardMaster'
        },{
            title:'SequenceMaster',
            description:'Fantasy gaming puzzle application (IOS and android).',
            link:'https://github.com/Mahato12nikhil/SequenceMaster'
        },{
            title:'SequenceMaster-Admin-panel',
            description:'Web app to handle administrative-related works',
            link:'https://github.com/Mahato12nikhil/Sequencemaster-admin-panel'
        }
    ]
    return (
        <div className={styles.container}>
            
            <div style={{marginLeft:'10%',marginTop:'5%',width:'100%'}}> <SectionTitle title='Projects'/></div>
            <div className={styles.content}>
                {projects.map((project, ind)=>{
                    return <Card key={ind} {...project}/>
                })}
            </div>
        </div>
    )
}
export default Project;
