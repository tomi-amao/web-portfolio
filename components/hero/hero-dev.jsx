"use client";

import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import classes from "./hero-dev.module.css";
import { useEffect, useRef, useState } from "react";
import HeroTimeline from "../ui-elements/hero-timeline";
import calcScreenSize from "@/utilities/calc-screensize";

export default function HeroDev(props) {
  const [isWideScreen, SetIsWideScreen] = useState(false);
  calcScreenSize(SetIsWideScreen);

  const ref = useRef(null);
  const dotScrollRef = useRef(null);
  // use scrollYProgress with the context of the target ref to vertically scale timeline in correspeondance to the scroll bar
  const { scrollYProgress } = useScroll({ target: ref });
  const { scrollY } = useScroll();

  // retreive the position of the scroll bar and determine which timeline point to show
  

  const titleAnimationContainer = {
    initial: { opacity: 0, y: 0 },
    transition: { delay: 1, duration: 1, type: "tween" },
    show: {
      rotate: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.34,
        delayChildren: 1.3,
      },
    },
  };

  const titleAnimation = {
    initial: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
      <motion.div
        className={classes["grid-container"]}
        variants={titleAnimationContainer}
        initial="initial"
        animate="show"
      >
        <HeroTimeline></HeroTimeline>

        <motion.h1 className={classes["title-name"]} variants={titleAnimation}>
          Hi I'm Tomi Amao
        </motion.h1>
        <motion.h1 className={classes["phrase-1"]} variants={titleAnimation}>
          Bridging the Gap,
        </motion.h1>
        <motion.h1 className={classes["phrase-2"]} variants={titleAnimation}>
          Building the Flow
        </motion.h1>
      </motion.div>
    </>
  );
}
