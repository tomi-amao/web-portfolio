import { motion } from "framer-motion";
import classes from "./traits.module.css";
import { useState } from "react";

const Traits = () => {
  const [showModal, setShowModal] = useState(false);

  const fitness =
    " Fitness drives my commitment to be a better version of myself everyday";
  const resilient =
    " I find I am at my best when I am facing my toughest challenges, knowing that I will persevere and overcome the many hurdles and roadblocks I will face ";
  const volunteer =
    "Giving to others serves plays a major role in my life. It forms one of my core beliefs, giving my a wider persepctive and purpose in life";
  const learner =
    " There isn't a day that goes by that I don't think about how I will improve myself. I am constantly driving forward by being a student to all forms of knowledge.";

  const [allTraits, setAllTraits] = useState({
    fitness: false,
    resilient: false,
    volunteer: false,
    learner: false,
  });
  const traitsContainerAnimations = {
    whileInView: { opacity: [0, 0.25, 0.5, 0.75, 1], y: 0 },
    initial: { opacity: 0, y: -15 },
    transition: { delay: 2, duration: 1, type: "tween" },
  };



  const traitHoverStyle = {
    backgroundColor: "#feca0f",
    // boxShadow: "5px 5px 5px #334b35"
    scale: "1.05",
  };


  //set modal content based on trait clicked


  const [modalHeader, setModalHeader] = useState(null)

  const handleModal = (trait) => {
    setShowModal(true)
    if (trait === "fitness") {
        setModalHeader("Fitness drives me to be 1% better each day")
    } else if (trait === "resilient") {
        setModalHeader("Overcoming the toughest challenges I face")
    } else if (trait === "volunteer") {
        setModalHeader("Lending a hand where it is needed the most")
    } else if (trait === "learner") {
        setModalHeader("Always being a student is a key part of who I am")

    }
  }


  return (
    <motion.div className={classes["traits"]}>
    
      {!showModal && <motion.li
        // style={traitHoverStyle}
        whileHover={traitHoverStyle}
        variants={traitsContainerAnimations}
        // initial="initial"
        whileInView="whileInView"
        viewport={{ amount: "all" }}
        // transition="transition"
        onClick={() => {handleModal("fitness")}}
      >
        <p>Fitness Advocate</p>
      </motion.li>}


      {!showModal && <motion.li
        whileHover={traitHoverStyle}
        variants={traitsContainerAnimations}
        initial="initial"
        whileInView="whileInView"
        viewport={{ amount: "all" }}
        transition="transition"
        onClick={() => {handleModal("resilient")}}

      >
        <p>Buoyant Beacon</p>
      </motion.li>}
      
      {!showModal && <motion.li
        whileHover={traitHoverStyle}
        variants={traitsContainerAnimations}
        initial="initial"
        whileInView="whileInView"
        viewport={{ amount: "all" }}
        transition="transition"
        onClick={() => {handleModal("volunteer")}}

      >
        <p>Vibrant Volunteer</p>
      </motion.li> }
      {!showModal && <motion.li
        whileHover={traitHoverStyle}
        variants={traitsContainerAnimations}
        initial="initial"
        whileInView="whileInView"
        viewport={{ amount: "all" }}
        transition="transition"
        onClick={() => {handleModal("learner")}}

      >
        <p>Avid Learner</p>
      </motion.li> }
      {showModal && (<li>
          
            <TraitModal onClose={() => setShowModal(false)}>
              <h2>{modalHeader}</h2>
              <p>You can put any content here.</p>
            </TraitModal>
          
      </li>)}
    </motion.div>
  );
};

export default Traits;

const TraitModal = ({ children, onClose }) => {

  //   const handleClose = () => onClose();

  return (
    <div className={classes["modal-wrapper"]}>
      <div
        // className="modal-content"
        onClick={() => {
          onClose();
        }}
      >
        {children}
        <button
          onClick={() => {
            onClose();
          }}
        >
          Close
        </button>
      </div>
      <div className="modal-overlay" />
    </div>
  );
};
