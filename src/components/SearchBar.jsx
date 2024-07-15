import React from "react";
import styled from "@emotion/styled";
import FormInput from "./FormInput";
import LocationIcon from "../assets/images/icons/icon-location.svg";
import SearchIcon from "../assets/images/icons/icon-search.svg";

const Row = styled.div`
  display: flex;
  padding: ${(props) => props.theme.layout.space400};
`;

const Column = styled.div`
  flex: ${(props) => props.flex || 1};
  padding: ${(props) => props.theme.layout.space100};
  border: 1px solid #ccc;
  border-top-left-radius: ${(props) => props.borderTopLeftRadius || "0"};
  border-bottom-left-radius: ${(props) => props.borderBottomLeftRadius || "0"};
  border-top-right-radius: ${(props) => props.borderTopRightRadius || "0"};
  border-bottom-right-radius: ${(props) =>
    props.borderBottomRightRadius || "0"};
  border-left: ${(props) => props.borderLeft || "1px solid #ccc"};
  border-right: ${(props) => props.borderRight || "1px solid #ccc"};
  display: flex;
`;

const SearchBar = () => {
  return (
    <Row>
      <Column flex={1.5} borderTopLeftRadius="8px" borderBottomLeftRadius="8px">
        <FormInput icon={SearchIcon} altText={"Search Icon"} />
      </Column>
      <Column flex={1.2} borderLeft="0" borderRight="0">
        <FormInput icon={LocationIcon} altText={"Location Icon"} />
      </Column>
      <Column borderTopRightRadius="8px" borderBottomRightRadius="8px"></Column>
    </Row>
  );
};

export default SearchBar;
