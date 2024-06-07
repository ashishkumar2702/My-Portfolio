// Project.js
import React from "react";
import Project1 from "../Data1/Project.json";
import { getImageUrl } from "../../../util";
import ProjectCard from "./ProjectCard";
import styles from "./Project.module.css";

const Project = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {Project1.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};

export default Project;
