import React from "react";
import style from "./Button.module.css";

const Btn = ({ icon = <></>, text = "", ...props }) => {
  return (
    <button {...props} className={style.buttonStyle}>
      {icon}
      {text}
    </button>
  );
};

export default Btn;