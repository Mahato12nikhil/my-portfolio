import { useEffect, useState } from 'react';
import NavigationBar from '../../components/NavigationBar';
import styles from './Home.module.css';
import About from '../about/About';
import Experience from '../experience/Experience';
import Project from '../projects/Project';
import Contact from '../contact/Contact';

const Home: React.FC = () => {
    const sections:string[] = ['home', 'about', 'journey','projects','contact'];
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection((prev) => {
                            if (prev !== entry.target.id) {
                                console.log("Prev:", prev, "New:", entry.target.id);
                                return entry.target.id;
                            }
                            return prev; 
                        });
                    }
                });
            },
            { threshold: 0.6 }
        );

        sections.forEach((id) => {
            const section = document.getElementById(id);
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    });

    return (
        <div className={styles.container}>
            <div className={styles.home_background} />

            <div className={styles.navigation_container}>
                <NavigationBar activeSection={activeSection} />
            </div>

            <div className={styles.sections}>
                <section id="home" className={styles.sig_designation_cont}> 
                    <h3>Nikhil Mahato</h3>
                    <h4>Application Developer</h4>
                </section>
                <section id="about" className={styles.section_container}>
                    <About/>
                </section>
                <section id="journey" className={[styles.section_container ,styles.section_margin].join("")}>
                    <Experience/>
                </section>
                <section id="projects" className={[styles.section_container ,styles.section_margin].join("")}>
                    <Project/>
                </section>
                <section id="contact" className={[styles.section_container ,styles.section_margin].join("")}>
                    <Contact/>
                </section>
            </div>
        </div>
    );
};

export default Home;
