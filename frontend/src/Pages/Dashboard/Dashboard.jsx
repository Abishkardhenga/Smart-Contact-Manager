import React from "react";
import styles from "../AddContact/AddContact.module.css";
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";

const DashBoard = () => {
  return (
    <div className={styles.Container}>
      <Navbar />
      <div className={styles.bodyContainer}>
        <Sidebar />
        <div className={styles.boxContent}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
