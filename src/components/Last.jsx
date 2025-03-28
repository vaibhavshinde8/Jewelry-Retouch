import React from "react";
import "../styles/Last.css";
import { motion } from "framer-motion"; // Framer Motion for animations
import { useInView } from "react-intersection-observer"; // Scroll-triggered animations

const Last = () => {
  // Scroll-triggered animations for each section
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: linksRef, inView: linksInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: creditsRef, inView: creditsInView } = useInView({ triggerOnce: true, threshold: 0.1 });

 
};

export default Last;
