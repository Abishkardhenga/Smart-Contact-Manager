import React from "react";
import styles from "./Nouser.module.css";
import { CgProfile } from "react-icons/cg";
// import { Link } from "react-router-dom";

const Nouser = () => {
  return (
    <div className={styles.container}>
      <CgProfile className={styles.profileIcon} />
      <h1 className={styles.txt}> Start Adding your contacts on cloud...</h1>
      <button className={styles.addContactBtn}>Add Contact</button>
    </div>
  );
};

export default Nouser;
