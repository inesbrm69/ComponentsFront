import React, { useContext, useState } from "react";
import { Btn } from "../../atoms";
import { FaMoon, FaSun } from "react-icons/fa";
import { NightModeContext } from "../../../contexts";

const NightModeSwitch = ({ handler, isNightMode, ...props }) => {
  const nightModeContext = useContext(NightModeContext);
  const [nightMode, setNightMode] = useState(nightModeContext.nightMode);

  return (
    <Btn
      onClick={nightModeContext.changeNightMode}
      icon={!nightModeContext.nightMode ? <FaMoon /> : <FaSun />}
    ></Btn>
  );
};
export default NightModeSwitch;