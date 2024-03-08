import React from "react";
import styled from "styled-components";
import logo from "../../../img/ElementCraft__logo.png";

const StyledLogo = styled.img`
  height: 70px;
  width: 70px;
`;

const Logo = () => {
return <StyledLogo src={logo}></StyledLogo>;
};

export default Logo;