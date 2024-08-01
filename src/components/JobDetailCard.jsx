import styled from '@emotion/styled';
import Button from './Button';

const JobDetailContainer = styled.div`
  padding: ${props => props.theme.layout.space500};
  margin: 0 auto;
  border-radius: 6px;
  background-color: ${props => props.theme.jobDetailCard.bgColor};
`;

const JobDetailHeader = styled.div`
  color: ${props => props.theme.jobDetailCard.header.color};
  display: flex;
  align-items: center;  
  justify-content: space-between;
`;

const JobTitle = styled.h1`
  color: ${props => props.theme.jobDetailCard.title.color};
  margin-top: ${props => props.theme.layout.space100};
  margin-bottom: ${props => props.theme.layout.space200};
`;

const JobLocation = styled.div`
  font-size: ${props => props.theme.typography.fs87};
  font-weight: ${props => props.theme.typography.fwBold};
  color: ${props => props.theme.jobDetailCard.location.color};
`;

const JobDetailDescription = styled.div`
  p, ul, ol {
    color: ${props => props.theme.jobDetailCard.description.color};
  }
`;

const JobDetailCard = ({
  postedAt,
  contract,
  position,
  location,
  apply,
  description,
  requirementsContent,
  requirementsItems,
  roleContent,
  roleItems,
}) => {
  console.log(apply)
  return (
    <JobDetailContainer>
      <JobDetailHeader>
        <div>
          <div>{postedAt} &#8226; {contract}</div>
          <JobTitle>{position}</JobTitle>
          <JobLocation>{location}</JobLocation>
        </div>
        <Button as='a' href={apply} variant='primary'>Apply Now</Button>
      </JobDetailHeader>
      <JobDetailDescription>

        <p>{description}</p>

        <h3>Requirements</h3>
        <p>{requirementsContent}</p>
        <ul>
          {requirementsItems.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h3>What You Will Do</h3>
        <p>{roleContent}</p>
        <ol>
          {roleItems.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ol>

      </JobDetailDescription>
    </JobDetailContainer>
  );
};

export default JobDetailCard;
