import React, { useContext } from "react";
import { styled } from "styled-components";
import { NestingProvider, NestingContext } from "../../../contexts/";

const StyledSection = styled.section`
  background: transparent;
  color: ${(props) => props.theme.secondary};
  align-item: center;
  display: flex;
`;

const Section = ({ children }) => {
  const nestContext = useContext(NestingContext);
  return (
    <StyledSection>
      <NestingProvider value={nestContext + 1}>{children}</NestingProvider>
    </StyledSection>
  );
};

export default Section;