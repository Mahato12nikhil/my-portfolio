import { useEffect, useRef, useState } from "react";
import styles from "./css/HorizontalSlider.module.css";

const skills = ["html", "css", "javascript", "node", "react", "xml", "git", "android", "mongodb"];

const ITEMS_PER_SCROLL = 6;

const HorizontalSlider = () => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    function getImageUrl(name:string){
        return new URL(`../assets/images/${name}.png`, import.meta.url).href
    }
    useEffect(() => {
        const interval = setInterval(() => {
            if (sliderRef.current) {
                const nextIndex = (currentIndex + ITEMS_PER_SCROLL) % skills.length;
                setCurrentIndex(nextIndex);
                sliderRef.current.scrollTo({
                    left: nextIndex * sliderRef.current.clientWidth, 
                    behavior: "smooth",
                });
            }
        }, 2000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className={styles.slider_wrapper}>
            <div className={styles.slider_container} ref={sliderRef}>
                {skills.map((skill, index) => {
                    return (
                        <img 
                            key={index} 
                            src={getImageUrl(skill)} 
                            className={styles.skill_image} 
                            alt={`${skill} logo`} 
                        />
                    );
                })}
            </div>

            <div className={styles.dots_container}>
                {Array.from({ length: Math.ceil(skills.length / ITEMS_PER_SCROLL) }).map((_, index) => (
                    <span
                        key={index}
                        className={`${styles.dot} ${index === Math.floor(currentIndex / ITEMS_PER_SCROLL) ? styles.active_dot : ""}`}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default HorizontalSlider;
