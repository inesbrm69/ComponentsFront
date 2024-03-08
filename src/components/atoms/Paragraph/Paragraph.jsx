import React from "react";
import styled from "styled-components";

const StyleParagraph = styled.div`
    text-emphasis: center;
    font-size: 16px;
    color: #333;
    font-weight: 400;
`;

const Paragraph = ({children}) => {
  return <StyleParagraph > {children}</StyleParagraph>;
};

export default Paragraph;