import classes from "./career-card.module.css";

export default function CareerCard() {
  return (
    <>
      <div className={classes["career-container"]}>
        <div className={classes["career-title"]}>
          {" "}
          <h1>
            Company{" "}
            <p>
              IntoUniversity is a charity dedicated to helping disadvantaged
              young people enter university
            </p>
          </h1>
        </div>
        <div className={classes["career-desc"]}>
          <h1>
            Work Done
            <ul>
              <li>
                mentored and aided 14-16 year olds over a year in areas of self
                development and vocation.
              </li>
              <li>
                planned engaging activities and workshops that introduced young
                people to new job opportunities
              </li>
              <li>
                helped reduce the number of young people on the street causing
                disturbances in the local area
              </li>
            </ul>
          </h1>
        </div>
        <div className={classes["career-skills"]}>
          <p>Skill Developed</p>
          <ul>
            <li> Leadership </li>
            <li> Communication </li>
          </ul>
        </div>
      </div>
    </>
  );
}
