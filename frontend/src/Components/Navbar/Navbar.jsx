import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <Link className={styles.link} to="/">
        <h1 className={styles.navTitle}>Smart Contact Manager</h1>
      </Link>
      <div className={styles.navbarHeading}>
        <Link to="/" className={styles.subheading}>
          Home
        </Link>
        <Link to="/about" className={styles.subheading}>
          About
        </Link>
        <Link to="/login" className={styles.subheading}>
          Login
        </Link>
        <Link to="/register" className={styles.subheading}>
          Signup
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
