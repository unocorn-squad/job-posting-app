import { useParams } from 'react-router-dom';

import jobsData from '../../assets/data.json';
import Layout from '../../components/Layout';

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

  // @TODO Replace the placeholder content with appropriate components when they are complete.
  return <Layout>Job Details Placeholder</Layout>;
}

export default JobDetails;
