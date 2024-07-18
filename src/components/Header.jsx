import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import DesktopHeader from '../assets/images/header/bg-pattern-header.svg';
import MobileHeader from '../assets/images/header/bg-pattern-header--mobile.svg';
import TabletHeader from '../assets/images/header/bg-pattern-header--tablet.svg';

const StyledHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  width: 100%;
  height: 136px;
  background-image: url('${MobileHeader}');
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet_small}) {
    height: 160px;
    background-image: url('${TabletHeader}');
  }

  @media (min-width: ${(props) => props.theme.breakpoints.desktop_small}) {
    background-image: url('${DesktopHeader}');
  }
`;

const StyledInnerHeaderContainer = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  width: 100%;
  margin: 0 auto;
  padding: ${(props) => `0 ${props.theme.layout.space400}`};
  transform: translateY(-24px);

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet_small}) {
    transform: translateY(-32px);
  }
`;

const StyledText = styled.h1`
  font-size: ${(props) => props.theme.typography.fs175};
  font-weight: ${(props) => props.theme.typography.fwSemiBold};

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.white};
  }
`;

const Header = () => {
  return (
    <StyledHeaderContainer>
      <StyledInnerHeaderContainer>
        <StyledText>
          <Link to='/'>devjobs</Link>
        </StyledText>
      </StyledInnerHeaderContainer>
    </StyledHeaderContainer>
  );
};

export default Header;
