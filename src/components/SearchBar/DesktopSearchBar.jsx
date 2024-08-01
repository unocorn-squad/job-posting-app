import LocationIcon from '../../assets/images/icons/icon-location.svg?react';
import SearchIcon from '../../assets/images/icons/icon-search.svg?react';
import { Column, FilterColumn, MobileHiddenText, Row } from './StyledSearchBar';
import Button from '../Button';
import CheckBox from '../Checkbox';
import FormInput from '../FormInput';

const DesktopSearchBar = ({
  location,
  status,
  title,
  onChangeByLocation,
  onChangeByStatus,
  onChangeByTitle,
  onSearch,
}) => {
  return (
    <Row>
      <Column
        borderTopLeftRadius='8px'
        borderBottomLeftRadius='8px'
        borderRight>
        <FormInput
          icon={<SearchIcon />}
          id='search-title'
          label='Filter by title, companies, expertise'
          name='search-title'
          placeholder='Filter by title, companies, expertise'
          value={title}
          onChange={onChangeByTitle}
        />
      </Column>
      <Column borderRight>
        <FormInput
          icon={<LocationIcon />}
          id='filter-location'
          label='Filter by location'
          name='filter-location'
          placeholder='Filter by location'
          value={location}
          onChange={onChangeByLocation}
        />
      </Column>
      <FilterColumn
        borderTopRightRadius='8px'
        borderBottomRightRadius='8px'
        tsWidth='220px'
        tmWidth='320px'>
        <CheckBox
          checked={status}
          id='checkbox-1'
          value={status}
          onChange={onChangeByStatus}>
          Full-time <MobileHiddenText>Only</MobileHiddenText>
        </CheckBox>
        <Button onClick={onSearch}>Search</Button>
      </FilterColumn>
    </Row>
  );
};

export default DesktopSearchBar;
