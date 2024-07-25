import styled from "@emotion/styled";

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.secondaryButton.bgColor};
  border: none;
  color: ${(props) => props.theme.secondaryButton.color};
  padding: ${(props) => props.theme.layout.space200}
    ${(props) => props.theme.layout.space500};
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.secondaryButton.hoverBgColor};
  }
`;

const SecondaryButton = ({ buttonName, buttonText }) => {
  return (
    <StyledButton name={buttonName}>
      {buttonText}
    </StyledButton>
  );
};

export default SecondaryButton;
