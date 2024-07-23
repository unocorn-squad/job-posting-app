import styled from "@emotion/styled";

const StyledButton = styled.button`
  background-color: ${(props) =>  props.theme.colors.violet};
  border: none;
  color: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.layout.space200}
    ${(props) => props.theme.layout.space500};
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: ${(props) =>  props.theme.colors.lightViolet};
  }
`;

const PrimaryButton = ({ buttonName, buttonText }) => {
  return (
    <StyledButton name={buttonName}>
      {buttonText}
    </StyledButton>
  );
};

export default PrimaryButton;