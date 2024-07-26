import { useState } from "react";
import styled from "@emotion/styled";
import checkIcon from "../assets/images/icons/icon-check.svg";

const CheckboxContainer = styled.div`
  margin: 15px 0px 0px 20px;
  display: flex;
  gap: ${(props) => props.theme.layout.space200};
  color: ${(props) => props.theme.checkbox.label.color};

  @media (min-width: ${(props) => props.theme.breakpoints.tablet_small}) {
    margin: 25px 0px 0px 20px;
  }
`;

const CheckboxInput = styled.input`
  outline: ${(props) => props.theme.checkbox.outlineColor};
  background-color: ${(props) => props.theme.checkbox.bgColor};
  width: 24px;
  height: 24px;
  appearance: none;
  border-radius: 3px;
  cursor: pointer;


  &:hover {
    background-color: ${(props) => props.theme.checkbox.hoverBgColor};
  }

  &:checked {
    background-color: ${(props) => props.theme.checkbox.checkedBgColor};
    background-size: 65%;
    background-position: center 60%;
    background-repeat: no-repeat;
    background-image: url(${checkIcon});
  }
`;

const CheckboxLabel = styled.label`
  font-size: 16px;
  margin: 5px 0 0 -2px;
  font-weight: ${(props) => props.theme.typography.fwBold};
`;

const Checkbox = ({ id, label }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <CheckboxContainer>
      <CheckboxInput
        type="checkbox"
        name={id}
        id={id}
        value={id}
        onChange={handleCheck}
        checked={isChecked}
      />
      <CheckboxLabel htmlFor={id}>{label}</CheckboxLabel>
    </CheckboxContainer>
  );
};

export default Checkbox;
