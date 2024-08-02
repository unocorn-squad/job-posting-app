import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';

import jobsData from '../../assets/data.json';
import CompanyBioCard from '../../components/CompanyBioCard';
import JobDetailCard from '../../components/JobDetailCard';
import Layout from '../../components/Layout';
import StickyBanner from '../../components/StickyBanner';

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.layout.space400};
`;

function JobDetails() {
  const { jobId } = useParams();
  // Subtract 1 from jobId to convert to ensures the correct array element is accessed, as array indices start at 0.
  const {
    company,
    logo,
    logoBackground,
    position,
    postedAt,
    contract,
    location,
    website,
    apply,
    description,
    requirements,
    role,
  } = jobsData[jobId - 1];

  return (
    <>
      <Layout>
        <CardsContainer>
          <CompanyBioCard 
            company={company}
            logo={logo}
            logoBackground={logoBackground}
            website={website}
          />
          <JobDetailCard
            postedAt={postedAt}
            contract={contract}
            position={position}
            location={location}
            apply={apply}
            description={description}
            requirementsContent={requirements.content}
            requirementsItems={requirements.items}
            roleContent={role.content}
            roleItems={role.items}
          />
        </CardsContainer>
      </Layout>
      <StickyBanner company={company} position={position} website={website} />
    </>
  );
}

export default JobDetails;
