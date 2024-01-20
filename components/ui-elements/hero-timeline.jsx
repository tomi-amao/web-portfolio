
import { motion } from "framer-motion";

export default function HeroTimeline() {
  const stepsVariant = {
    hidden: { y: 30, transition: { when: "afterChildren" } },
    visible: {
      y: 0,
      transition: { when: "beforeChildren", staggerChildren: 0.3 },
    },
  };

  return (
    <>
      <motion.svg
      style={{position: "absolute", marginTop: "25em", width: "90%", display: "grid"}}
        width="1382"
        height="135"
        viewBox="0 0 1382 135"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >

          <motion.line
            id="mid-line"
            x1="2"
            y1="52.5"
            x2="2000"
            y2="52.5001"
            stroke="#334B35"
            strokeWidth="3"
            initial={{ opacity: 1, x: -3000 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 7 }}
          />
      </motion.svg>
    </>
  );
}
