"use client";

import classes from "./career.module.css";
import CareerCard from "./career-card";
import { useState } from "react";

export default function Career() {
  //state to hold the boolean value of each career timeline point
  // determines whether to show career card
  const [showcard, setShowCard] = useState({
    point1: false,
    point2: false,
    point3: false,
  });

  // handler function that toggles the boolean value of each showcard state

  const handleShowCard = (point) => {
    if (point === "point1") {
      setShowCard((preValue) => ({
        ...preValue,
        [point]: true,
      }));
      // condition checks if the value is true, if so toggles the card falsey to make ot disappear
      if (showcard.point1) {
        setShowCard((preValue) => ({
          ...preValue,
          [point]: false,
        }));
      }
    }
    if (point === "point2") {
      setShowCard((preValue) => ({
        ...preValue,
        [point]: true,
      }));

      if (showcard.point2) {
        setShowCard((preValue) => ({
          ...preValue,
          [point]: false,
        }));
      }
    }

    if (point === "point3") {
      setShowCard((preValue) => ({
        ...preValue,
        [point]: true,
      }));

      if (showcard.point3) {
        setShowCard((preValue) => ({
          ...preValue,
          [point]: false,
        }));
      }
    }
  };

  // styles to show the respecive career card, using ternary that determining truthy and falsey values
  const showCardStyle1 = {
    display: showcard.point1 ? "block" : "none",
  };
  const showCardStyle2 = {
    display: showcard.point2 ? "block" : "none",
  };
  const showCardStyle3 = {
    display: showcard.point3 ? "block" : "none",
  };

  return (
    <>
      <div className={classes["page-title"]}>
        <h1>Career & Education</h1>
      </div>
      <div className={classes["grid-container"]}>
        <div className={classes["grid-container-left"]}>
          <div className={classes["vertical-line"]}>
            <div className={classes["timeline-point-1"]}>
              <div className={classes["pointdesc-education"]}>
                <p className={classes["education-x"]}> History Graduate</p>
              </div>
            </div>
            <div
              className={classes["timeline-point-2"]}
              onClick={() => {
                handleShowCard("point1");
              }}
            >
              <div className={classes["pointdesc-career"]}>
                <p className={classes["career-x"]}> Technology Teacher</p>
                <div className={classes["card-1"]} style={showCardStyle1}>
                  <CareerCard />
                </div>
              </div>
            </div>
            <div className={classes["timeline-point-3"]}>
              <div className={classes["pointdesc-education"]}>
                <p className={classes["career-x"]}> Teaching Diploma </p>
              </div>
            </div>
            <div className={classes["timeline-point-4"]}>
              <div className={classes["pointdesc-education-2"]}>
                <p className={classes["education-x-2"]}>
                  Teachfirst Charity Ambassador
                </p>
              </div>
            </div>
            <div
              className={classes["timeline-point-5"]}
              onClick={() => {
                handleShowCard("point2");
              }}
            >
              <div className={classes["pointdesc-career"]}>
                <p className={classes["career-x-2"]}> Cloud Engineer</p>
                <div className={classes["card-1"]} style={showCardStyle2}>
                  <CareerCard />
                </div>
              </div>
            </div>
            <div className={classes["timeline-point-6"]}>
              <div className={classes["pointdesc-education-3"]}>
                <div className={classes["education-x-3"]}>
                  <li> AWS Solution Architect </li>
                  <li> Azure Administrator Associate</li>
                </div>
              </div>
            </div>
            <div
              className={classes["timeline-point-7"]}
              onClick={() => {
                handleShowCard("point3");
              }}
            >
              <div className={classes["pointdesc-career"]}>
                <p className={classes["career-x-2"]}> DevOps Engineer </p>
                <div className={classes["card-1"]} style={showCardStyle3}>
                  <CareerCard />
                </div>
              </div>
            </div>
            <div className={classes["timeline-point-8"]}> </div>
          </div>
        </div>
      </div>

      <div></div>
    </>
  );
}
