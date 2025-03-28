import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/Hero.css";

import Header1 from "../assets/Header-1.png";
import Header2 from "../assets/Header-2.png";
import Header3 from "../assets/Header-3.png";

const Header = () => {
  const images = [Header1, Header2, Header3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <header className="header" id="home">
      {/* Content Section */}
      <motion.div
        className="header-content"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="heading"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, staggerChildren: 0.3 },
            },
          }}
        >
          <motion.h1 variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
            Jewelry Photo Retouching Services
          </motion.h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Are you looking to elevate your jewelry photography to its fullest potential? Our expert retouching services are the perfect solution. We specialize in enhancing the details of your jewelry photos.
        </motion.p>
      </motion.div>

      {/* Slider Section */}
      <motion.div
        className="header-slider"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="header-image">
          <motion.img
            key={currentImageIndex}
            src={images[currentImageIndex]}
            alt={`Slide ${currentImageIndex + 1}`}
            className="slider-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
          />
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
