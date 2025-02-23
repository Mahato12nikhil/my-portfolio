import SectionTitle from "../../components/sectiontitle/SectionTitle";
import styles from './Contact.module.css';

const Contact = () => {
    return (
        <div className={styles.container}>
            <div style={{ marginLeft: '10%', marginTop: '5%', width: '100%' }}>
                <SectionTitle title='Contact' />
            </div>
            <div className={styles.contact_container}>
                <form className={styles.contact_form}>
                    <div className={styles.name_email}>
                        <input type="text" placeholder="Name" className={styles.inputBoxes} />
                        <input type="email" placeholder="Email" className={styles.inputBoxes} />
                    </div>
                    <textarea placeholder="Message" className={styles.textarea}></textarea>
                    <button type="submit" className={styles.submitButton}>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
