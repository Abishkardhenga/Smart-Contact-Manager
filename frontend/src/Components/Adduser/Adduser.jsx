import React, { useEffect, useState } from "react";
import styles from "./Adduser.module.css";
import { IoIosPersonAdd } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { RiProfileFill } from "react-icons/ri";
import { MdDescription } from "react-icons/md";
import { MdImage } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Adduser = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [image, setImage] = useState();
  const [phone, setPhone] = useState();
  const [profession, setProfession] = useState();
  const [description, setDescription] = useState();
  const [owner, setOwner] = useState();
  let { state } = useNavigate();

  useEffect(() => {
    console.log("this is state ", state);
  }, []);

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
          />
        </div>
        <div className={styles.buttonWrapper}>
          <button className={styles.AddBtn}> Add </button>
        </div>
      </div>
    </div>
  );
};

export default Adduser;
