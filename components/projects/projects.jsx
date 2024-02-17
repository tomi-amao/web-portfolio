"use client";

import ProjectCardNoImage from "../ui-elements/project-card-no-iamge";
import classes from "./projects.module.css";
import { motion } from "framer-motion";

export default function Projects() {
  const viewScrollAnimations = {
    whileInView: { opacity: [0, 0.5, 1], y: 25 },
    initial: { opacity: 0, y: -15 },
    transition: { delay: 0, duration: 1, type: "tween" },
  };

  const projectsAnimationContainer = {
    whileInView: { opacity: [0, 0.25, 0.5, 0.75, 1], y: 0 },
    initial: { opacity: 0, y: 0 },
    transition: { delay: 2, duration: 1, type: "tween" },
    show: {
      rotate: 0,
      transition: {
          staggerChildren: 0.1,
          delayChildren: 0.8,
      },
  },
  };

  const projectAnimation = {initial: {opacity: 0}, show: {opacity: 1}}

  return (
    <>
      <div className={classes["page-title"]}>
        <motion.h1
          variants={viewScrollAnimations}
          initial="initial"
          whileInView="whileInView"
          viewport={{ amount: "all", once: true }}
          transition="transition"
        >
          Projects
        </motion.h1>
      </div>
      <div className={classes["grid-container"]}>
        <motion.div
          className={classes["grid-item-title"]}
          variants={projectsAnimationContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ amount: "some", margin: "-100px" }}
          transition="transition"
          animate="show"
        >
          <motion.div className={classes["grid-item-project-left"]}
          variants={projectAnimation}
          >
            <div className={classes["project-image"]}>Image</div>
            <ProjectCardNoImage />
          </motion.div>
          <motion.div className={classes["grid-item-project-middle"]}
          variants={projectAnimation}
          >
            <div className={classes["project-image-middle"]}>Image</div>
            <ProjectCardNoImage />
          </motion.div>
          <motion.div className={classes["grid-item-project-middle-2"]}
          variants={projectAnimation}
          >
            <div className={classes["project-image-middle"]}>Image</div>
            <ProjectCardNoImage />
          </motion.div>

          <motion.div className={classes["grid-item-project-right"]}
          variants={projectAnimation}
          >
            <div className={classes["project-image-right"]}>Image</div>
            <ProjectCardNoImage />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
