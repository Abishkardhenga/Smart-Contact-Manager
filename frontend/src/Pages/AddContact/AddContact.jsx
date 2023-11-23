import React from "react";
import styles from "./AddContact.module.css";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Nouser from "../../Components/Nouser/Nouser";

const AddContact = () => {
  return (
    <div className={styles.Container}>
      <Navbar />
      <div className={styles.bodyContainer}>
        <Sidebar />
        <div className={styles.boxContent}>
          <Nouser />
        </div>
      </div>
    </div>
  );
};

export default AddContact;
