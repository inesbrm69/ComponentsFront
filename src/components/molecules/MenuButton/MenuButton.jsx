import React, { useState } from "react";
import { Btn } from "../../atoms";

const MenuButton = ({ handler, slug, icon = <></>, ...props }) => {
  const [colorButton, setColorButton] = useState("");
  const handlePageChange = () => {
    handler(slug);
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