import React from "react";
import styled from "@emotion/styled";
import Header from "../assets/images/header/bg-pattern-header.svg";
import MobileHeader from "../assets/images/header/bg-pattern-header--mobile.svg";
import TabletHeader from "../assets/images/header/bg-pattern-header--tablet.svg";



const StyledContainer = styled.div`

  height: 228px;
  width: 100%;
  display:flex;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet_small}) {
    width:100%;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.desktop_small}) {
  width: 100%;
   
  }
  background-color: ${(props) => props.theme.colors.white};
  align-items: center;
  justify-items: center;
  position: relative;
`;
const StyledText = styled.div`
  font-size: ${(props) => props.theme.typography.fs175};
  font-weight: ${(props) => props.theme.typography.fwBold};
  color: ${(props) => props.theme.colors.white};
  z-index: 10;
  position: absolute;
  top: 30px;
  margin-left : 80px;
`;

const HeaderStyle = styled.div`
  display:flex;
  height:136px;
  width:100%;
  background: url('${MobileHeader}') no-repeat;
  background-size:cover;
  top:0;
  position: absolute; 
  @media (min-width: ${(props) => props.theme.breakpoints.tablet_small}) {
    width:100%;
    background: url('${TabletHeader}') no-repeat; 
    background-size:cover;   
    
  }
  @media (min-width: ${(props) => props.theme.breakpoints.desktop_small}) {
    background: url('${Header}') no-repeat;  
    }
`;




const HeaderComponent = () => {
    return (

        <StyledContainer>
            <HeaderStyle alt={'header'}>
                <StyledText>devjobs</StyledText>

            </HeaderStyle>
        </StyledContainer>

    );
};

export default HeaderComponent;