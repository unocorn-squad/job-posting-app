import { useState } from 'react';
import styled from '@emotion/styled';

import DesktopSearchBar from './DesktopSearchBar';
import MobileSearchBar from './MobileSearchBar';

const MobileSearchBarContainer = styled.div`
  ${({ theme }) => `
    @media (min-width: ${theme.breakpoints.tablet_small}) {
      display: none;
    }
  `};
`;

const DesktopSearchBarContainer = styled.div`
  ${({ theme }) => `
    display: none;

    @media (min-width: ${theme.breakpoints.tablet_small}) {
      display: block;
    }
  `};
`;

function SearchBar() {
  const [location, setLocation] = useState('');
  const [status, useStatus] = useState(false);
  const [title, setTitle] = useState('');

  // @TODO Implement search and filter functionality.
  const handleOnChangeByLocation = () => {};
  const handleOnChangeByStatus = () => {};
  const handleOnChangeByTitle = () => {};
  const handleOnSearch = () => {};

  return (
    <>
      <DesktopSearchBarContainer>
        <DesktopSearchBar
          location={location}
          status={status}
          title={title}
          onChangeByLocation={handleOnChangeByLocation}
          onChangeByStatus={handleOnChangeByStatus}
          onChangeByTitle={handleOnChangeByTitle}
          onClick={handleOnSearch}
        />
      </DesktopSearchBarContainer>
      <MobileSearchBarContainer>
        <MobileSearchBar
          location={location}
          status={status}
          title={title}
          onChangeByLocation={handleOnChangeByLocation}
          onChangeByStatus={handleOnChangeByStatus}
          onChangeByTitle={handleOnChangeByTitle}
          onClick={handleOnSearch}
        />
      </MobileSearchBarContainer>
    </>
  );
}

export default SearchBar;
