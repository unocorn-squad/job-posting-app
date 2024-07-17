import styled from '@emotion/styled';

import DesktopHeader from '../assets/images/header/bg-pattern-header.svg';
import MobileHeader from '../assets/images/header/bg-pattern-header--mobile.svg';
import TabletHeader from '../assets/images/header/bg-pattern-header--tablet.svg';

const StyledHeaderContainer = styled.div`
  width: 100%;
  // @TODO Fix my mistake here with the height issue
  min-height: 136px;
  display: flex;
  background-image: url('${MobileHeader}');
  background-repeat: no-repeat;
  background-size: cover;
  align-items: center;
  justify-items: center;
  // @TODO Use padding to position the header text content

  @media (min-width: ${(props) => props.theme.breakpoints.tablet_small}) {
    min-height: 160px;
    background-image: url('${TabletHeader}');
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
`;

const Header = () => {
  return (
    <StyledHeaderContainer>
      <StyledText>devjobs</StyledText>
    </StyledHeaderContainer>
  );
};

export default Header;
