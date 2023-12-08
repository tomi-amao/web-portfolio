import classes from "./career.module.css";
import timeline from "@/assets/career-timeline.svg";
import Image from "next/image";
import CareerTimeline from "./career-timeline";
import CareerCard from "./career-card";

export default function Career() {
  return (
    <>
      <div className={classes["grid-container"]}>
        <div className={classes.title}>
          <h1>Career</h1>
        </div>
        <div className={classes["grid-item"]}>
          <CareerCard />
        </div>
        <div className={classes["grid-item"]}>3</div>
        <div className={classes["grid-item"]}>
          <CareerCard />
        </div>
        <div className={classes["grid-timeline"]}>
          <Image src={timeline} />
        </div>
        <div className={classes["grid-item"]}>
          <CareerCard />
        </div>
        <div className={classes["grid-item"]}></div>
        <div className={classes["grid-item"]}>
          <CareerCard />
        </div>
        <div>
          <h1 className={classes.title2}> Education </h1>
        </div>
      </div>
    </>
  );
}
