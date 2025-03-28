import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleLinkClick = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.history.pushState(null, "", `#${targetId}`);
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setIsOpen(false); // Close menu after a link is clicked
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".navbar")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <a href="/" onClick={() => window.location.reload()}>
          <img src={logo} alt="logo" />
          <span className="navbar-title">My Jewelry Retouch</span>
        </a>
      </div>

      {/* Links */}
      <div className={`navbar-links-wrapper ${isOpen ? "open" : ""}`}>
        <ul className="navbar-links">
          <li>
            <a href="#home" onClick={handleLinkClick}>
              Home
            </a>
          </li>
          <li>
            <a href="#services" onClick={handleLinkClick}>
              Services
            </a>
          </li>
          <li>
            <a href="#portfolio" onClick={handleLinkClick}>
              Portfolio
            </a>
          </li>
        </ul>
      </div>

      {/* Free Trial Button */}
      <div className="navbar-free-trial">
        <a href="#trial" className="cta-button" onClick={handleLinkClick}>
          Free Trial →
        </a>
      </div>

      {/* Hamburger Menu */}
      <div
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label="Toggle navigation menu"
      >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </nav>
  );
};

export default Navbar;
