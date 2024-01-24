// Navbar.js
import React, { useRef } from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./nav.module.css";
import banner from "./images/NITC.jpeg";

function Navbar() {
  const [isHome, setIsHome] = useState(true);
  const navRef = useRef();

  const showNavBar = () => {
    const navContainer = navRef.current;
    navContainer.classList.toggle(styles["responsive_nav"]);
    const rallyForStartupsLink = navContainer.querySelector('a[href="/#"]');
    if (rallyForStartupsLink) {
      rallyForStartupsLink.classList.toggle("visible");
    }
  };

  return (
    <div>
      <div className="navbar-container">
        <header className={styles["navbar"]}>
          {isHome ? (
            <Link
              to="rallyForStartupsSection"
              className={styles["home-link"]}
              duration={500}
              onClick={() => {
                setIsHome(true);
              }}
            >
              Rally for Startups
            </Link>
          ) : (
            <NavLink
              to="/"
              className={styles["home-link"]}
              duration={500}
              onClick={() => {
                setIsHome(true);
              }}
            >
              Rally for Startups
            </NavLink>
          )}

          <nav ref={navRef}>
            {isHome ? (
              <Link to="homeSection" duration={500}>
                Home
              </Link>
            ) : (
              <NavLink to="/Home" duration={500}>
                Home
              </NavLink>
            )}

            <NavLink
              to="/About"
              duration={500}
              onClick={() => {
                setIsHome(false);
              }}
            >
              About
            </NavLink>
            {isHome ? (
              <Link to="gallerySection" duration={500}>
                Gallery
              </Link>
            ) : (
              <NavLink to="/Gallery" duration={500} onClick={() => {
                setIsHome(false)
              }}>
                Gallery
              </NavLink>
            )}
            <button
              className={`${styles["nav-btn"]} ${styles["nav-close-btn"]}`}
              onClick={showNavBar}
            >
              <FaTimes />
            </button>
          </nav>
          <button className={styles["nav-btn"]} onClick={showNavBar}>
            <FaBars />
          </button>
        </header>
      </div>
    </div>
  );
}

export default Navbar;
