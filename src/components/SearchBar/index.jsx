import { useState } from 'react';
import styled from '@emotion/styled';

import DesktopSearchBar from './DesktopSearchBar';
import MobileSearchBar from './MobileSearchBar';
import jobsData from '../../assets/data.json';

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

function SearchBar({ onSearch }) {
  const [location, setLocation] = useState('');
  const [status, setStatus] = useState(false);
  const [title, setTitle] = useState('');

  const handleOnChangeByLocation = (e) => setLocation(e.target.value);

  const handleOnChangeByStatus = () => setStatus(!status);

  const handleOnChangeByTitle = (e) => setTitle(e.target.value);

  const handleOnSearch = () => {
    const filtered = jobsData.filter((job) => {
      const jobPosition = job.position ? job.position.toLowerCase() : '';
      const jobLocation = job.location ? job.location.toLowerCase() : '';
      const matchesTitle = title
        ? jobPosition.includes(title.toLowerCase())
        : true;
      const matchesLocation = location
        ? jobLocation.includes(location.toLowerCase())
        : true;
      return matchesTitle && matchesLocation;
    });
    onSearch(filtered);
  };

  const handleOnFormSubmit = (e) => {
    e.preventDefault();
    handleOnSearch();
  };

  return (
    <form onSubmit={handleOnFormSubmit}>
      <DesktopSearchBarContainer>
        <DesktopSearchBar
          aria-label='Desktop Search Jobs'
          aria-labelledby='desktop-search-bar-label'
          location={location}
          status={status}
          title={title}
          onChangeByLocation={handleOnChangeByLocation}
          onChangeByStatus={handleOnChangeByStatus}
          onChangeByTitle={handleOnChangeByTitle}
          onSearch={handleOnSearch}
        />
      </DesktopSearchBarContainer>
      <MobileSearchBarContainer>
        <MobileSearchBar
          aria-label='Mobile Search Jobs'
          aria-labelledby='mobile-search-bar-label'
          location={location}
          status={status}
          title={title}
          onChangeByLocation={handleOnChangeByLocation}
          onChangeByStatus={handleOnChangeByStatus}
          onChangeByTitle={handleOnChangeByTitle}
          onSearch={handleOnSearch}
        />
      </MobileSearchBarContainer>
    </form>
  );
}

export default SearchBar;
