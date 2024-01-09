import ProjectCardNoImage from "../ui-elements/project-card-no-iamge";
import classes from "./projects.module.css";

export default function Projects() {
  return (
    <>
      <div className={classes["page-title"]}>
        <h1>Projects</h1>
      </div>
      <div className={classes["grid-container"]}>
        <div className={classes["grid-item-title"]}>
          <div className={classes["grid-item-project-left"]}>
            <div className={classes["project-image"]}>Image</div>
            <ProjectCardNoImage />
          </div>
          <div className={classes["grid-item-project-middle"]}>
            <div className={classes["project-image-middle"]}>Image</div>
            <ProjectCardNoImage />
          </div>
          <div className={classes["grid-item-project-middle-2"]}>
            <div className={classes["project-image-middle"]}>Image</div>
            <ProjectCardNoImage />
          </div>

          <div className={classes["grid-item-project-right"]}>
            <div className={classes["project-image-right"]}>Image</div>
            <ProjectCardNoImage />
          </div>
        </div>
      </div>
    </>
  );
}
