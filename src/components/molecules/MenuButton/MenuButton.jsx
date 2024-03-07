import React, { useState } from "react";
import { Btn } from "../../atoms";

const MenuButton = ({ handler, data, icon = <></>, ...props }) => {
  const [colorButton, setColorButton] = useState("");
  const handlePageChange = () => {
    handler(data);
  };
  return (
    <Btn
      onClick={handlePageChange}
      color={colorButton}
      text={props.children}
      icon={icon}
    ></Btn>
  );
};

export default MenuButton;