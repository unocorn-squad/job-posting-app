import React from "react";
import styled from "@emotion/styled";
import header from "../assets/images/header/bg-pattern-header.svg";



const StyledContainer = styled.div`

  height: 228px;
  width: 327px;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet_small}) {
    width: 339px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.desktop_small}) {
    width: 350px;
  }
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  align-items: center;
  justify-items: center;
  position: relative;
`;

const StyledText = styled.div`
  font-size: ${(props) => props.theme.typography.fs125};
  font-weight: ${(props) => props.theme.typography.fwBold};
  color: ${(props) => props.theme.colors.white};
  z-index: 10;
  position: absolute;
  top: 30px;
  margin-left : 200px;
`;

const HeaderImage = styled.img`
  top : 0 ;
  position: absolute;
  

`;

const HeaderComponent = () => {
    return (

        <StyledContainer>
            <HeaderImage
                src={header}
                alt={'header'}
                
            />
            <StyledText>devjobs</StyledText>
        </StyledContainer>

    );
};

export default HeaderComponent;