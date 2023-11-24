import React from "react";
import styles from "./Adduser.module.css";

const Adduser = () => {
  return (
    <div className={styles.adduserContainer}>
      <div className={styles.container}>
        <div className={styles.inputWrapper}>
          {/* icon */}
          <input
            className={styles.inputBox}
            placeholder="Enter the name"
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

export default Adduser;
