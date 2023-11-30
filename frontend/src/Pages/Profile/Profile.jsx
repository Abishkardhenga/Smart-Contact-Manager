import React, { useContext } from "react";
import styles from "./Profile.module.css";
import { UserInfo } from "../../utilis/UseContext/Usecontext";

const Profile = () => {
  let { state, dispatch } = useContext(UserInfo);
  console.log("this is state ,", state.ProfileData);
  return (
    <div className={styles.profileContainer}>
      <div className={styles.imgWrapper}>
        <img
          src={state?.ProfileData?.image}
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
        <p className={styles.detail}>{state?.ProfileData?.username}</p>
      </div>
      {/* email Wrapper */}
      <div className={styles.detailWrapper}>
        <p className={styles.model}>Email:</p>
        <p className={styles.detail}>{state?.ProfileData?.email}</p>
      </div>

      {/* phone  */}
      <div className={styles.detailWrapper}>
        <p className={styles.model}>Phone:</p>
        <p className={styles.detail}>{state?.ProfileData?.phone}</p>
      </div>
      {/* work */}
      <div className={styles.detailWrapper}>
        <p className={styles.model}>Work:</p>
        <p className={styles.detail}>{state?.ProfileData?.profession}</p>
      </div>
      {/* Description  */}
      <div className={styles.detailWrapper}>
        <p className={styles.model}>Description:</p>
        <p className={styles.detail}> {state?.ProfileData?.description}</p>
      </div>
    </div>
  );
};

export default Profile;
