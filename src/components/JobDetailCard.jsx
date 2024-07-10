import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';

// Temporarily importing JSON here to test code
import data from '../assets/data.json';

const JobDetailContainer = styled.div`
  padding: ${props => props.theme.layout.space500};
  margin: 0 auto;
  border-radius: 6px;
  background-color: ${props => props.theme.colors.white};
  max-width: 730px;
`;

const JobDetailHeader = styled.div`
  color: ${props => props.theme.colors.darkGray};
`;

const JobTitle = styled.h1`
  color: ${props => props.theme.colors.darkBlue};
  margin-top: ${props => props.theme.layout.space50};
  margin-bottom: ${props => props.theme.layout.space100};
`;

const JobLocation = styled.div`
  font-size: ${props => props.theme.typography.fs87};
  font-weight: ${props => props.theme.typography.fwBold};
  color: ${props => props.theme.colors.violet};
`;

const JobDetailDescription = styled.div`
  p {
    color: ${props => props.theme.colors.darkGray};
  }
`;


export const JobDetailCard = () => {
  const theme = useTheme();

  // TODO: For testing. Remove this once the components are connected
  const job = data[0];

  return (
    <JobDetailContainer>
      <JobDetailHeader>
        <div>{job.postedAt} &#8226; {job.contract}</div>
        <JobTitle>{job.position}</JobTitle>
        <JobLocation>{job.location}</JobLocation>

        {/* Button component goes here? */}
      </JobDetailHeader>
      <JobDetailDescription>
        <p>{job.description}</p>

        <h3>Requirements</h3>
        <p>{job.requirements.content}</p>

        <h3>What You Will Do</h3>
        <p>{job.role.content}</p>

      </JobDetailDescription>
    </JobDetailContainer>
  );
};
