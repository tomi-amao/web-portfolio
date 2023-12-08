import DevOpsTimeline from "./devops-timeline";
import classes from "./greeting.module.css";

export default function Greeting() {
  const arrow = (
    <svg fill="#f25c33" viewBox="0 0 16 16" height="5em" width="5em">
      <path
        fillRule="evenodd"
        d="M8 1a.5.5 0 01.5.5v11.793l3.146-3.147a.5.5 0 01.708.708l-4 4a.5.5 0 01-.708 0l-4-4a.5.5 0 01.708-.708L7.5 13.293V1.5A.5.5 0 018 1z"
      />
    </svg>
  );
  return (
    <>
      <main className={classes.main}>
        <h1 className={classes.title}> Hi, I'm Tomi Amao</h1>
        <h1 className={classes.job}> a devops engineer</h1>
        <h1 className={classes.timeline}>
          <DevOpsTimeline />
        </h1>
        <h1 className={classes.bridge}> Bridging the Gap</h1>
        <h1 className={classes.build}> Building the Flow</h1>
        <span className={classes.arrow}>{arrow}</span>
      </main>
    </>
  );
}
