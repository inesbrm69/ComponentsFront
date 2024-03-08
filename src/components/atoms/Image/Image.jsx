import React from "react";
import styled from "styled-components";

const StyledImg = styled.img`
  ${(props) => (props.height ? "height: " + props.height + " ;" : "")}
  ${(props) => (props.width ? "width: " + props.width + " ;" : "")}
`;

const Image = ({...props}) => {
return <StyledImg src={props}></StyledImg>;
};

export default Image;