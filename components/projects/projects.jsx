import ProjectCard from "./project-card";
import classes from "./projects.module.css";

export default function Projects() {
  return (
    <div className={classes["grid-container"]}>
      <div className={classes["grid-item-title"]}>Projects</div>
      <div className={classes["grid-item"]}>
        <ProjectCard />
      </div>
      <div className={classes["grid-item"]}>
        <ProjectCard />
      </div>
      <div className={classes["grid-item"]}>
        <ProjectCard />
      </div>
      <div className={classes["grid-item"]}>
        <ProjectCard />
      </div>
      <div className={classes["grid-item"]}>
        <ProjectCard />
      </div>
    </div>
  );
}
