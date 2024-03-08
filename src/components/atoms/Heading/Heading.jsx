import React, { useContext } from "react";
import { NestingContext } from "../../../contexts";
import styled from "styled-components";


const  headingStyle =`
    background : transparent;
    color: ${(props) => (props.color ? props.color : props.theme.textNavbar)};
    &:hover{
        color: ${(props) => (props.color ? props.color : props.theme.secondary)};
    }
    margin: 0 !important;
    ${(props) => (props.marginLeft ? "margin-left: " + props.marginLeft + " ;" : "")};
`;

const StyleHeading1 = styled.h1(headingStyle) ;
const StyleHeading2 = styled.h2(headingStyle) ;
const StyleHeading3 = styled.h3(headingStyle) ;
const StyleHeading4 = styled.h4(headingStyle) ;
const StyleHeading5 = styled.h5(headingStyle) ;
const StyleHeading6 = styled.h5(headingStyle) ;


// const StyleHeading = [styled.h1(headingStyle), styled.h2(headingStyle), styled.h3(headingStyle), styled.h4(headingStyle),styled.h5(headingStyle), styled.h(headingStyle)]
// const StyleHeading = styled.h1`
// background : ${(props) =>
//     props.background ? props.background : props.theme.tertiary};
//     color: ${(props) => (props.color ? props.color : props.theme.textNavbar)};
//     &:hover{
//         color: ${(props) => (props.color ? props.color : props.theme.secondary)};
//     }
//     margin: 0;
//     `;

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