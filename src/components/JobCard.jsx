import React from "react";
import styled from "@emotion/styled";


const StyledBox = styled.div`
  min-height: 228px;
  width: 90%;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet_small}) {
    width: 45%;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.desktop_small}) {
    width: 30%;
  }

  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.white};
  display: grid;
  align-items: center;
  justify-items: center;
  position: relative;
`;

const OvalBullet = styled.div`
  width: vh;
  min-height: 4px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.darkGrey};
  padding: 8px 16px 0 13px;
`;

const InnerBox = styled.div`
  min-height: 147px;
  width: 80%;
`;

const StyledTextBox = styled.div`
  display: flex;
  align-items: center;
`;

const StyledText = styled.div`
  font-size: ${(props) => props.theme.typography.fs100};
  font-weight: ${(props) => props.theme.typography.fwRegular};
  color: ${(props) => props.theme.colors.darkGrey};
  padding-top: 10px;
`;

const StyledTitle = styled.div`
  font-size: ${(props) => props.theme.typography.fs125};
  font-weight: ${(props) => props.theme.typography.fwBold};
  padding-top: 25px;
  padding-bottom: 5px;
`;

const StyledLocationText = styled.div`
  padding-top: 40px;
  font-size: ${(props) => props.theme.typography.fs87};
  font-weight: ${(props) => props.theme.typography.fwBold};
  color: ${(props) => props.theme.colors.violet};
`;

const LogoImage = styled.img`
  padding: 25px 10px;
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
  jobDetailsUrl,
}) => {
  return (
    <StyledBox>
      <LogoImage
        src={{logo}}
        alt={`${company} logo`}
        logoBackground={logoBackground}
      />

      <InnerBox>
        <StyledTextBox>
          <StyledText>{postedAt}</StyledText>
          <OvalBullet />
          <StyledText>{contract}</StyledText>
        </StyledTextBox>

        <StyledTitle>{position}</StyledTitle>
        <StyledText>{company}</StyledText>
        <StyledLocationText>{location}</StyledLocationText>
      </InnerBox>
    </StyledBox>
  );
};

export default JobCard;
