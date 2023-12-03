import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import styles from "./Adduser.module.css";
import { IoIosPersonAdd } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { RiProfileFill } from "react-icons/ri";
import { MdDescription } from "react-icons/md";
import { MdImage } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { UserInfo } from "../../utilis/UseContext/Usecontext";
import { toast } from "react-toastify";

const Adduser = () => {
  // const { state: editingItem } = useLocation();
  // console.log("this is editingItem", editingItem);
  let updateApi = "http://localhost:8000/edituser";
  let api = "http://localhost:8000/createuser";
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState();
  const [profession, setProfession] = useState("");
  const [description, setDescription] = useState("");
  const [owner, setOwner] = useState();
  let { state, dispatch } = useContext(UserInfo);
  useEffect(() => {
    setOwner(state?.userdata?._id);
  }, []);

  useEffect(() => {
    if (state.editingContact) {
      updateValue();
    }
  }, [state?.editingContact]);
  console.log("thisis state", state);

  let updateValue = () => {
    setUsername(state?.editingContact?.username);
    setEmail(state?.editingContact?.email);
    setImage(state?.editingContact?.image);
    setPhone(state?.editingContact?.phone);
    setProfession(state?.editingContact?.profession);
    setDescription(state?.editingContact?.description);
  };

  let updateNote = async () => {
    try {
      const data = await axios.patch(
        `${updateApi}/${state?.editingContact?._id}`,
        {
          username,
          email,
          image,
          phone,
          profession,
          description,
          owner,
        }
      );
      // console.log("this is data", data);
      // console.log("this is editing Contact id", state?.editingContact?._id);
    } catch (err) {
      console.log(err);
    }
  };

  let handleAdd = async () => {
    dispatch({ type: "setEditMode", payload: false });
    if (state?.EditMode) {
      // alert("on editmode hai ta");
      updateNote();
      setUsername("");
      setEmail("");
      setImage("");
      setPhone("");
      setProfession("");
      setDescription("");
      dispatch({ type: "setEditingContact", payload: null });

      toast.success("Succesfully updated the details", {
        position: "top-right",
        autoClose: 1000,
      });
      return;
    }
    try {
      const response = await axios.post(api, {
        username,
        email,
        image,
        phone,
        profession,
        description,
        owner,
      });
      setUsername("");
      setEmail("");
      setImage("");
      setPhone("");
      setProfession("");
      setDescription("");
      toast.success("Succesfully stored the deatails", {
        position: "top-right",
        autoClose: 1000,
      });
      // alert("successfuly created");
      // console.log("this is response", response);
    } catch (err) {
      toast.error(`{err.response.data.message}`, {
        position: "top-right",
        autoClose: 1000,
      });
      console.log("err", err);
    }
  };

  return (
    <div className={styles.adduserContainer}>
      <div className={styles.container}>
        <h1>Add Contact</h1>
        {/* username wrapper */}
        <div className={styles.inputWrapper}>
          <div className={styles.iconWrapper}>
            <IoIosPersonAdd className={styles.icons} />
          </div>
          <input
            className={styles.inputBox}
            placeholder="Enter the name"
            type="text"
            value={username}
            onChange={(e) => {
              console.log("Input value:", e.target.value);
              setUsername(e.target.value);
            }}
          />
        </div>
        {/* emailWrapper */}
        <div className={styles.inputWrapper}>
          <div className={styles.iconWrapper}>
            <IoMail className={styles.icons} />
          </div>
          <input
            className={styles.inputBox}
            placeholder="Enter the email"
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        {/* imageWrapper */}
        <div className={styles.inputWrapper}>
          <div className={styles.iconWrapper}>
            <MdImage className={styles.icons} />
          </div>
          <input
            className={styles.inputBox}
            placeholder="Drag or Enter the url"
            type="text"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
        </div>
        {/* phone Wrapper */}
        <div className={styles.inputWrapper}>
          <div className={styles.iconWrapper}>
            <LuPhone className={styles.icons} />
          </div>
          <input
            className={styles.inputBox}
            placeholder="Enter the phone number"
            type="number"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>
        {/* profeesion wrapper */}
        <div className={styles.inputWrapper}>
          <div className={styles.iconWrapper}>
            <RiProfileFill className={styles.icons} />
          </div>
          <input
            className={styles.inputBox}
            placeholder="Enter the Profession"
            type="text"
            value={profession}
            onChange={(e) => {
              setProfession(e.target.value);
            }}
          />
        </div>
        {/* description wrapper */}
        <div className={styles.inputWrapper}>
          <div className={styles.iconWrapper}>
            <MdDescription className={styles.icons} />
          </div>
          <input
            className={styles.inputBox}
            placeholder="Enter the Description"
            type="text"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div className={styles.buttonWrapper}>
          <button onClick={handleAdd} className={styles.AddBtn}>
            {state?.EditMode ? "Update" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Adduser;
