"use client";

import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import classes from "./hero.module.css";
import { useEffect, useRef, useState } from "react";
import HeroTimeline from "../ui-elements/hero-timeline";
import calcScreenSize from "@/utilities/calc-screensize";
export default function Hero(props) {
  const [isWideScreen, SetIsWideScreen] = useState(false);
  calcScreenSize(SetIsWideScreen)

  const [timelinePoint, setTimelinePoint] = useState({
    point1: false,
    point2: false,
    point3: false,
    point4: false,
    point5: false,
    point6: false,
    phrase1: false,
    phrase2: false
  });
  const ref = useRef(null);
  const dotScrollRef = useRef(null);
  // use scrollYProgress with the context of the target ref to vertically scale timeline in correspeondance to the scroll bar
  const { scrollYProgress } = useScroll({ target: ref });
  const { scrollY } = useScroll();

  // retreive the position of the scroll bar and determine which timeline point to show
  useMotionValueEvent(scrollY, "change", (latest) => {
    // first timelinepoint
    if (latest >= 166) {
      setTimelinePoint((preValue) => ({
        ...preValue,
        point1: true,
      }));
    } else if (latest < 173) {
      setTimelinePoint((preValue) => ({
        ...preValue,
        point1: false,
      }));
    }
    // second timeline point
    if (latest >= 180) {
      setTimelinePoint((preValue) => ({
        ...preValue,
        point2: true,
      }));
    } else if (latest < 188) {
      setTimelinePoint((preValue) => ({
        ...preValue,
        point2: false,
      }));
    }
    // third timeline point
    if (latest >= 194) {
      setTimelinePoint((preValue) => ({
        ...preValue,
        point3: true,
        phrase1: true
      }));
    } else if (latest < 202) {
      setTimelinePoint((preValue) => ({
        ...preValue,
        point3: false,
        phrase1: false
      }));
    }
    // fourth timeline point
    if (latest >= 206) {
      setTimelinePoint((preValue) => ({
        ...preValue,
        point4: true,
      }));
    } else if (latest < 215) {
      setTimelinePoint((preValue) => ({
        ...preValue,
        point4: false,
      }));
    }
    // fifth timeline point
    if (latest >= 218) {
      setTimelinePoint((preValue) => ({
        ...preValue,
        point5: true,
        phrase2: true
      }));
    } else if (latest < 226) {
      setTimelinePoint((preValue) => ({
        ...preValue,
        point5: false,
        phrase2: false
      }));
    }
    // sixth timeline point
    if (latest >= 228) {
      setTimelinePoint((preValue) => ({
        ...preValue,
        point6: true,
      }));
    } else if (latest < 236) {
      setTimelinePoint((preValue) => ({
        ...preValue,
        point6: false,
      }));
    }

    console.log("Page scroll: ", latest);
  });

  const variants = {
    visible: { opacity: 1, y: 1 },
    hidden: { opacity: 0, y: -20 },
    transition: { duration: 1 },
  };

  return (
    <>
              
              <motion.h1
              className={classes["title-name"]}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 60 }}
              transition={{ duration: 2 }}
            >
              
             Hi, I'm Tomi Amao
            </motion.h1>
            <motion.h1
              className={classes["title-job"]}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: -30 }}
              transition={{ duration: 2 }}
            >
              
              A DevOps Engineer
            </motion.h1>
      <div className={classes["grid-container"]} ref={ref}>
        {isWideScreen && <HeroTimeline></HeroTimeline>}
        <div className={classes["grid-item-info"]} >

          
          

          
          {timelinePoint.phrase1 && (
            <motion.h1 className={classes["title-phrase"]}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}>
              
              Bridging the Gap
            </motion.h1>
          )}
          {timelinePoint.phrase2 && (
            <motion.h1 className={classes["title-phrase2"]}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 10 }}
            transition={{ duration: 2 }}>
              
              Builing the Flow
            </motion.h1>
          )}

          <motion.div
            style={{
              transformOrigin: "top",
              scaleY: scrollYProgress,
              overflowY: "scroll",
            }}
            className={classes["vertical-line"]}
            transition={variants.transition}
          ></motion.div>

          {timelinePoint.point1 && (
            <motion.div
              className={classes["time-point-1"]}
              variants={variants}
              initial="hidden"
              animate="visible"
            >
              <h2 className={classes["point1-info"]}>
                
                analysis & infrastructure Design
              </h2>
            </motion.div>
          )}

          {timelinePoint.point2 && (
            <motion.div
              className={classes["time-point-2"]}
              variants={variants}
              initial="hidden"
              animate="visible"
            >
              <h2 className={classes["point2-info"]}>
                
                version control & collaboration
              </h2>
            </motion.div>
          )}

          {timelinePoint.point3 && (
            <motion.div
              className={classes["time-point-3"]}
              variants={variants}
              initial="hidden"
              animate="visible"
            >
              <h2 className={classes["point1-info"]}>
                
                continuous integration & deployment
              </h2>
            </motion.div>
          )}
          {timelinePoint.point4 && (
            <motion.div
              className={classes["time-point-4"]}
              variants={variants}
              initial="hidden"
              animate="visible"
            >
              
              <h2 className={classes["point2-info"]}>
                
                infrastructure configuration & automation
              </h2>
            </motion.div>
          )}

          {timelinePoint.point5 && (
            <motion.div
              className={classes["time-point-5"]}
              variants={variants}
              initial="hidden"
              animate="visible"
            >
              
              <h2 className={classes["point5-info"]}>
                
                monitoring & alerting
              </h2>
            </motion.div>
          )}
          {timelinePoint.point6 && (
            <motion.div
              className={classes["time-point-6"]}
              variants={variants}
              initial="hidden"
              animate="visible"
            >
              
              <h2
                className={classes["point6-info"]}
                variants={variants}
                initial="hidden"
                animate="visible"
              >
                
                security & compliance
              </h2>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
}
