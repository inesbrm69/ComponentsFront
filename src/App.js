import React, { useState } from "react";
import { ThemeProvider, styled } from "styled-components";
import {
  InputText,
  Clock,
  Card,
  Paragraph,
  Btn,
  HttpExample,
} from "./components/atoms";
import {
  FaCarrot,
  FaLemon,
  FaPepperHot,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import {Menu, Form} from './components/organisms'
import { NightModeSwitch } from "./components/molecules";
import style from "./App.css"
import { Container, Row, Col } from "react-bootstrap";

const day = {
  primary: 'black',
  secondary: "white"
}

const night = {
  primary:"white",
  secondary: "black"
}
const menuData = [
  {
    icon: <FaPepperHot></FaPepperHot>,
    text: "Chili",
    data: "chili",
  },
  {
    icon: <FaCarrot></FaCarrot>,
    text: "Carrot",
    data: "carrot",
  },
  {
    icon: <FaLemon></FaLemon>,
    text: "Lemon",
    data: "lemon",
  },
];

const formData = [
  {
    icon: <FaPepperHot></FaPepperHot>,
    text: "Hello",
    data: "chili",
  },
  {
    icon: <FaCarrot></FaCarrot>,
    data: "carrot",
  },
  {
    icon: <FaLemon></FaLemon>,
    data: "lemon",
  },
];

const StyledAppContainer = styled.div`
  background: ${(props) => props.theme.secondary};
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
`;

function App() {
  const [page, setPage] = useState("lemon");
  const [isNightMode, setIsNightMode] = useState(true);

  const invert = () => (isNightMode ? night : day);

  const handleNightMode = () => {
    setIsNightMode(!isNightMode);
  };

  const renderPage = () => {
    switch (page) {
      case "carrot":
        return (
          <div>
            <Clock />
          </div>
        );
      case "lemon":
        return <div>Lemon</div>;
      default:
      case "chili":
        return <div>Chilly</div>;
    }
  };
  const handler = (pageName) => {
    setPage(pageName);
  };

  return (
    <>
      <ThemeProvider theme={invert(isNightMode)}>
      <StyledAppContainer>
          <HttpExample></HttpExample>
            
              <Menu data={menuData} handler={handler}>
              <NightModeSwitch
                isNightMode={isNightMode}
                handler={handleNightMode}
              ></NightModeSwitch>
              </Menu>

              <FaMoon></FaMoon>
              <FaSun></FaSun>
              <Form data={formData}></Form>
              <InputText />
              {renderPage()}
              <Card />
              <Card />
              <Card></Card>
              <Btn></Btn>
              <Paragraph></Paragraph>
      
          
              
      </StyledAppContainer>
      
      </ThemeProvider>

    </>
  );
}

export default App;