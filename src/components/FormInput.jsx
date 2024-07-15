import React from "react";
import { Input, Icon } from "./SharedStyles";

const FormInput = ({ icon, altText }) => {
  return (
    <>
      <Icon src={icon} alt={altText} />
      <Input
        type="text"
        id="filter-options-text"
        placeholder="Filter by title, companies, expertise..."
        name="filter-options-text"
      />
    </>
  );
};

export default FormInput;
