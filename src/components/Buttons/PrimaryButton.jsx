import styled from "@emotion/styled";

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.primaryButton.bgColor};
  border: none;
  color: ${(props) => props.theme.primaryButton.color};
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: ${(props) => props.theme.primaryButton.hoverBgColor};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.mobile_small}) {
    padding: ${(props) =>
      props.isMobile
        ? `${props.theme.layout.space200} ${props.theme.layout.space1400}`
        : ""};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.tablet_small}) {
    margin: 15px 0px 10px 0px;
    padding: ${(props) => props.theme.layout.space200}
      ${(props) => props.theme.layout.space200};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.desktop_small}) {
    margin: 15px 0px 10px 0px;
    padding: ${(props) => props.theme.layout.space200}
      ${(props) => props.theme.layout.space500};
  }
`;
const PrimaryButton = ({ buttonName, buttonText, isMobile }) => {
  return (
    <StyledButton name={buttonName} isMobile={isMobile}>
      {buttonText}
    </StyledButton>
  );
};

export default PrimaryButton;
