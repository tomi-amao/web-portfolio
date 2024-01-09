import classes from "./career.module.css";
import CareerCard from "./career-card";

export default function Career() {
  return (
    <>
      <div className={classes["page-title"]}>
        <h1>Career & Education</h1>
      </div>
      <div className={classes["grid-container"]}>
        <div className={classes["grid-container-left"]}>
          <div className={classes["vertical-line"]}>
            <div className={classes["timeline-point-1"]}>
              <div className={classes["pointdesc-education"]}>
                <p className={classes["education-x"]}> History Graduate</p>
              </div>
            </div>
            <div className={classes["timeline-point-2"]}>
              <div className={classes["pointdesc-career"]}>
                <p className={classes["career-x"]}> Technology Teacher</p>{" "}
              <div className={classes["card-1"]}> <CareerCard /> </div>
                
                
              </div>
            </div>
            <div className={classes["timeline-point-3"]}>
              <div className={classes["pointdesc-education"]}>
                <p className={classes["career-x"]}> Teaching Diploma </p>
              </div>
            </div>
            <div className={classes["timeline-point-4"]}>
              <div className={classes["pointdesc-education-2"]}>
                <p className={classes["education-x-2"]}>
                  {" "}
                  Teachfirst Charity Ambassador{" "}
                </p>
              </div>
            </div>
            <div className={classes["timeline-point-5"]}>
              <div className={classes["pointdesc-career"]}>
                <p className={classes["career-x-2"]}> Cloud Engineer</p>{" "}
              <div className={classes["card-1"]}> <CareerCard /> </div>

              </div>
            </div>
            <div className={classes["timeline-point-6"]}>
              <div className={classes["pointdesc-education-3"]}>
                <div className={classes["education-x-3"]}>
                  {" "}
                  <li> AWS Solution Architect </li>{" "}
                  <li> Azure Administrator Associate</li>
                </div>{" "}
              </div>
            </div>
            <div className={classes["timeline-point-7"]}>
              <div className={classes["pointdesc-career"]}>
                <p className={classes["career-x-2"]}> DevOps Engineer </p>{" "}
              <div className={classes["card-1"]}> <CareerCard /> </div>
              </div>
            </div>
            <div className={classes["timeline-point-8"]}> </div>

          </div>
        </div>
      </div>

      <div></div>
    </>
  );
}
