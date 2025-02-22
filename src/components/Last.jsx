import React from "react";
import "../styles/Last.css";
import { motion } from "framer-motion"; // Framer Motion for animations
import { useInView } from "react-intersection-observer"; // Scroll-triggered animations

const Last = () => {
  // Scroll-triggered animations for each section
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: linksRef, inView: linksInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: creditsRef, inView: creditsInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <footer className="last-footer">
      <div className="footer-containers">
        {/* Footer Text */}
        <motion.div
          className="footer-text"
          ref={textRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: textInView ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <div className="">
          <p>
            <a href="https://snbwebservices.com/photo-editing/">
              Myjewelryretouch.com
            </a>{" "}
            is a Photo Retouching Vertical of SNB Web Services Pvt. Ltd.@ All rights reserved.
          </p>
          </div>
        </motion.div>

        {/* Footer Links & Credits Container */}
        <div className="last-two-things">
          {/* Footer Links */}
          <motion.div
            className="footer-links"
            ref={linksRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: linksInView ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <a href="https://snbwebservices.com/privacy-policy/" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>
            <a href="https://snbwebservices.com/ccpa-privacy-policy/" target="_blank" rel="noopener noreferrer">
              CCPA Privacy Policy
            </a>
            <a href="https://snbwebservices.com/gdpr-privacy-policy/" target="_blank" rel="noopener noreferrer">
              GDPR Privacy Policy
            </a>
          </motion.div>

          {/* Footer Credits */}
          <motion.div
            className="footer-credits"
            ref={creditsRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: creditsInView ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <p>
              Designed and Developed by{" "}
              <a href="https://www.houseofmarktech.com/home" target="_blank" rel="noopener noreferrer">
                House Of Marktech
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Last;
