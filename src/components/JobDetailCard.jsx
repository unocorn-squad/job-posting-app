import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';

const JobDetailContainer = styled.div`
  padding: ${props => props.theme.layout.space400};
  background-color: ${props => props.theme.colors.white};
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
`;


export const JobDetailCard = () => {
  const theme = useTheme();
  return (
    <JobDetailContainer>
      <JobDetailHeader>
        <div>1w ago &#8226; Part Time</div>
        <JobTitle>Senior Software Engineer</JobTitle>
        <JobLocation>United Kingdom</JobLocation>
      </JobDetailHeader>
      <JobDetailDescription>
        <p>This is a simple component styled with Emotion.</p>
      </JobDetailDescription>
    </JobDetailContainer>
  );
};
