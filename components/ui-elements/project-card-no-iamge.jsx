"use client";

import { useState } from "react";
import classes from "./project-card-no-image.module.css";
import { motion } from "framer-motion";


export default function ProjectCardNoImage() {
  const arrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
  const [projectHover, setProjectHover] = useState(false);

  const projectHoverStyle = {
    backgroundColor: projectHover ? "#feca0f" : "transparent",
    // boxShadow: projectHover ? "5px 5px 5px #334b35" : "none",
  };

  const handleSetProjectHover = (status) => {
    setProjectHover(status);
  };

  return (
    <motion.div
      className={classes["project-container"]}
      style={projectHoverStyle}
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.3 },
      }}
      onMouseOver={() => {
        handleSetProjectHover(true);
      }}
      onMouseOut={() => {
        handleSetProjectHover(false);
      }}
    >
      <div className={classes["project-desc"]}>
        <h2>
          Serverless Resume
          <p>
            My resume hosted on AWS using serverless tools such as DynamoDB,
            Lambda and API Gateway
          </p>
          <ul>
            <li> Python </li>
            <li> AWS </li>
            <li> JavaScript </li>
            <li> Terrafrom </li>
          </ul>
        </h2>
        <ul> {arrow}</ul>
      </div>
    </motion.div>
  );
}
