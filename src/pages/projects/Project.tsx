import { useAppDispatch, useAppSelector } from "@/state/store";
import Card from "../../components/Card";
import SectionTitle from "../../components/sectiontitle/SectionTitle";
import styles from './Project.module.css'
import { useEffect } from "react";
import { fetchProject } from "@/state/reducers/project";


const Project:React.FC<{}>=()=>{

    const data=useAppSelector(state=>state.project);
    const dispatch=useAppDispatch()
    
    useEffect(()=>{
        dispatch(fetchProject());
    },[])
    return (
        <div className={styles.container}>
            
            <div style={{marginLeft:'10%',marginTop:'5%',width:'100%'}} className=""> <SectionTitle title='Projects'/></div>
            <div className={styles.content}>
                {data.map((project, ind)=>{
                    return <Card key={ind} {...project}/>
                })}
            </div>
        </div>
    )
}
export default Project;
