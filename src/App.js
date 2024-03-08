import React, { useState} from "react";
import { ThemeProvider, styled } from "styled-components";
import {
  InputText,
  Clock,
  Card,
  Paragraph,
  Btn,
  Section,
  Heading,
} from "./components/atoms";
import {
  FaCarrot,
  FaLemon,
  FaPepperHot,
} from "react-icons/fa";
import {Menu, Form, CardList} from './components/organisms'
import { NightModeSwitch } from "./components/molecules";
import { NightModeProvider } from "./contexts"

import style from "./App.css"
import TodoList from "./components/organisms/TodoList/TodoList";
import TodoListCopy from "./components/organisms/TodoListCopy/TodoListCopy.jsx";
import {NavBar} from './components/organisms'
import { Provider } from "react-redux";
import { store } from "./store";
import Playlist from "./components/organisms/PlayList/PlayList.jsx"

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

const StyleCardList = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

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

const cardData = [
  {
    urlMain: "https://i.imgur.com/oYiTqum.jpg",
    url: "https://i.imgur.com/sjLMNDM.png",
    title: "Anonyme",
    text: "1000€",
  },
  {
    urlMain: "https://i.imgur.com/2DhmtJ4.jpg",
    url: "https://i.imgur.com/7D7I6dI.png",
    title: "Daisy",
    text: "7€",
  },
  {
    urlMain: "https://i.imgur.com/oYiTqum.jpg",
    url: "https://i.imgur.com/sjLMNDM.png",
    title: "John John",
    text: "45€",
  },
  {
    urlMain: "https://i.imgur.com/2DhmtJ4.jpg",
    url: "https://i.imgur.com/7D7I6dI.png",
    title: "Daisy Bis",
    text: "12€",
  }
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

function App() {
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
        return <Playlist>Lemon</Playlist>;
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
          <NavBar title="Element Craft" text="profil"></NavBar>
            <StyleCardList>
              <CardList data={cardData}></CardList> 
            </StyleCardList>
                   
            <Menu data={menuData} handler={handler}>
              <NightModeSwitch
                isNightMode={isNightMode}
                handler={handleNightMode}
              ></NightModeSwitch>
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

export default App;