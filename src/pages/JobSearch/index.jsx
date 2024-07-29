import { lazy, Suspense, useState } from 'react';
import styled from '@emotion/styled';

import Button from '../../components/Buttons/PrimaryButton';

import jobsData from '../../assets/data.json';
import Layout from '../../components/Layout';

const JobCard = lazy(() => import('../../components/JobCard'));

const Flex = styled.div`
  ${({ theme }) => `
    display: flex;
    flex-direction: column;
    gap: ${theme.layout.space600};
    margin-top: ${theme.layout.space600};
    margin-bottom: ${theme.layout.space600};

    @media (min-width: ${theme.breakpoints.tablet_small}) {
      flex-direction: row;
      flex-wrap: wrap;
      align-items: stretch;
      gap: ${theme.layout.space600} ${theme.layout.space200};
      margin-top: ${theme.layout.space800};
      margin-bottom: ${theme.layout.space800};
    }

    @media (min-width: ${theme.breakpoints.tablet_large}) {
      flex-direction: row;
      flex-wrap: wrap;
      gap: ${theme.layout.space800} ${theme.layout.space300};
    }
  `};
`;

const InnerBox = styled.div`
  display: flex;
  justify-content: center;
  text-align:center;
`;

const FlexItem = styled.div`
  ${({ theme }) => `
    width: 100%;
    align-self: stretch;

    @media (min-width: ${theme.breakpoints.tablet_small}) {
      width: calc(50% - ${theme.layout.space200});
    }

    @media (min-width: ${theme.breakpoints.tablet_large}) {
      width: calc((100% / 3) - ${theme.layout.space300});
    }
  `};
`;

function JobSearch() {
  // Cursor state represents the current position in the job data set.
  // This is used to determine next result items to show when the user clicks "Load More" button.
  const [cursor, setCursor] = useState(12);
  const [jobs, setJobs] = useState(jobsData.slice(0, cursor));

  const handleLoadMore = () => {
    // Increase the visible item count (you can adjust this logic based on your requirements)
    setCursor(prevCount => prevCount + 12);

    // Update displayedData with additional items
    setJobs(jobsData.slice(0, cursor + 12));
  };

  return (
    <Layout>
      {/* @TODO Import SearchBar component here once it's complete */}
      <Flex>
        <Suspense fallback={<div>Loading...</div>}>
          {jobs.map(
            ({
              id,
              company,
              logo,
              logoBackground,
              position,
              postedAt,
              contract,
              location,
            }) => (
              <FlexItem key={id}>
                <JobCard
                  company={company}
                  logo={logo}
                  logoBackground={logoBackground}
                  position={position}
                  postedAt={postedAt}
                  contract={contract}
                  location={location}
                  jobDetailsURL={`/jobs/${id}`}
                />
              </FlexItem>
            )
          )}
        </Suspense>
      </Flex>
      {/* @TODO Import Button component here once it's complete */}
      <InnerBox>
        <Button buttonName="load-more" buttonText={"Load More"} onClick={handleLoadMore}></Button>
      </InnerBox>
      
      

    </Layout>
  );
}

export default JobSearch;
