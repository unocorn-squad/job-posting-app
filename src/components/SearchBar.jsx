import styled from "@emotion/styled";

import FormInput from "./FormInput";
import LocationIcon from "../assets/images/icons/icon-location.svg";
import SearchIcon from "../assets/images/icons/icon-search.svg";
import CustomButton from "./CustomButton";

const Row = styled.div`
  display: flex;
  padding: ${(props) => props.theme.layout.space400};
`;

const Column = styled.div`
  flex: ${(props) => props.flex || 1};
  padding: ${(props) => props.theme.layout.space100};
  border: ${(props) =>
    props.border || `1px solid ${props.theme.searchBar.border.color}`};
  border-top-left-radius: ${(props) => props.borderTopLeftRadius || "0"};
  border-bottom-left-radius: ${(props) => props.borderBottomLeftRadius || "0"};
  border-top-right-radius: ${(props) => props.borderTopRightRadius || "0"};
  border-bottom-right-radius: ${(props) =>
    props.borderBottomRightRadius || "0"};
  border-left: ${(props) =>
    props.borderLeft || `1px solid ${props.theme.searchBar.border.color}`};
  border-right: ${(props) =>
    props.borderRight || `1px solid ${props.theme.searchBar.border.color}`};
  display: flex;
`;

const SearchBar = () => {
  return (
    <Row>
      <Column flex={1.5} borderTopLeftRadius="8px" borderBottomLeftRadius="8px">
        <FormInput
          icon={SearchIcon}
          id={"search-title"}
          name={"Search title"}
          iconAltText={"Search Icon"}
          placeholder={"Filter by title, companies, expertise..."}
          label={"Filter by title, companies, expertise"}
        />
      </Column>
      <Column flex={1.2} borderLeft="0" borderRight="0">
        <FormInput
          icon={LocationIcon}
          id={"filter-location"}
          name={"Filter Location"}
          iconAltText={"Location Icon"}
          placeholder={"Filter by location..."}
          label={"Filter by location"}
        />
      </Column>
      <Column borderTopRightRadius="8px" borderBottomRightRadius="8px">
        <Column flex={2} border="none" borderLeft="0" borderRight="0">
          {/* @TODO add the Checkbox once it is complete
           */}
        </Column>
        <Column border="none" borderLeft="0" borderRight="0">
          <CustomButton
            buttonColor={(props) => props.theme.colors.violet}
            hoverColor={(props) => props.theme.colors.lightViolet}
            buttonText={"Search"}
            buttonName={"search-button"}
          />
        </Column>
      </Column>
    </Row>
  );
};

export default SearchBar;
