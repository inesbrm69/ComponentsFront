import React from "react";
import { DialogCard, CompleteCard } from "../../molecules";
import styled from "styled-components";

const StyleListCard = styled.ul`
    display:flex;
    flex-wrap: wrap;
  list-style-type: none;
`;

const CardList = ({ data, ...props }) => {
  return (
    <StyleListCard>
      {data.map((x, i) => {
        const { url } = x;
        console.log(url)
        return (
          <CompleteCard key={i} urlMain={url} >
          </CompleteCard>           
        );
      })}
      {props.children}
    </StyleListCard>
  );
};

export default CardList;