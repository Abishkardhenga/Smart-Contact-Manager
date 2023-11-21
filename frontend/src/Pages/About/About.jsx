import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.aboutusContainer}>
      <Navbar />
      <div className={styles.content}>
        <h1>About Us</h1>
        <h3>We are the best</h3>
        <h1>Best For What ?</h1>
        <h3>To Securely store Your Contacts </h3>
      </div>
    </div>
  );
};

export default About;
