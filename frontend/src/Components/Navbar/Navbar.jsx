import React, { useContext } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { UserInfo } from "../../utilis/UseContext/Usecontext";

const Navbar = () => {
  let { state } = useContext(UserInfo);

  return (
    <div className={styles.navbarContainer}>
      <Link className={styles.link} to="/">
        <h1 className={styles.navTitle}>Smart Contact Manager</h1>
      </Link>
      <div className={styles.navbarHeading}>
        <Link to="/" className={styles.subheading}>
          Home
        </Link>

        {state.userdata ? (
          <p className={styles.subheading}>{state.userdata.username} </p>
        ) : (
          <Link to="/login" className={styles.subheading}>
            Login
          </Link>
        )}
        {state.userdata ? (
          <p className={styles.subheading}>Logout</p>
        ) : (
          <Link to="/register" className={styles.subheading}>
            Signup
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
