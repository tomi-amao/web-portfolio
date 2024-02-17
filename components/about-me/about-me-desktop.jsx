"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import classes from "./about-me-desktop.module.css";
import CareerCard from "../career/career-card";
import headshot from "../../public/headshot.jpg";

import Image from "next/image";
import Traits from "../ui-elements/traits";

const AboutMeDesktop = () => {
  return (
    <>
      <HorizontalScrollCarousel />
    </>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const y = useTransform(scrollYProgress, [1, 0], ["-70%", "0%"]); // negative % to allow items to be hidden within the container, determines how far an item goes out of view

  return (
    <section ref={targetRef} className={classes["section-bg"]}>
      <div
        className={"sticky top-0 flex h-screen items-center overflow-hidden"}
      >
        <div className={classes["left-box"]}>
          <h1
            style={{
              fontSize: "4rem",
              position: "absolute",
              marginTop: "-100px",
            }}
          >
            About Me
          </h1>
    <motion.div className={classes["vertical-line"]} style={{ y }}>

          <CareerTimeline />
    </motion.div>

        </div>
        <div className={classes["right-box"]}>
          <div>
            <Headshot />
          </div>
          <div>
            <Traits />
          </div>
        </div>
      </div>
    </section>
  );
};

const Point2 = () => {
  return (
    <motion.div
      className={classes["timeline-point-2"]}
      whileInView={{ opacity: [0, 0.5, 1], y: 5 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      initial={{ y: -10 }}
    >
      <div className={classes["pointdesc-career"]}>
        <p className={classes["career-x"]}> Technology Teacher</p>

        <div className={classes["card-1"]}>
          <CareerCard />
        </div>
      </div>
    </motion.div>
  );
};

const Point3 = () => {
  return (
    <div className={classes["timeline-point-3"]}>
      <div className={classes["pointdesc-education"]}>
        <p className={classes["career-x"]}> Teaching Diploma </p>
      </div>
    </div>
  );
};

const Point4 = () => {
  return (
    <div className={classes["timeline-point-4"]}>
      <div className={classes["pointdesc-education-2"]}>
        <p className={classes["education-x-2"]}>
          Teachfirst Charity Ambassador
        </p>
      </div>
    </div>
  );
};
const Point5 = () => {
  return (
    <motion.div
      className={classes["timeline-point-5"]}
      whileInView={{ opacity: [0, 0.5, 1], x: 0 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      initial={{ x: -10 }}
    >
      <div className={classes["pointdesc-career"]}>
        <p className={classes["career-x-2"]}> Cloud Engineer</p>

        <div className={classes["card-1"]}>
          <CareerCard />
        </div>
      </div>
    </motion.div>
  );
};
const Point6 = () => {
  return (
    <div className={classes["timeline-point-6"]}>
      <div className={classes["pointdesc-education-3"]}>
        <div className={classes["education-x-3"]}>
          <li> AWS Solution Architect </li>
          <li> Azure Administrator Associate</li>
        </div>
      </div>
    </div>
  );
};
const Point7 = () => {
  return (
    <motion.div
      className={classes["timeline-point-7"]}
      whileInView={{ opacity: [0, 0.5, 1], x: 0 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      initial={{ x: -10 }}
    >
      <div className={classes["pointdesc-career"]}>
        <p className={classes["career-x-2"]}> DevOps Engineer </p>

        <motion.div
          className={classes["card-1"]}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 10 }}
          transition={{ delay: 0, duration: 1.2, type: "tween" }}
        >
          <CareerCard />
        </motion.div>
      </div>
    </motion.div>
  );
};

export const Headshot = () => {
  return (
    <div className={classes["container-image"]}>
      <motion.div
        className={classes["container-image-border"]}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 10 }}
        viewport={{ amount: "all", margin: "300px", once: true }}
        transition={{ delay: 0, duration: 1.5, type: "tween" }}
      >
        <Image
          src={headshot}
          // width={400}
          // height={530}
          alt="headshot profile picture"
        />
      </motion.div>
    </div>
  );
};

export const CareerTimeline = () => {
  return (
    <>
      <motion.div className={classes["timeline-point-1"]}>
        <div className={classes["pointdesc-education"]}>
          <p className={classes["education-x"]}> History Graduate</p>
        </div>
      </motion.div>
      <Point2 />
      <Point3 />
      <Point4 />
      <Point5 />
      <Point6 />
      <Point7 />
      </>
  );
};
export default AboutMeDesktop;
