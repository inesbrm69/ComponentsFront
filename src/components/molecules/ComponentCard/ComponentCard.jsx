import React, { useState } from "react";
import { Card } from "../../atoms";

const ComponentCard = ({ handler, data, icon  = <></>,text = "label", ...props }) => {
  const [colorInput, setColorInput] = useState(false);
  const handleChange = () => {
    handler(data);
  };
  return (
    <>
        <Card

        color={colorInput}
        icon={icon}
        {...props}
        ></Card> 
    </>
    
  );
};

export default ComponentCard;