import HorizontalSlider from '../../components/HorizontalSlider';
import SectionTitle from '../../components/sectiontitle/SectionTitle';
import styles from './About.module.css';
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import { motion } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';

const About = () => {
    const { theme } = useTheme();

    return (
        <div className={styles.container} data-theme={theme}>
            <div className={styles.sectionTitleWrapper}>
                <SectionTitle title='About' />
            </div>

            <div className={styles.aboutContent}>
                {/* <motion.div
                    className={styles.imageSection}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <img
                        src={img}
                        alt="Nikhil Mahato"
                        className={styles.profileImage}
                    />
                </motion.div> */}

                <motion.div
                    className={styles.textSection}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className={styles.name}>Nikhil Mahato</h1>
                    <p className={styles.quote}>
                        "Coding enthusiast, passionate about exploring modern tech stacks and building cool digital experiences."
                    </p>

                    <div className={styles.info}>
                        <p><MdLocationOn className={styles.icon} /> Purulia, West Bengal, India</p>
                        <p><MdEmail className={styles.icon} /><a href="mailto:Nikhilmahato400@gmail.com">Nikhilmahato400@gmail.com</a></p>
                        <p><MdPhone className={styles.icon} /><a href="tel:+917363957907">+91 7363957907</a></p>
                    </div>
                </motion.div>
            </div>

            <div className={styles.sliderSection}>
                <HorizontalSlider />
            </div>
        </div>
    );
};

export default About;
