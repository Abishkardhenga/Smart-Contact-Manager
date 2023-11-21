import React from "react";
import styles from "./Login.module.css";
import Navbar from "../../Components/Navbar/Navbar";
import Loginbox from "../../Components/LoginBox/Loginbox";

const Login = () => {
  return (
    <div className={styles.loginContainer}>
      <Navbar />
      <Loginbox />
    </div>
  );
};

export default Login;
