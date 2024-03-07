import React, { useState } from "react";
import { InputText } from "../../atoms";

const InputForm = ({ handler, data, icon  = <></>,text = "label", ...props }) => {
  const [colorInput, setColorInput] = useState(false);
  const handleChange = () => {
    handler(data);
  };
  return (
    <>
        <label>
            {text}
        </label>
        <InputText

        color={colorInput}
        icon={icon}
        {...props}
        ></InputText> 
    </>
    
  );
};

export default InputForm;