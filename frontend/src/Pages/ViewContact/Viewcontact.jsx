import React, { useEffect, useState } from "react";
import styles from "./Viewcontact.module.css";
import Contactdetail from "../../Components/ContactDetail/Contactdetail";
import axios from "axios";
import { useContext } from "react";
import { UserInfo } from "../../utilis/UseContext/Usecontext";

const Viewcontact = () => {
  let { state, dispatch } = useContext(UserInfo);
  let api = "http://localhost:8000/userdetail";
  let [UserCollection, setUserCollection] = useState([]);

  useEffect(() => {
    dispatch({ type: "setGetContact", payload: GetAllContact });
    GetAllContact();
  }, []);
  let GetAllContact = async () => {
    try {
      let { data, status } = await axios.get(api);
      setUserCollection(data.data);
      console.log("this is data", data);
      console.log("this is status", status);
    } catch (err) {
      console.log("this is err", err);
    }
  };
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
          {UserCollection.map((item) => {
            return <Contactdetail item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Viewcontact;
