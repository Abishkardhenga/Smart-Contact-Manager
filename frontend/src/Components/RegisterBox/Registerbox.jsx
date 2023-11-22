import React, { useState } from "react";
import styles from "./Registerbox.module.css";
import axios from "axios";

const Registerbox = () => {
  let [username, setUsername] = useState();
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();
  let api = "http://localhost:8000/register";

  let RegisterFetch = async () => {
    try {
      await axios.post(api, { username, email, password });
      setUsername("");
      setEmail("");
      setPassword("");
      alert("user created successfully");
    } catch (err) {
      console.log("this is error", err);
    }
  };
  return (
    <div className={styles.registerContainer}>
      <div className={styles.container}>
        <div className={styles.inputWrapper}>
          <h3 className={styles.subHeading}>Username </h3>
          <input
            className={styles.inputBox}
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="Enter the Username"
          />
        </div>
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
          <button onClick={RegisterFetch} className={styles.registerBtn}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registerbox;
