import React from "react";
import styled from "styled-components";
import { Btn, Logo , Heading, Section } from "../../atoms";
import { Link } from "react-router-dom";


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
        <Link to="/"><Logo marginLeft="8px"></Logo></Link>
        <Link to="/"><Btn text="Accueil"> </Btn></Link>
        <Link to="/profil"><Btn text="Profil"> </Btn></Link>
        <Btn text="Vendre un composant"></Btn>
        {props.children}
    </StyleNavBar>
  );
};

export default NavBar;