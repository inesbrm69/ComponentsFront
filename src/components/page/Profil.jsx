import React, { useState} from "react";
import { ThemeProvider, styled } from "styled-components";
import {
  InputText,
  Clock,
  Card,
  Paragraph,
  Btn,
} from "../atoms";
import {
  FaCarrot,
  FaLemon,
  FaPepperHot,
} from "react-icons/fa";
import {Menu, Form, NavBar, TodoList, TodoListCopy} from '../organisms'
import { NightModeSwitch } from "../molecules";
import { NightModeProvider } from "../../contexts"
import { Provider } from "react-redux";
import { store } from "../../store";
import PlayList from "../organisms/PlayList/PlayList.jsx"


// Style 
const StyledCard = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

const day = {
  primary: '#fef8f8',
  secondary: "black",
  tertiary: "#592519",
  textNavbar:"white"
}

const night = {
  primary:"#592519",
  secondary: "white",
  tertiary: "#fef8f8",
  textNavbar:"black"
}

// Data

const menuData = [
  {
    icon: <FaPepperHot></FaPepperHot>,
    text: "Chili",
    slug: "chili",
  },
  {
    icon: <FaCarrot></FaCarrot>,
    text: "Carrot",
    slug: "carrot",
  },
  {
    icon: <FaLemon></FaLemon>,
    text: "Lemon",
    slug: "lemon",
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
  background: ${(props) => props.theme.primary};
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
  align-items: center;
  color: ${props => props.theme.secondary}
  box-sizing: border-box;
  font-family: 'Noto Sans JP', sans-serif;
`;

function Profil() {
  const [page, setPage] = useState("chili");
  const [isNightMode, setIsNightMode] = useState(true);

  const invert = () => (isNightMode ? day : night);

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
        return <PlayList>Lemon</PlayList>;
      default:
      case "chili":
        return <div>Chilly</div>;
    }
  };
  const handler = (pageName) => {
    setPage(pageName);
  };

  return (
    <Provider store={store}>
      <ThemeProvider theme={invert(isNightMode)}>
      <NightModeProvider
        value={{
          changeNightMode: () => {
            setIsNightMode(!isNightMode);
          },
          nightMode: isNightMode,
        }}
      >
        <StyledAppContainer> 
          <NavBar title="Element Craft" text="profil">
            <NightModeSwitch
              isNightMode={isNightMode}
              handler={handleNightMode}
             ></NightModeSwitch>
          </NavBar>
            <Menu data={menuData} handler={handler}>
              
              </Menu>
              <TodoList></TodoList>
              <TodoListCopy></TodoListCopy>
              <Form data={formData}></Form>
              <InputText />
              <StyledCard>
           
                <Card />
                <Card></Card>
              </StyledCard>
              {renderPage()}
              
              <Btn></Btn>
              <Paragraph></Paragraph>
          </StyledAppContainer>
        </NightModeProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default Profil;