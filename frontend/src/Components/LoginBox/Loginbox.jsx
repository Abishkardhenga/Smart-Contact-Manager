import React, { useState } from "react";
import styles from "./Loginbox.module.css";

const Loginbox = () => {
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();
  return (
    <div className={styles.registerContainer}>
      <div className={styles.container}>
        <div className={styles.inputWrapper}>
          <h3 className={styles.subHeading}>Email </h3>
          <input
            className={styles.inputBox}
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter the Email"
          />
        </div>
        <div className={styles.inputWrapper}>
          <h3 className={styles.subHeading}>Password </h3>
          <input
            className={styles.inputBox}
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Enter the Password"
          />
        </div>
        <div className={styles.btnWrapper}>
          <button className={styles.LoginBtn}>Login</button>
          <button className={styles.registerBtn}>Register here</button>
        </div>
        <div className={styles.forgetBtnWrapper}>
          <button className={styles.forgetBtn}>Forget Password</button>
        </div>
      </div>
    </div>
  );
};

export default Loginbox;
