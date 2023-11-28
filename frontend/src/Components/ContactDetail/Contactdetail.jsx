import React from "react";
import styles from "./Contactdetail.module.css";
import { MdDeleteForever } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";

const Contactdetail = () => {
  let id = " ";
  let handleEdit = () => {};
  let deleteApi = ` http://localhost:8000/deleteuser/${id}`;
  let handleDelete = async (id) => {
    try {
      let data = await axios.delete(id);
      console.log("this is", data);
    } catch (err) {
      console.log("this is an error", err);
    }
  };
  return (
    <div className={styles.contactdetailContainer}>
      <p className={styles.id}>Cd1200</p>
      <p className={styles.name}>Akshya thapa</p>
      <p className={styles.email}>Thapaakshya@gmail.com</p>
      <p className={styles.phone}>9848484484</p>
      <div className={styles.iconsWrapper}>
        <FaUserEdit
          onClick={() => {
            handlEdit(_id);
          }}
          className={styles.editIcon}
        />
        <MdDeleteForever
          onClick={() => {
            handleDelete(_id);
          }}
          className={styles.deleteIcon}
        />
      </div>
    </div>
  );
};

export default Contactdetail;
