import React from "react";
import styled from "@emotion/styled";
import scootLogo from "../assets/images/logos/scoot.svg";

const StyledBox = styled.div`
  height: 228px;
  width: 327px;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet_small}) {
    width: 339px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.desktop_small}) {
    width: 350px;
  }

  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.white};
  display: grid;
  align-items: center;
  justify-items: center;
  position: relative;
  margin-top: 15%;
  margin-left: 5%;
`;

const OvalBullet = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.darkGrey};
  margin: 8px 16px 0 13px;
`;

const InnerBox = styled.div`
  height: 147px;
  width: 286px;
  text-align: left;
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

const JobCardComponent = ({
  company,
  logo,
  logoBackground,
  position,
  postedAt,
  contract,
  location,
}) => {
  return (
    <StyledBox>
      <LogoImage
        src={scootLogo}
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

export default JobCardComponent;
