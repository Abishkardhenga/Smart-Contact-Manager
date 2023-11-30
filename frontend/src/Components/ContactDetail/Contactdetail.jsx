import React, { useContext } from "react";
import styles from "./Contactdetail.module.css";
import { MdDeleteForever } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import { UserInfo } from "../../utilis/UseContext/Usecontext";
import axios from "axios";
import { toast } from "react-toastify";

const Contactdetail = ({ item }) => {
  console.log("this is item", item);
  let { state, dispatch } = useContext(UserInfo);
  console.log("this is state", state);
  let id = " ";
  let handleEdit = () => {};
  let deleteApi = " http://localhost:8000/deleteuser";
  let handleDelete = async (id) => {
    try {
      let data = await axios.delete(`${deleteApi}/${id}`);
      console.log("this is", data);
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
  return (
    <div className={styles.contactdetailContainer}>
      <p className={styles.id}>8888</p>
      <p className={styles.name}>{item?.username}</p>
      <p className={styles.email}>{item?.email}</p>
      <p className={styles.phone}>{item?.phone}</p>
      <div className={styles.iconsWrapper}>
        <FaUserEdit
          onClick={() => {
            handleEdit(_id);
          }}
          className={styles.editIcon}
        />
        <MdDeleteForever
          onClick={() => {
            handleDelete(item._id);
          }}
          className={styles.deleteIcon}
        />
      </div>
    </div>
  );
};

export default Contactdetail;
