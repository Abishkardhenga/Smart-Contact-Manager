import React from "react";
import styles from "./Sidebar.module.css";
import { AiFillHome } from "react-icons/ai";
import { IoIosPersonAdd, IoMdSettings } from "react-icons/io";
import { FaAddressBook } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className={styles.sidebarContainer}>
      <Link to={"/"} className={styles.iconWrapper}>
        <AiFillHome className={styles.icons} />

        <p className={styles.sidebarPages}>Home</p>
      </Link>
      <Link className={styles.iconWrapper}>
        <IoIosPersonAdd className={styles.icons} />

        <p className={styles.sidebarPages}>Add Contact</p>
      </Link>
      <Link className={styles.iconWrapper}>
        <FaAddressBook className={styles.icons} />

        <p className={styles.sidebarPages}>View Contact</p>
      </Link>
      <Link className={styles.iconWrapper}>
        <CgProfile className={styles.icons} />

        <p className={styles.sidebarPages}>Your Profile</p>
      </Link>
      <Link className={styles.iconWrapper}>
        <IoMdSettings className={styles.icons} />

        <p className={styles.sidebarPages}>Setting</p>
      </Link>
      <Link className={styles.iconWrapper}>
        <RiLogoutCircleRLine className={styles.icons} />

        <p className={styles.sidebarPages}>Logout</p>
      </Link>
    </div>
  );
};

export default Sidebar;
