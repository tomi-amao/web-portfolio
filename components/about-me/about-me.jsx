import classes from "./about-me.module.css";

import headshot from "../../assets/headshot.jpg";

import Image from "next/image";

export default function AboutMe() {
  const desc =
    " Through my passion for gaming, I have learned to be resilient, adaptable, and open-minded, always seeking new ways to improve and grow. Whether it is learning a new skill, taking on a new project, or facing a difficult challenge, I approach every opportunity with an unwavering dedication to growth and improvement. Success is not just about achieving a specific goal, but about the personal growth and development that comes along the way.";
  const rightArrow = (
    <svg fill="#f25c33" viewBox="0 0 16 16" height="2em" width="2em">
      <path
        fillRule="evenodd"
        d="M14.854 4.854a.5.5 0 000-.708l-4-4a.5.5 0 00-.708.708L13.293 4H3.5A2.5 2.5 0 001 6.5v8a.5.5 0 001 0v-8A1.5 1.5 0 013.5 5h9.793l-3.147 3.146a.5.5 0 00.708.708l4-4z"
      />
    </svg>
  );
  const bottomCornerArrow = (
    <svg fill="currentColor" viewBox="0 0 16 16" height="2em" width="2em">
      <path
        fillRule="evenodd"
        d="M14.5 1.5a.5.5 0 01.5.5v4.8a2.5 2.5 0 01-2.5 2.5H2.707l3.347 3.346a.5.5 0 01-.708.708l-4.2-4.2a.5.5 0 010-.708l4-4a.5.5 0 11.708.708L2.707 8.3H12.5A1.5 1.5 0 0014 6.8V2a.5.5 0 01.5-.5z"
      />
    </svg>
  );

  return (
    <>
      <div className={classes.container}>
        <div className={classes["grid-container"]}>
          <div className={classes["grid-item"]}>About Me</div>

          <div className={classes["grid-item-image"]}>
            <div className={classes["right-arrow"]}>{rightArrow} </div>
            <div className={classes["grid-item-image-border"]}>
              <Image src={headshot} width={400} height={500} />{" "}
            </div>
          </div>
          <div className={classes["grid-item-desc"]}>
            <div>
              <p>{desc}</p>
              {/* <div className={classes["bottom-corner-arrow"]}>
                {bottomCornerArrow}
              </div> */}
            </div>
          </div>
          <div className={classes["grid-item-traits"]}>
            <ul className={classes["grid-item-traits-dot"]}>
              <li>Fitness Advocate</li>
              <li>Avid Learner</li>
              <li>Buoyant Beacon</li>
              <li>Vibrant Volunteer</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
