import React, { useState } from "react";
import { Btn } from "../../atoms";
import { FaMoon, FaSun } from "react-icons/fa";

const NightModeSwitch = ({ handler, isNightMode, ...props }) => {
  const [nightMode, setNightMode] = useState(isNightMode);
  const handleNightMode = () => {
    handler();
    setNightMode(!nightMode);
  };

  return (
    <Btn
      onClick={handleNightMode}
      icon={!nightMode ? <FaMoon /> : <FaSun />}
    ></Btn>
  );
};

export default NightModeSwitch;