import React from "react";
import styled from "@emotion/styled";

const Input = styled.input`
  border: none;
  outline: none;
  flex-grow: 1;
`;

const Icon = styled.img`
  padding: ${(props) => props.theme.layout.space200};
`;

const FormInput = ({
  icon,
  id,
  iconAltText,
  placeholder,
  name,
  label,
}) => {
  return (
    <>
      <Icon src={icon} alt={iconAltText} />
      <Input
        type="text"
        id={id}
        placeholder={placeholder}
        name={name}
        aria-label={label}
      />
    </>
  );
};

export default FormInput;
