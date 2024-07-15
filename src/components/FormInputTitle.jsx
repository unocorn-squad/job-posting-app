import React from "react";
import SearchIcon from "../assets/images/icons/icon-search.svg";
import { Input, Icon } from "./SharedStyles"; 

const FormInputTitle = () => {
  return (
    <>
      <Icon src={SearchIcon} alt="Search Icon" />
      <Input
        type="text"
        id="filter-options-text"
        placeholder="Filter by title, companies, expertise..."
        name="filter-options-text"
      />
    </>
  );
};

export default FormInputTitle;
