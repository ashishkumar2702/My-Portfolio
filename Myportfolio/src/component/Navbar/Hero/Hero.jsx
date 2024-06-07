import React from "react";
import { getImageUrl } from "../../../util";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ashish</h1>
        <p className={styles.description}>
          Hey, I'm Ashish Kumar, a Full-Stack adventurer diving headfirst into the
          digital frontier. Fresh-faced but fueled by curiosity, I'm on a
          mission to transform ideas into tech magic. Ready to embark on this
          journey together.
        </p>
        <a href="mailto:ashishkr272001@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heropic.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Hero;
