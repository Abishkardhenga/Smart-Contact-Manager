import React from "react";
import styles from "./Contactdetail.module.css";
import { MdDeleteForever } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";

const Contactdetail = () => {
  return (
    <div className={styles.contactdetailContainer}>
      <p className={styles.id}>Cd1200</p>
      <p className={styles.name}>Akshya thapa</p>
      <p className={styles.email}>Thapaakshya@gmail.com</p>
      <p className={styles.phone}>9848484484</p>
      <div className={styles.iconsWrapper}>
        <FaUserEdit className={styles.editIcon} />
        <MdDeleteForever className={styles.deleteIcon} />
      </div>
    </div>
  );
};

export default Contactdetail;
