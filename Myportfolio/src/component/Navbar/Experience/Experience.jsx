import React from "react";
import Skills from "../Data1/Skills.json";
import { getImageUrl } from "../../../util";
import History from "../Data1/History.json";
import styles from "./Experience.module.css";
const Experience = () => {
  return (
    <section id="experience" className={styles.container}>
      <h2 className={styles.title}>Exprience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {Skills.map((Skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(Skill.imageSrc)} alt={Skill.title} />
                </div>
                <p>{Skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {History.map((HistoryItems, id) => {
            return (
              <li key={id} className={styles.historyItems}>
                <img
                  src={getImageUrl(HistoryItems.imageSrc)}
                  alt={`${HistoryItems.organition}Logo`}
                />
                <div className={styles.historyItemsDetails}>
                  <h3>{`${HistoryItems.role},${HistoryItems.organisation}`}</h3>
                  <p>{`${HistoryItems.startDate}-${HistoryItems.endDate}`}</p>
                  <ul>
                    {HistoryItems.experiences.map((exprience, id) => {
                      return <li key={id}>{exprience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
