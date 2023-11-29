import React from "react";
import styles from "./Profile.module.css";
import { useLocation } from "react-router-dom";

const Profile = () => {
  let { state } = useLocation();
  console.log("this is state ", state);
  return (
    <div className={styles.profileContainer}>
      <div className={styles.imgWrapper}>
        <img
          src="https://images.unsplash.com/photo-1552058544-f2b08422138a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVyc29ufGVufDB8fDB8fHww"
          className={styles.profileImg}
          alt="profile Image"
        />
      </div>
      {/* userid */}
      <div className={styles.detailWrapper}>
        <p className={styles.model}>id:</p>
        <p className={styles.detail}>1022</p>
      </div>
      {/* name  */}
      <div className={styles.detailWrapper}>
        <p className={styles.model}>Contact Name:</p>
        <p className={styles.detail}>Aabiskar Dhenga</p>
      </div>
      {/* email Wrapper */}
      <div className={styles.detailWrapper}>
        <p className={styles.model}>Email:</p>
        <p className={styles.detail}>Aabiskardhenga29@gmail.com</p>
      </div>

      {/* phone  */}
      <div className={styles.detailWrapper}>
        <p className={styles.model}>Phone:</p>
        <p className={styles.detail}>98292993</p>
      </div>
      {/* work */}
      <div className={styles.detailWrapper}>
        <p className={styles.model}>Work:</p>
        <p className={styles.detail}>Doctor</p>
      </div>
      {/* Description  */}
      <div className={styles.detailWrapper}>
        <p className={styles.model}>Description:</p>
        <p className={styles.detail}> operation</p>
      </div>
    </div>
  );
};

export default Profile;
