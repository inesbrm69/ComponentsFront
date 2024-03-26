import React, { useState} from "react";
import { ThemeProvider, styled } from "styled-components";
import {CardList, NavBar} from '../organisms'
import { NightModeSwitch } from "../molecules";
import { NightModeProvider } from "../../contexts"
import { Provider } from "react-redux";
import { store } from "../../store";

// Style 

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

function Home() {
  const [isNightMode, setIsNightMode] = useState(true);

  const invert = () => (isNightMode ? day : night);

  const handleNightMode = () => {
    setIsNightMode(!isNightMode);
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
            <StyleCardList>
              <CardList data={cardData}></CardList> 
            </StyleCardList>
          </StyledAppContainer>
        </NightModeProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default Home;