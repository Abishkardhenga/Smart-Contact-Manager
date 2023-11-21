import React from "react";
import styles from "./Register.module.css";
import Navbar from "../../Components/Navbar/Navbar";
import Registerbox from "../../Components/RegisterBox/Registerbox";

const Register = () => {
  return (
    <div className={styles.registerContainer}>
      <Navbar />
      <Registerbox />
    </div>
  );
};

export default Register;
