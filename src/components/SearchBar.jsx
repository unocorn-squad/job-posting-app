import styled from '@emotion/styled';
import FormInput from './FormInput';
import CheckBox from './Checkbox';
import PrimaryButton from './Buttons/PrimaryButton';
import LocationIcon from '../assets/images/icons/icon-location.svg';
import SearchIcon from '../assets/images/icons/icon-search.svg';
import SearchIconMobile from '../assets/images/icons/icon-search-mobile.svg';
import FilterIcon from '../assets/images/icons/icon-filter.svg';
import React, { useState, useEffect } from 'react';
import CardContainer from './CardContainer';

const Row = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.isMobile ? 'column' : 'row')};
  padding-right: ${(props) =>
    props.isMobile ? '' : props.theme.layout.space300};
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: 'row';
  border-bottom: ${(props) =>
    `0.5px solid ${props.theme.searchBar.border.color}`};
`;

const Column = styled.div`
  background-color: white;
  border-top-left-radius: ${(props) => props.borderTopLeftRadius || '0'};
  border-bottom-left-radius: ${(props) => props.borderBottomLeftRadius || '0'};
  border-top-right-radius: ${(props) => props.borderTopRightRadius || '0'};
  border-bottom-right-radius: ${(props) =>
    props.borderBottomRightRadius || '0'};
  border-left: ${(props) =>
    props.borderLeft || `0.5px solid ${props.theme.searchBar.border.color}`};
  border-right: ${(props) =>
    props.borderRight || `0.5px solid ${props.theme.searchBar.border.color}`};
  display: flex;
  width: 100%;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet_small}) {
    flex: ${(props) => props.flex - 0.5};
    width: auto;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.desktop_small}) {
    flex: ${(props) => props.flex};
  }
`;

const Icon = styled.img`
  padding: ${(props) => props.theme.layout.space200};
  margin: ${(props) => props.theme.layout.space100};
  cursor: pointer;
`;

const StyledSearchIcon = styled.img`
  padding: ${(props) => props.theme.layout.space200};
  margin: ${(props) => props.theme.layout.space100};
  background: ${(props) => props.theme.searchBar.searchButton.bgColor};
  border-radius: 5px;
`;

const ButtonContainer = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  padding-right: ${(props) => props.theme.layout.space200};
`;

const ButtonMobileContainer = styled.div`
  padding-left: ${(props) => props.theme.layout.space300};
  padding-top: ${(props) => props.theme.layout.space200};
`;

const SearchBar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [placeholder, setPlaceholder] = useState('Filter by title...');
  const [checkboxLabel, setCheckboxLabel] = useState('Full Time');
  const [isCardOpen, setIsCardOpen] = useState(false);

  const handleOpenCard = () => {
    setIsCardOpen(true);
  };

  const handleCloseCard = () => {
    setIsCardOpen(false);
  };
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');

    const handleMediaQueryChange = (e) => {
      if (e.matches) {
        setPlaceholder('Filter by title, companies, expertise...');
        setCheckboxLabel('Full Time Only');
      } else {
        setPlaceholder('Filter by title...');
        setCheckboxLabel('Full Time');
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleMediaQueryChange(mediaQuery);
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    window.addEventListener('resize', handleResize);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Row isMobile={isMobile}>
      {isMobile ? (
        <Column borderTopLeftRadius='8px' borderBottomLeftRadius='8px'>
          <FormInput
            icon={SearchIcon}
            id={'search-title'}
            name={'Search title'}
            iconAltText={'Search Icon'}
            placeholder={placeholder}
            label={'Filter by title, companies, expertise'}
            isMobile={isMobile}
          />
          <Icon src={FilterIcon} alt={'Filter Icon'} onClick={handleOpenCard} />
          {isCardOpen && (
            <CardContainer onClose={handleCloseCard}>
              <StyledContainer>
                <Icon src={LocationIcon} alt={'Location Icon'} />
                <FormInput
                  id={'filter-location'}
                  name={'Filter Location'}
                  placeholder={'Filter by location...'}
                  label={'Filter by location'}
                />
              </StyledContainer>

              <CheckBox id={'checkbox-mobile-1'} label={'Full Time Only'} />

              <ButtonMobileContainer>
                <PrimaryButton
                  isMobile={isMobile}
                  buttonName={'search'}
                  buttonText={'Search'}
                />
              </ButtonMobileContainer>
            </CardContainer>
          )}
          <StyledSearchIcon src={SearchIconMobile} alt={'Search Icon'} />
        </Column>
      ) : (
        <>
          <Column
            flex={1.5}
            borderTopLeftRadius='8px'
            borderBottomLeftRadius='8px'>
            <Icon src={SearchIcon} alt={'Search Icon'} />
            <FormInput
              id={'search-title'}
              name={'Search title'}
              placeholder={placeholder}
              label={'Filter by title, companies, expertise'}
            />
          </Column>
          <Column flex={1.2} borderLeft='0' borderRight='0'>
            <Icon src={LocationIcon} alt={'Location Icon'} />
            <FormInput
              id={'filter-location'}
              name={'Filter Location'}
              placeholder={'Filter by location...'}
              label={'Filter by location'}
            />
          </Column>
          <Column
            flex={1.4}
            borderTopRightRadius='8px'
            borderBottomRightRadius='8px'>
            <CheckBox id={'checkbox-1'} label={checkboxLabel} />
            <ButtonContainer>
              <PrimaryButton buttonName={'search'} buttonText={'Search'} />
            </ButtonContainer>
          </Column>
        </>
      )}
    </Row>
  );
};

export default SearchBar;
