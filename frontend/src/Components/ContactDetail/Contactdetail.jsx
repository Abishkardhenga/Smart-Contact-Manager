import React, { useContext } from "react";
import styles from "./Contactdetail.module.css";
import { MdDeleteForever } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import { UserInfo } from "../../utilis/UseContext/Usecontext";
import axios from "axios";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";

const Contactdetail = ({ item }) => {
  let id = "";
  let { state, dispatch } = useContext(UserInfo);
  let editApi = `http://localhost:8000/edituser/${id}`;
  let deleteApi = " http://localhost:8000/deleteuser";
  let handleEdit = (item) => {
    console.log("this is handleEdit", item);
    dispatch({ type: "setEditingContact", payload: item });

    console.log("this is state", state);
    state.
  };

  let handleDelete = async (id) => {
    try {
      let data = await axios.delete(`${deleteApi}/${id}`);
      toast.success("Successfully deleted ", {
        position: "top-right",
        autoClose: 1000,
      });
      state.GetContact();
    } catch (err) {
      toast.error(`{err.response.data.message}`, {
        position: "top-right",
        autoClose: 1000,
      });
    }
  };
  let dataTransfer = (item) => {
    dispatch({ type: "setProfileData", payload: item });
  };
  return (
    <div className={styles.contactdetailContainer}>
      <Link to={"/dashboard/profile"} className={styles.id}>
        <CgProfile
          onClick={() => {
            dataTransfer(item);
          }}
          className={styles.profile}
        />
      </Link>
      <p className={styles.name}>{item?.username}</p>
      <p className={styles.email}>{item?.email}</p>
      <p className={styles.phone}>{item?.phone}</p>
      <div className={styles.iconsWrapper}>
        <FaUserEdit
          onClick={() => {
            handleEdit(item);
          }}
          className={styles.editIcon}
        />
        <MdDeleteForever
          onClick={() => {
            handleDelete(item?._id);
          }}
          className={styles.deleteIcon}
        />
      </div>
    </div>
  );
};

export default Contactdetail;
