import HorizontalSlider from '../../components/HorizontalSlider';
import SectionTitle from '../../components/sectiontitle/SectionTitle';
import styles from '../about/About.module.css'
import { MdArrowForwardIos } from "react-icons/md";

const About=()=>{
    return (
        <div className={styles.container}>
            <div style={{marginLeft:'10%',marginTop:'5%',width:'100%'}}> <SectionTitle title='About'/></div>
            <div className={styles.about_content}>
                <div className={styles.image_about}>
                    <div>
                        <p style={{color:'deepskyblue', fontSize:'3rem'}}>Nikhil Mahato</p>
                        <i>"Coding enthuastic and passionate to explore new technologies"</i>
                        <div style={{marginTop:'0.5rem'}}>
                            <address>
                                <br/>
                                <MdArrowForwardIos size="1rem"/> Purulia, West Bengal, India.<br/>
                                <br/>
                                <MdArrowForwardIos size="1rem"/> <a href='mailto:Nikhilmahato400@gmail.com' style={{textDecoration:"none",color:'black'}}> Nikhilmahato400@gmail.com</a><br/>
                                <br/>
                                <MdArrowForwardIos size="1rem"/><a href="tel:+917363957907" style={{textDecoration:"none",color:'black'}}> +91 7363957907</a>
                            </address>
                        </div>
                    </div>
                </div>
                <div className={styles.skill_showcase}>
                    <HorizontalSlider/>
                </div>
            </div>
        </div>
    )
}
export default About;