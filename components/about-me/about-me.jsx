import classes from "./about-me.module.css";

import headshot from "../../assets/headshot.jpg";

import Image from "next/image";

export default function AboutMe() {
  const desc =
    " Through my passion for gaming, I have learned to be resilient, adaptable, and open-minded, always seeking new ways to improve and grow. Whether it is learning a new skill, taking on a new project, or facing a difficult challenge, I approach every opportunity with an unwavering dedication to growth and improvement. Success is not just about achieving a specific goal, but about the personal growth and development that comes along the way.";
  const fitness = " Fitness drives my commitment to be a better version of myself everyday"
  const buoyant = " Fitness drives my commitment to be a better version of myself everyday"
  const volunteer = " Fitness drives my commitment to be a better version of myself everyday"
  const learner = " Fitness drives my commitment to be a better version of myself everyday"
  return (
    <>
      <h1 className={classes["page-title"]}> About Me </h1>

      <div className={classes["grid-image"]}>
        <div className={classes["container-image"]}>
          <div className={classes["container-image-border"]}>
            <Image
              src={headshot}
              width={430}
              height={500}
              alt="headshot picture"
            />
            <div className={classes["container-image-desc-border"]}>
              <h2 className={classes["container-image-desc"]}> {desc} </h2>
            </div>
          </div>
        </div>
        <div className={classes["trait-large"]}>
          <li>
            <p>fitness advocate</p>
          </li>
          <li>
            <p>buoyant beacon</p>
          </li>
          <li>
            <p>vibrant volunteer</p>
          </li>
          <li>
            
            <p>fitness advocate</p>
          </li>
          <li>
            <p> {fitness} </p>
          </li>
        </div>
      </div>
      <div className={classes["grid-desc"]}></div>

      <div className={classes["grid-traits"]}>
        <div className={classes["trait"]}>
          <li>
            
            <p>fitness advocate</p>
          </li>
          <li>
            <p>buoyant beacon</p>
          </li>
          <li>
            <p>vibrant volunteer</p>
          </li>
          <li>
            <p>fitness advocate</p>
          </li>
        </div>
        <div className={classes["container-trait-desc-border"]}>
              <h2 className={classes["container-trait-desc"]}> {fitness} </h2>
          </div>

      </div>
    </>
  );
}
