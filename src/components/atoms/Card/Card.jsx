import React from "react";
import styled from "styled-components";


const StyledCard = styled.div`
    
`;

const Card = (props) => {
return <StyledCard {...props}>{props.children}</StyledCard>;
};

export default Card;