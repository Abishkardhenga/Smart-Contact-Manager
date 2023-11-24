import React from "react";
import styles from "./AddContact.module.css";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Adduser from "../../Components/Adduser/Adduser";
// import Nouser from "../../Components/Nouser/Nouser";

const AddContact = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.bodyContainer}>
        <div className={styles.boxContent}>
          {/* <Nouser /> */}
          <Adduser />
        </div>
      </div>
    </div>
  );
};

export default AddContact;
