import { Link } from "react-router-dom";
import styled from "@emotion/styled";


const StyledButton = styled.button`
  background-color: ${(props) => props.theme.primaryButton.bgColor};
  border: none;
  color: ${(props) =>  props.theme.primaryButton.color};
  padding: ${(props) => props.theme.layout.space200}
    ${(props) => props.theme.layout.space500};
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.primaryButton.hoverBgColor};
  }
`;

const PrimaryButtonLink = ({ href, children }) => {
  return (
    <StyledButton> 
      <a href = {href} aria-label = "button link">
        {children}
      </a>
    </StyledButton>
  );
};
  
  export default PrimaryButtonLink;