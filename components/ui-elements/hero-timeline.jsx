import { motion } from "framer-motion";

import classes from "./hero-timeline.module.css";

const timelineAnimationContainer = {
  initial: { opacity: 0, y: 0 },
  transition: { delay: 1, duration: 1, type: "tween" },
  show: {
    rotate: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 1.32,
    },
  },
};

const pointAnimation = {
  initial: { opacity: 0 },
  show: { opacity: 1 },
};

export default function HeroTimeline({ children }) {
  return (
    <>
      <motion.div
        className={classes["container"]}
        variants={timelineAnimationContainer}
        initial="initial"
        animate="show"
      >
        <TimelinePoints />
        <motion.svg
          style={{
            position: "absolute",
            height: "90%",
          }}
          className={classes["hero-timeline"]}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="26px"
        >
          <motion.line
            id="mid-line"
            x1="25.5"
            y1="2"
            x2="25.5001"
            y2="2000"
            stroke="#F5EFE1"
            strokeWidth="3"
            initial={{ opacity: 1, y: -3000 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 6.5 }}
          />
        </motion.svg>
      </motion.div>
    </>
  );
}

const TimelinePoints = () => {
  const variants = {
    visible: { opacity: 1, y: 1 },
    hidden: { opacity: 0, y: -20 },
    transition: { duration: 1 },
  };

  return (
    <>
      <motion.div
        className={classes["timeline-point1"]}
        variants={pointAnimation}
      >
        <h2 className={classes["point1-info"]}>
          Infrastructure Design & Analysis
        </h2>
      </motion.div>

      <motion.div
        className={classes["timeline-point2"]}
        variants={pointAnimation}
      >
        <h2 className={classes["point2-info"]}>
          version control & collaboration
        </h2>
      </motion.div>

      <motion.div
        className={classes["timeline-point3"]}
        variants={pointAnimation}
      >
        <h2 className={classes["point3-info"]}>
          Continuous Integration & Deployment
        </h2>
      </motion.div>
      <motion.div
        className={classes["timeline-point4"]}
        variants={pointAnimation}
      >
        <h2 className={classes["point4-info"]}>
          Infrastructure & Configuration
        </h2>
      </motion.div>
      <motion.div
        className={classes["timeline-point5"]}
        variants={pointAnimation}
      >
        <h2 className={classes["point5-info"]}>Monitoring & Alerting</h2>
      </motion.div>
      <motion.div
        className={classes["timeline-point6"]}
        variants={pointAnimation}
      >
        <h2 className={classes["point6-info"]}>Security and Compliance</h2>
      </motion.div>
    </>
  );
};
