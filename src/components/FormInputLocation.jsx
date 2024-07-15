import React from "react";
import { Input, Icon } from "./SharedStyles";
import LocationIcon from "../assets/images/icons/icon-location.svg";

const FormInputLocation = () => {
  return (
    <>
      <Icon src={LocationIcon} alt="Location Icon" />
      <Input
        type="text"
        id="filter-options-location"
        placeholder="Filter by location..."
        name="filter-options-location"
      />
    </>
  );
};

export default FormInputLocation;
