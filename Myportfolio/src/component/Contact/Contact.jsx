import { getImageUrl } from "../../util";
import React from "react";
import styles from "./Contact.module.css";
const Contact = () => {
  return (
    <footer className={styles.container} id="Contact">
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to contact</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email.icon" />
          <a href="mailto:ashishkr272001@gmail.com">ashishkr272001@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="Email.icon" />
          <a href="www.linkedin.com/in/ashish-kumar-1b6b25225">
          www.linkedin.com/in/ashish-kumar-1b6b25225
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Email.icon" />
          <a href="https://github.com/ashishkumar2702">https://github.com/ashishkumar2702</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
