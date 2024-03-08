import React, { useContext } from "react";
import { NestingContext } from "../../../contexts";
import styled from "styled-components";


const  headingStyle =`
    background : transparent;
    color: white;
    &:hover{
        color: ${(props) => (props.color ? props.color : props.theme.secondary)};
    }
    margin: 0 !important;
    ${(props) => (props.marginLeft ? "margin-left: " + props.marginLeft + " ;" : "")};
`;

const StyleHeading1 = styled.h1`${headingStyle}`;
const StyleHeading2 = styled.h2`${headingStyle}` ;
const StyleHeading3 = styled.h3`${headingStyle}` ;
const StyleHeading4 = styled.h4`${headingStyle}` ;
const StyleHeading5 = styled.h5`${headingStyle}` ;
const StyleHeading6 = styled.h6`${headingStyle}` ;
 
const Heading = ({children}) => {
    const nestLevel = useContext(NestingContext);
    switch (nestLevel){
        case 2: 
           return <StyleHeading2>{children}</StyleHeading2>
        case 3: 
            return <StyleHeading3>{children}</StyleHeading3>
        case 4: 
            return <StyleHeading4>{children}</StyleHeading4>
        case 5: 
            return <StyleHeading5>{children}</StyleHeading5>

        case 6: 
            return <StyleHeading6>{children}</StyleHeading6>
        case 1: 
        default:
            return <StyleHeading1>{children}</StyleHeading1>
    }
}
export default Heading