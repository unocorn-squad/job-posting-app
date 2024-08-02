import { useState } from 'react';

import FilterIcon from '../../assets/images/icons/icon-filter.svg?react';
import LocationIcon from '../../assets/images/icons/icon-location.svg?react';
import Button from '../Button';
import CheckBox from '../Checkbox';
import FormInput from '../FormInput';
import MobileSearchModal from './MobileSearchModal';
import {
  Column,
  MobileSearchIcon,
  ModalButton,
  ModalButtonContainer,
  ModalColumn,
  Row,
} from './StyledSearchBar';

function MobileSearchBar({
  location,
  status,
  title,
  onChangeByLocation,
  onChangeByStatus,
  onChangeByTitle,
  onSearch,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModalDisplay = () => {
    setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
  };

  const handleModalOnSearch = () => {
    onSearch();
    toggleModalDisplay();
  };

  return (
    <>
      <Row>
        <Column
          borderTopLeftRadius='8px'
          borderTopRightRadius='8px'
          borderBottomLeftRadius='8px'
          borderBottomRightRadius='8px'>
          <FormInput
            id='search-title-mobile'
            label='Filter by title, companies, expertise'
            name='search-title'
            placeholder='Filter by title, companies, expertise...'
            value={title}
            onChange={onChangeByTitle}
          />
          <ModalButton
            aria-label='Additional Search Filters'
            onClick={toggleModalDisplay}>
            <FilterIcon />
          </ModalButton>
          <Button ariaLabel='Search' onClick={onSearch} type='submit'>
            <MobileSearchIcon />
          </Button>
        </Column>
      </Row>
      {isModalOpen && (
        <MobileSearchModal
          isModalOpen={isModalOpen}
          toggleModalDisplay={toggleModalDisplay}>
          <form onSubmit={handleModalOnSearch}>
            <ModalColumn
              borderBottom
              borderTopLeftRadius='8px'
              borderTopRightRadius='8px'>
              <FormInput
                icon={<LocationIcon />}
                id='filter-location-mobile'
                label='Filter by location'
                name='filter-location'
                placeholder='Filter by location...'
                value={location}
                onChange={onChangeByLocation}
              />
            </ModalColumn>
            <ModalColumn
              borderBottomLeftRadius='8px'
              borderBottomRightRadius='8px'>
              <CheckBox
                checked={status}
                id='checkbox-2'
                value={status}
                onChange={onChangeByStatus}>
                Full-time Only
              </CheckBox>
              <ModalButtonContainer>
                <Button onClick={handleModalOnSearch} type='submit'>
                  Search
                </Button>
              </ModalButtonContainer>
            </ModalColumn>
          </form>
        </MobileSearchModal>
      )}
    </>
  );
}

export default MobileSearchBar;
