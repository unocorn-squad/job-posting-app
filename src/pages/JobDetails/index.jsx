import { useParams } from 'react-router-dom';

import jobsData from '../../assets/data.json';
import Layout from '../../components/Layout';
import StickyBanner from '../../components/StickyBanner';

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
      {/* @TODO Replace the placeholder content with appropriate components when they are complete. */}
      <Layout>Job Details Placeholder</Layout>
      <StickyBanner company={company} position={position} website={website} />
    </>
  );
}

export default JobDetails;
