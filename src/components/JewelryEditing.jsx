import React from "react";
import "../styles/JewelryEditing.css";
import traditionalJewelry from "../assets/traditional-jewelry.png";
import diamondRing from "../assets/diamond-ring.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const JewelryService = () => {
  // Track if the section is in view for triggering the animation
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="jewelry-service" ref={ref}>
      {/* Left Image */}
      <motion.div
        className="service-image"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
        transition={{ duration: 1, ease: "easeOut" }}
        whileHover={{ scale: 1.05, boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)" }}
      >
        <img
          src={traditionalJewelry}
          alt="Traditional Jewelry"
          className="jewelry-image"
          loading="lazy"
        />
      </motion.div>

      {/* Center Content */}
      <motion.div
        className="service-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        <h2>Jewelry Photo Editing Service in India</h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          Elevate your jewelry visuals with expert editing that highlights the
          brilliance of your precious pieces. We specialize in background
          removal, color correction, shine enhancement, and custom retouching to
          ensure every detail stands out.
        </motion.p>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="service-image"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }}
        transition={{ duration: 1, ease: "easeOut" }}
        whileHover={{ scale: 1.05, boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)" }}
      >
        <img
          src={diamondRing}
          alt="Diamond Ring"
          className="jewelry-image"
          loading="lazy"
        />
      </motion.div>
    </section>
  );
};

export default JewelryService;
