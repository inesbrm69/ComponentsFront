import { Card } from "../../atoms";
import { Image} from "../../atoms"
import styled from "styled-components";
import img from "../../../img/img1.jpg"

const StyledCard = styled.div`
    position: relative;
  display: block;
  height: fit-content;  
  border-radius: 25px;
  overflow: hidden;
  text-decoration: none;
  margin-left: 8px
`;

// const StyledImg = styled.img`
//     width: 50px;
//     height: 50px;
// `;

const CompleteCard = ({ urlMain = <></>, ...props }) => {

  return (
    <StyledCard
    >
        {/* {console.log(urlMain) + " url "} */}
     <Image src={img}/>
     
     {props.children}
    </StyledCard>
  );
};

export default CompleteCard;