import React from "react";
import styles from "./Viewcontact.module.css";
import Contactdetail from "../../Components/ContactDetail/Contactdetail";

const Viewcontact = () => {
  return (
    <div className={styles.mainContainer}>
      <h1>My Contacts</h1>
      <div className={styles.bodyWrapper}>
        <input
          className={styles.inputBox}
          placeholder="Search Your Contact "
          type="text"
        />
        <div className={styles.labels}>
          <p className={styles.labelsInfo}>#ID</p>
          <p className={styles.labelsInfo}>Name</p>
          <p className={styles.labelsInfo}>Email</p>
          <p className={styles.labelsInfo}>Phone</p>
          <p className={styles.labelsInfo}>Action</p>
        </div>
        <div className={styles.contactDetailWrapper}>
          <Contactdetail />
          <Contactdetail />
        </div>
      </div>
    </div>
  );
};

export default Viewcontact;
