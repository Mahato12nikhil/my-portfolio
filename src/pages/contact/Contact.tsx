import SectionTitle from "../../components/sectiontitle/SectionTitle";
import styles from "./Contact.module.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validate = () => {
    let tempErrors = { name: "", email: "", message: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      tempErrors.email = "Invalid email format";
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

    if (!validate() || !serviceId || !templateId || !publicKey) return;

    emailjs
      .sendForm(serviceId, templateId, form.current!, publicKey)
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setErrors({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        alert("Failed to send message. Please try again.");
        console.error(error);
      });
  };

  return (
    <div className={styles.container}>
      <div style={{ marginLeft: "10%", marginTop: "5%", width: "100%" }}>
        <SectionTitle title="Contact" />
      </div>
      <div className={styles.contact_container}>
        <form
          ref={form}
          onSubmit={sendEmail}
          className={styles.contact_form}
          noValidate
        >
          <div className={styles.name_email}>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className={styles.inputBoxes}
                value={formData.name}
                onChange={handleChange}
                required
              />
              {errors.name && <p className={styles.error}>{errors.name}</p>}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className={styles.inputBoxes}
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <p className={styles.error}>{errors.email}</p>}
            </div>
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Message"
              className={styles.textarea}
              value={formData.message}
              onChange={handleChange}
              required
            />
            {errors.message && <p className={styles.error}>{errors.message}</p>}
          </div>
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
