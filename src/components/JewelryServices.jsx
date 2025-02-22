import React from "react";
import "../styles/JewelryServices.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Import for scroll-triggered animation
import earrings from "../assets/S-1.png";
import pendant from "../assets/S-2.png";
import rings from "../assets/S-4.png";
import bracelets from "../assets/S-5.png";
import necklaces from "../assets/S-6.png";
import watches from "../assets/S-7.png";

const JewelryServices = () => {
  const { ref: paragraphRef, inView: paragraphInView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Trigger animation when 10% of the element is in the viewport
  });

  const services = [
    { name: "Earrings", image: earrings },
    { name: "Pendant", image: pendant },
    { name: "Rings", image: rings },
    { name: "Bracelets", image: bracelets },
    { name: "Necklaces", image: necklaces },
    { name: "Watches", image: watches },
  ];

  return (
    <section className="jewelry-services" id="services">
      {/* Heading with animation */}
      <motion.h2
        className="heading-line"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        — Jewelry Retouching Services —
      </motion.h2>

      {/* Paragraph with scroll-triggered animation */}
      <motion.p
        ref={paragraphRef} // Attach ref to trigger animation
        initial={{ opacity: 0 }}
        animate={{ opacity: paragraphInView ? 1 : 0 }} // Fade in when in view
        transition={{ duration: 1, delay: 0.3 }}
      >
        Making Your Jewelry Photos Look Amazing and Detailed
      </motion.p>

      <div className="service-list">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)" }}
          >
            <img src={service.image} alt={service.name} />
            <h3>{service.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default JewelryServices;
