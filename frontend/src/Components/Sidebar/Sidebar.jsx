import React, { useContext, useEffect } from "react";
import styles from "./Sidebar.module.css";
import { AiFillHome } from "react-icons/ai";
import { IoIosPersonAdd, IoMdSettings } from "react-icons/io";
import { FaAddressBook } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { UserInfo } from "../../utilis/UseContext/Usecontext";
import { toast } from "react-toastify";

const Sidebar = () => {
  let { state, dispatch } = useContext(UserInfo);

  let handleLogout = () => {
    dispatch({ type: "setUserdata", payload: null });
    toast.success("Succesfully Logout", {
      position: "top-right",
      autoClose: 1000,
    });
  };

  useEffect(() => {
    dispatch({ type: "setLogoutFn", payload: handleLogout });
  }, [state.userdata]);

  return (
    <div className={styles.sidebarContainer}>
      <Link to={"/"} className={styles.iconWrapper}>
        <AiFillHome className={styles.icons} />

        <p className={styles.sidebarPages}>Home</p>
      </Link>
      <Link className={styles.iconWrapper} to={"addcontact"}>
        <IoIosPersonAdd className={styles.icons} />

        <p className={styles.sidebarPages}>Add Contact</p>
      </Link>
      <Link className={styles.iconWrapper} to={"viewcontact"}>
        <FaAddressBook className={styles.icons} />

        <p className={styles.sidebarPages}>View Contact</p>
      </Link>
      {/* <Link className={styles.iconWrapper} to={"profile"}>
        <CgProfile className={styles.icons} />

        <p className={styles.sidebarPages}>Your Profile</p>
      </Link> */}
      <Link className={styles.iconWrapper} to={"setting"}>
        <IoMdSettings className={styles.icons} />

        <p className={styles.sidebarPages}>Setting</p>
      </Link>
      <div
        onClick={() => {
          handleLogout();
        }}
        className={styles.iconWrapper}
      >
        <RiLogoutCircleRLine className={styles.icons} />

        <p className={styles.sidebarPages}>Logout</p>
      </div>
    </div>
  );
};

export default Sidebar;
