import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const CardWrapper = styled(Link)`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.jobCard.bgColor};
  text-decoration: none;
  transition: transform ease-in-out 0.25s;

  &:hover,
  &:focus {
    transform: translateY(-8px);
  }
`;

const LogoImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 20px;
  background-color: ${({ logoBackground }) => logoBackground};
  transform: translate(32px, -24px);
`;

const InnerBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: ${({ theme }) => `calc(100% - 50px - ${theme.layout.space400})`};
  padding: ${({ theme }) =>
    `0 ${theme.layout.space400} ${theme.layout.space400}`};
`;

const StyledTextBox = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.layout.space100};
`;

const StyledText = styled.p`
  margin: 0;
  color: ${(props) => props.theme.jobCard.secondaryText.color};
`;

const OvalBullet = styled.div`
  font-size: ${(props) => props.theme.typography.fs175};
  color: ${(props) => props.theme.jobCard.secondaryText.color};
`;

const StyledTitle = styled.h2`
  ${({ theme }) => `
    margin-top: ${theme.layout.space100};
    margin-bottom: ${theme.layout.space100};
    font-size: ${theme.typography.fs125};
    color: ${theme.jobCard.title};
  `}
`;

const StyledLocationText = styled.p`
  ${({ theme }) => `
    margin-top: ${theme.layout.space400};
    margin-bottom: 0;
    font-size: ${theme.typography.fs87};
    font-weight: ${theme.typography.fwBold};
    color: ${theme.jobCard.locationText.color};
  `}
`;

const JobCard = ({
  company,
  logo,
  logoBackground,
  position,
  postedAt,
  contract,
  location,
  jobDetailsURL,
}) => {
  return (
    <CardWrapper to={jobDetailsURL}>
      <LogoImageWrapper logoBackground={logoBackground}>
        <img alt={`${company} logo`} src={logo} />
      </LogoImageWrapper>
      <InnerBox>
        <div>
          <StyledTextBox>
            <StyledText>{postedAt}</StyledText>
            <OvalBullet>&#8226;</OvalBullet>
            <StyledText>{contract}</StyledText>
          </StyledTextBox>
          <StyledTitle>{position}</StyledTitle>
          <StyledText>{company}</StyledText>
        </div>
        <StyledLocationText>{location}</StyledLocationText>
      </InnerBox>
    </CardWrapper>
  );
};

export default JobCard;
