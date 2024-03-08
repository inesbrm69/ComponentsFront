import React from "react";
import styled from "styled-components";

const StyleBtn = styled.button`
    background-color: #EA4C89;
    border-radius: 8px;
    border-style: none;
    box-sizing: border-box;
    color: #FFFFFF;
    cursor: pointer;
    display: inline-block;
    font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;
    font-weight: 500;
    height: 40px;
    line-height: 20px;
    list-style: none;
    margin: 0;
    outline: none;
    padding: 10px 16px;
    position: relative;
    text-align: center;
    text-decoration: none;
    transition: color 100ms;
    vertical-align: baseline;
    user-select: none;
    touch-action: manipulation;
    margin-inline: 8px;
    &:hover{
      background-color: #F082AC;
    }
    &:focus{
      background-color: #F082AC;
    }
`;

const Btn = ({ icon = <></>, text = "", ...props }) => {
  console.log(text, "text")
  return (
    <StyleBtn {...props}>
      {icon}
      {text}
    </StyleBtn>
  );
};

export default Btn;