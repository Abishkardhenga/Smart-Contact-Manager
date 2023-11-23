import React from "react";
import styles from "./Sidebar.module.css";
import { AiFillHome } from "react-icons/ai";
import { IoIosPersonAdd, IoMdSettings } from "react-icons/io";
import { FaAddressBook } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { RiLogoutCircleRLine } from "react-icons/ri";

const Sidebar = () => {
  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.iconWrapper}>
        <AiFillHome className={styles.icons} />

        <p className={styles.sidebarPages}>Home</p>
      </div>
      <div className={styles.iconWrapper}>
        <IoIosPersonAdd className={styles.icons} />

        <p className={styles.sidebarPages}>Add Contact</p>
      </div>
      <div className={styles.iconWrapper}>
        <FaAddressBook className={styles.icons} />

        <p className={styles.sidebarPages}>View Contact</p>
      </div>
      <div className={styles.iconWrapper}>
        <CgProfile className={styles.icons} />

        <p className={styles.sidebarPages}>Your Profile</p>
      </div>
      <div className={styles.iconWrapper}>
        <IoMdSettings className={styles.icons} />

        <p className={styles.sidebarPages}>Setting</p>
      </div>
      <div className={styles.iconWrapper}>
        <RiLogoutCircleRLine className={styles.icons} />

        <p className={styles.sidebarPages}>Logout</p>
      </div>
    </div>
  );
};

export default Sidebar;
