"use client";

import classes from "./about-me.module.css";

import headshot from "../../public/headshot.jpg";

import Image from "next/image";
import { useState } from "react";

export default function AboutMe() {
  // variables holding the content for about-me traits
  const desc =
    " Through my passion for gaming, I have learned to be resilient, adaptable, and open-minded, always seeking new ways to improve and grow. Whether it is learning a new skill, taking on a new project, or facing a difficult challenge, I approach every opportunity with an unwavering dedication to growth and improvement. Success is not just about achieving a specific goal, but about the personal growth and development that comes along the way.";
  const fitness =
    " Fitness drives my commitment to be a better version of myself everyday";
  const resilient =
    " I find I am at my best when I am facing my toughest challenges, knowing that I will persevere and overcome the many hurdles and roadblocks I will face ";
  const volunteer =
    "Giving to others serves plays a major role in my life. It forms one of my core beliefs, giving my a wider persepctive and purpose in life";
  const learner =
    " There isn't a day that goes by that I don't think about how I will improve myself. I am constantly driving forward by being a student to all forms of knowledge.";

  // using boolean state to determine if the trait is displayed or not
  // all traits are set to not be displayed on first render
  const [allTraits, setAllTraits] = useState({
    fitness: false,
    resilient: false,
    volunteer: false,
    learner: false,
  });

  // all dots against each trait are set to be displayed on first render
  const [dotShow, setDotShow] = useState({
    fitness_dot: true,
    resilient_dot: true,
    volunteer_dot: true,
    learner_dot: true,
  });

  // styling for trait description cards
  // ternary is used based on the boolean of the respective trait state value
  const fitnessVisibility = {
    display: allTraits.fitness ? "block" : "none",
  };
  const resilientVisibility = {
    display: allTraits.resilient ? "block" : "none",
  };
  const volunteerVisibility = {
    display: allTraits.volunteer ? "block" : "none",
  };
  const learnerVisibility = {
    display: allTraits.learner ? "block" : "none",
  };

  // styling for dots against traits
  // ternary is used based on the boolean of the dot state value

  const fitnessDot = {
    display: dotShow.fitness_dot ? "block" : "none",
  };
  const resilientDot = {
    display: dotShow.resilient_dot ? "block" : "none",
  };

  const volunteerDot = {
    display: dotShow.volunteer_dot ? "block" : "none",
  };
  const learnerDot = {
    display: dotShow.learner_dot ? "block" : "none",
  };

  // handler function toggling the dot for each trait, triggered on mousehover and mouseout
  // if the associated trait for a dot has been clicked, it will not disappear when mouse is moved away
  const handleSelectionDotHover = (status, trait) => {
    if (trait === "fitness_dot") {
      setDotShow((prevValue) => ({
        ...prevValue,
        [trait]: status,
      }));
      if (!status) {
        if (allTraits.fitness) {
          setDotShow((prevValue) => ({
            ...prevValue,
            [trait]: true,
          }));
        }
      }
    } else if (trait === "resilient_dot") {
      setDotShow((prevValue) => ({
        ...prevValue,
        [trait]: status,
      }));
      if (!status) {
        if (allTraits.resilient) {
          setDotShow((prevValue) => ({
            ...prevValue,
            [trait]: true,
          }));
        }
      }
    } else if (trait === "volunteer_dot") {
      setDotShow((prevValue) => ({
        ...prevValue,
        [trait]: status,
      }));
      if (!status) {
        if (allTraits.volunteer) {
          setDotShow((prevValue) => ({
            ...prevValue,
            [trait]: true,
          }));
        }
      }
    } else if (trait === "learner_dot") {
      setDotShow((prevValue) => ({
        ...prevValue,
        [trait]: status,
      }));
      if (!status) {
        if (allTraits.learner) {
          setDotShow((prevValue) => ({
            ...prevValue,
            [trait]: true,
          }));
        }
      }
    }
  };

  // makes all traits falsey when a trait is clicked
  const handleShowAllTraits = (trait) => {
    setAllTraits((prevValue) => ({
      fitness: false,
      resilient: false,
      volunteer: false,
      learner: false,
    }));

    // makes all dot state values falsey execpt for the clicked trait
    if (trait === "fitness") {
      setDotShow((prevValue) => ({
        resilient_dot: false,
        volunteer_dot: false,
        learner_dot: false,
      }));
    }
    if (trait === "resilient") {
      setDotShow((prevValue) => ({
        fitness_dot: false,
        volunteer_dot: false,
        learner_dot: false,
      }));
    }
    if (trait === "volunteer") {
      setDotShow((prevValue) => ({
        fitness_dot: false,
        resilient_dot: false,
        learner_dot: false,
      }));
    }
    if (trait === "learner") {
      setDotShow((prevValue) => ({
        fitness_dot: false,
        resilient_dot: false,
        volunteer_dot: false,
      }));
    }

    // condtion that shows the assocaited trait card when the trait is clicked by making the parsed in trait truthy

    setAllTraits((prevValue) => ({
      ...prevValue,
      [trait]: !prevValue[trait],
    }));
  };
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
          <li
            onClick={() => {
              handleShowAllTraits("fitness");
            }}
            onMouseOver={() => {
              handleSelectionDotHover(true, "fitness_dot");
            }}
            onMouseOut={() => {
              handleSelectionDotHover(false, "fitness_dot");
            }}
          >
            <span style={fitnessDot}></span>
            <p>fitness advocate</p>
          </li>
          <li
            onClick={() => {
              handleShowAllTraits("resilient");
            }}
            onMouseOver={() => {
              handleSelectionDotHover(true, "resilient_dot");
            }}
            onMouseOut={() => {
              handleSelectionDotHover(false, "resilient_dot");
            }}
          >
            <span style={resilientDot}></span>
            <p>buoyant beacon</p>
          </li>
          <li
            onClick={() => {
              handleShowAllTraits("volunteer");
            }}
            onMouseOver={() => {
              handleSelectionDotHover(true, "volunteer_dot");
            }}
            onMouseOut={() => {
              handleSelectionDotHover(false, "volunteer_dot");
            }}
          >
            <span style={volunteerDot}></span>

            <p>vibrant volunteer</p>
          </li>
          <li
            onClick={() => {
              handleShowAllTraits("learner");
            }}
            onMouseOver={() => {
              handleSelectionDotHover(true, "learner_dot");
            }}
            onMouseOut={() => {
              handleSelectionDotHover(false, "learner_dot");
            }}
          >
            <span style={learnerDot}></span>

            <p>avid learner</p>
          </li>
          <li style={fitnessVisibility}>
            <p> {fitness} </p>
          </li>
          <li style={resilientVisibility}>
            <p> {resilient} </p>
          </li>
          <li style={volunteerVisibility}>
            <p> {volunteer} </p>
          </li>
          <li style={learnerVisibility}>
            <p> {learner} </p>
          </li>
        </div>
      </div>
      <div className={classes["grid-desc"]}></div>
    </>
  );
}
