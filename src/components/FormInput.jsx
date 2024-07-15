import React from "react";
import { Input, Icon } from "./SharedStyles";

const FormInput = ({ icon, altText, placeholder }) => {
  return (
    <>
      <Icon src={icon} alt={altText} />
      <Input
        type="text"
        id="filter-options-text"
        placeholder={placeholder}
        name="filter-options-text"
      />
    </>
  );
};

export default FormInput;
