import React from "react";
import classNames from "classnames/bind";
import styles from "../scss/Footer.module.scss";
const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <>
      <div className="h-8 w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 mt-5">
        <center><p className="text-2xl text-white font-extrabold">Team3</p></center>
      </div> 
    </>
  );
};

export default Footer;
