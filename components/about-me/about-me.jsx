"use client";

import classes from "./about-me.module.css";

import headshot from "../../public/headshot.jpg";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Traits from "../ui-elements/traits";
import AboutMeDesktop, { CareerTimeline } from "./about-me-desktop";
import calcScreenSize from "@/utilities/calc-screensize";


//render aboutme layout based on mobile or desktop 
export default function AboutMe() {
  const [isWideScreen, SetIsWideScreen] = useState(false);
  calcScreenSize(SetIsWideScreen);

  return (
    <>
    {!isWideScreen && <AboutMeMobile/>}
    {isWideScreen && <AboutMeDesktop/>}

    </>
  )

}


export function AboutMeMobile() {
  // variables holding the content for about-me traits

  const viewScrollAnimations = {
    whileInView: { opacity: [0, 0.5, 1], y: 25 },
    initial: { opacity: 0, y: -15 },
    transition: { delay: 0, duration: 1, type: "tween" },
  };

  const traitsContainerAnimations = {
    whileInView: { opacity: [0, 0.25, 0.5, 0.75, 1], y: 0 },
    initial: { opacity: 0, y: -15 },
    transition: { delay: 2, duration: 1, type: "tween" },
  };

  return (
    <>
      <motion.h1
        className={classes["page-title"]}
        variants={viewScrollAnimations}
        initial="initial"
        whileInView="whileInView"
        viewport={{ amount: "all", once: true }}
        transition="transition"
      >
        About Me
      </motion.h1>

      <div className={classes["container-image"]}>
        <motion.div
          className={classes["container-image-border"]}
          variants={viewScrollAnimations}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 10 }}
          viewport={{ amount: "all", margin: "300px", once: true }}
          transition={{ delay: 0, duration: 1.5, type: "tween" }}
        >
          <Image
            src={headshot}
            width={430}
            height={500}
            alt="headshot picture"
          />
        </motion.div>
        <Traits />
        <div className={classes["vertical-line"]}>
          <CareerTimeline />
        </div>
      </div>
    </>
  );
}
