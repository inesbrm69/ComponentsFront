import React from "react";
import style from "./Card.module.css";

const Card = (props) => {
return <div {...props} className={style.styleCard}>{props.children}</div>;
};

export default Card;