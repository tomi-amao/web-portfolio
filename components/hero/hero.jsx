import classes from "./hero.module.css";

export default function Hero(props) {


  return (
    <>
      <div className={classes["grid-container"]}>
        <div></div>        

        <div className={classes["timeline-left"]}>
          <h1 className={classes["title-1"]}>  Bridging the Gap  </h1>
          <h2 className={classes["time-point-2-info"]}>
            {" "}
            version control & collaboration tools
          </h2>
          <h2 className={classes["time-point-4-info"]}>
            {" "}
            infrastructure & configuration automation
          </h2>
          <h2 className={classes["time-point-6-info"]}>
            {" "}
            security and compliance
          </h2>
        </div>
        <div className={classes["timeline-right"]}>
          <h2 className={classes["time-point-1-info"]}>
            {" "}
            analysis & infrastructure Design
          </h2>
          <h2 className={classes["time-point-3-info"]}>
            {" "}
            continuous integration & deployment
          </h2>
          <h2 className={classes["time-point-5-info"]}>
            {" "}
            monitoring & alerting
          </h2>
          <h1 className={classes["title-2"]}>  Building the Flow  </h1>
          {/* <span className={classes.arrow}>{arrow}</span> */}

        </div>

        <div className={classes["grid-item-info"]}>
          <div className={classes["vertical-line"]}></div>

          <div className={classes["time-point-1"]}></div>
          <div className={classes["time-point-2"]}></div>
          <div className={classes["time-point-3"]}></div>
          <div className={classes["time-point-4"]}></div>
          <div className={classes["time-point-5"]}></div>
          <div className={classes["time-point-6"]}></div>

        </div>
      </div>

    </>
  );
}
