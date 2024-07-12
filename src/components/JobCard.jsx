import React from "react";
import styled from "@emotion/styled";

const StyledBox = styled.div`
  border-radius: 8px;
  background-color: ${(props) => props.theme.jobCard.bgColor};
  position: relative;
`;

const OvalBullet = styled.div`
  font-size: ${(props) => props.theme.typography.fs175};
  color: ${(props) => props.theme.jobCard.secondaryText.color};
  padding-left: ${(props) => props.theme.layout.space200};
  padding-right: ${(props) => props.theme.layout.space200};
`;

const InnerBox = styled.div`
  padding: ${(props) => props.theme.layout.space500};
`;

const StyledTextBox = styled.div`
  display: flex;
  align-items: center;
`;

const StyledText = styled.div`
  font-size: ${(props) => props.theme.typography.fs100};
  font-weight: ${(props) => props.theme.typography.fwRegular};
  color: ${(props) => props.theme.jobCard.secondaryText.color};
  padding-top: ${(props) => props.theme.layout.space100};
`;

const StyledTitle = styled.div`
  font-size: ${(props) => props.theme.typography.fs125};
  font-weight: ${(props) => props.theme.typography.fwBold};
  padding-top: ${(props) => props.theme.layout.space300};
`;

const StyledLocationText = styled.div`
  padding-top: ${(props) => props.theme.layout.space300};
  font-size: ${(props) => props.theme.typography.fs87};
  font-weight: ${(props) => props.theme.typography.fwBold};
  color: ${(props) => props.theme.jobCard.locationText.color};
`;

const LogoImage = styled.img`
  padding: ${(props) => props.theme.layout.space300}
    ${(props) => props.theme.layout.space100};
  position: absolute;
  left: 32px;
  top: -32px;
  background-color: ${(props) => props.logoBackground};
  border-radius: 20px;
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
    <a href={jobDetailsURL}>
      {
        <StyledBox>
          <LogoImage
            src={logo}
            alt={`${company} logo`}
            logoBackground={logoBackground}
          />

          <InnerBox>
            <StyledTextBox>
              <StyledText>{postedAt}</StyledText>
              <OvalBullet> . </OvalBullet>
              <StyledText>{contract}</StyledText>
            </StyledTextBox>

            <StyledTitle>{position}</StyledTitle>
            <StyledText>{company}</StyledText>
            <StyledLocationText>{location}</StyledLocationText>
          </InnerBox>
        </StyledBox>
      }
    </a>
  );
};

export default JobCard;
