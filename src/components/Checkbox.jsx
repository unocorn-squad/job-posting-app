import { useState } from "react";
import styled from "@emotion/styled";

const CheckboxContainer = styled.div`
  display: none;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet_small}) {
    display: flex;
    gap: ${(props) => props.theme.layout.space200};
    color: ${(props) => props.theme.checkbox.label.color};
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
    background-image: url("/src/assets/images/icons/icon-check.svg");
  }
`;

const CheckboxLabel = styled.label`
  display: none;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet_small}) {
    margin: 5px 0 0 -2px;
    font-size: 1.05rem;
    font-weight: ${(props) => props.theme.typography.fwBold};
    display: inline;

    span {
      display: none;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.desktop_small}) {
    span {
      display: inline-block;
    }
  }
`;

const Checkbox = ({ id, label }) => {
  // State and handler set up for future use
  const [isChecked, setIsChecked] = useState(false);

  function handleCheck() {
    isChecked ? setIsChecked(false) : setIsChecked(true);
  }

  return (
    <CheckboxContainer>
      <CheckboxInput
        type="checkbox"
        name={id}
        id={id}
        value={id}
        onChange={handleCheck}
      />
      <CheckboxLabel htmlFor={id}>
        {label}
      </CheckboxLabel>
    </CheckboxContainer>
  );
};

export default Checkbox;
