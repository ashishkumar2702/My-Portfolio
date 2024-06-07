import React from "react";
import { getImageUrl } from "../../../util";
import styles from "./About.module.css";

const About = () => {
  return (
    <div>
      <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
          <img
            src={getImageUrl("About/aboutImage.jpg")}
            alt="Me-sitting with the laptop"
            className={styles.aboutImage}
          />
          <ul className={styles.aboutItems}>
            {/* Existing sections */}
            <li className={styles.aboutItem}>
              <img
                src={getImageUrl("About/cursorIcon.png")}
                alt="cursor-image"
              />
              <div className={styles.aboutItemText}>
                <h3>Frontend Developer</h3>
                <p>
                  I'm a frontend developer with experience in building
                  responsive and optimized sites
                </p>
              </div>
            </li>
            <li className={styles.aboutItem}>
              <img
                src={getImageUrl("About/serverIcon.png")}
                alt="Server-image"
              />
              <div className={styles.aboutItemText}>
                <h3>Backend Developer</h3>
                <p>
                  I have experience developing fast and optimized back-end
                  systems and APIs
                </p>
              </div>
            </li>
            {/* Resume section */}
            <li className={styles.aboutItem}>
              <img src={getImageUrl("About/Resume.png")} alt="Resume-image" />
              <div className={styles.aboutItemText}>
                <h3>Resume</h3>
                <p>
                  Feel free to download my resume to learn more about my
                  experience and skills.
                </p>
                <a
                  href="https://drive.google.com/file/d/1DyIYs4NTozK2HWUQKxEARTXgFm_2_FbK/view?usp=drive_link" // Update this with the correct relative path to your resume PDF
                  className={styles.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume
                </a>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;
