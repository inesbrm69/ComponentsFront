import React from "react";
import { MenuButton } from "../../molecules";

const Menu = ({ handler, data, ...props }) => {
  return (
    <div>
      {data.map((x, i) => {
        let { icon, text, slug } = x;
        return (
          <MenuButton key={i} handler={handler} icon={icon} data={slug}>
            {text}
          </MenuButton>
        );
      })}
      {props.children}
    </div>
  );
};

export default Menu;