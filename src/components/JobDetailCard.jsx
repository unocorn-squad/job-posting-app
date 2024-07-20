import styled from '@emotion/styled';

const JobDetailContainer = styled.div`
  padding: ${props => props.theme.layout.space500};
  margin: 0 auto;
  border-radius: 6px;
  background-color: ${props => props.theme.colors.white};
`;

const JobDetailHeader = styled.div`
  color: ${props => props.theme.colors.darkGray};
  display: flex;
  align-items: center;  
  justify-content: space-between;
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
  p, ul, ol {
    color: ${props => props.theme.colors.darkGray};
  }
`;

const JobDetailCard = ({ job }) => {

  return (
    <JobDetailContainer>
      <JobDetailHeader>
        <div>
          <div>{job.postedAt} &#8226; {job.contract}</div>
          <JobTitle>{job.position}</JobTitle>
          <JobLocation>{job.location}</JobLocation>
        </div>

        {/* TODO: Replace with button component once complete */}
        <button>Apply Now</button>

      </JobDetailHeader>
      <JobDetailDescription>

        <p>{job.description}</p>

        <h3>Requirements</h3>
        <p>{job.requirements.content}</p>
        <ul>
          {job.requirements.items.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h3>What You Will Do</h3>
        <p>{job.role.content}</p>
        <ol>
          {job.role.items.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ol>

      </JobDetailDescription>
    </JobDetailContainer>
  );
};

export default JobDetailCard;
