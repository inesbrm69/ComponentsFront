import React from "react";
import styled from "styled-components";
import { Btn, Logo , Heading, Section } from "../../atoms";

const StyleNavBar = styled.div`
    height: fit-content;
    width: 100%;
    background : ${(props) => props.background ? props.background : props.theme.tertiary};
    display: flex;
    padding: 16px;
`;

const NavBar = ({ title, text,icon, handler, ...props }) => {
    
  return (
    <StyleNavBar handler={handler}>

        <Section>
            <Heading marginLeft="8px">{title}</Heading>
        </Section>
        <Logo marginLeft="8px"></Logo>
        <Btn text={text}> </Btn>
        <Btn text="Vendre un composant" > </Btn>
        {props.children}
    </StyleNavBar>
  );
};

export default NavBar;