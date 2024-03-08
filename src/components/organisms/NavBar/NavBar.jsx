import React from "react";
import styled from "styled-components";
import { Btn, Logo , Heading, Section } from "../../atoms";

import { FaRegCircleUser } from "react-icons/fa6";

const StyleNavBar = styled.div`
    height: fit-content;
    width: 100%;
    background : ${(props) =>
    props.background ? props.background : props.theme.tertiary};
    color: ${(props) => (props.color ? props.color : props.theme.textNavbar)};
    display: flex;
    padding: 16px;
`;

const NavBar = ({ title, text,icon, ...props }) => {
    
  return (
    <StyleNavBar>

        <Section>
            <Heading >{title}</Heading>
        </Section>
        <Logo></Logo>
        <Btn text={text} icon={<FaRegCircleUser />} > </Btn>
    </StyleNavBar>
  );
};

export default NavBar;