import styled from '@emotion/styled';

import DesktopHeader from '../assets/images/header/bg-pattern-header.svg';
import MobileHeader from '../assets/images/header/bg-pattern-header--mobile.svg';
import TabletHeader from '../assets/images/header/bg-pattern-header--tablet.svg';

const StyledHeaderContainer = styled.div`
  width:100%;
  height: 136px;
  display: flex;
  background: linear-gradient(to right,rgba(0,0,0,0) 100%, ${(props) => props.theme.colors.violet} 60%), url('${MobileHeader}');
  background-size: 100% 100%;
  overflow:hidden;
  background-repeat: no-repeat; 
  align-items: center;
  justify-items: center;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet_small})  {
    background: linear-gradient(to right,rgba(0,0,0,0) 10%, ${(props) => props.theme.colors.violet} 60%), url('${TabletHeader}');  
    height:160px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.desktop_small}) {
    background-image: url('${DesktopHeader}');
  }
`;

const StyledText = styled.div`
  font-size: ${(props) => props.theme.typography.fs175};
  font-weight: ${(props) => props.theme.typography.fwBold};
  color: ${(props) => props.theme.colors.white};
  transform: translateY(-30px);
  padding-left: 80px;
`;

const Header = () => {
  return (
    <StyledHeaderContainer>
      <StyledText>devjobs</StyledText>
    </StyledHeaderContainer>
  );
};

export default Header;
