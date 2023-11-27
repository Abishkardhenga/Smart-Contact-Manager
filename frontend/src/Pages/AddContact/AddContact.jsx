import React from "react";
import styles from "./AddContact.module.css";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Adduser from "../../Components/Adduser/Adduser";

const AddContact = () => {
  return (
    <div className={styles.bodyContainer}>
      <div className={styles.boxContent}>
        <Adduser />
      </div>
    </div>
  );
};

export default AddContact;
