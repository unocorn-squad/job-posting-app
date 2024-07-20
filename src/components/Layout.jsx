import styled from '@emotion/styled';

import Header from './Header';

const LayoutWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.layout.bgColor};
`;

const ContentWrapper = styled.div`
  margin: 0 auto;

  ${({ theme }) => `
    max-width: ${theme.layout.maxWidth};
    padding: 0 ${theme.layout.space400} ${theme.layout.space800};
  `}
`;

const InnerContentWrapper = styled.div`
  transform: translateY(-16px);

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet_small}) {
    transform: translateY(-32px);
  }
`;

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      <ContentWrapper>
        <InnerContentWrapper>{children}</InnerContentWrapper>
      </ContentWrapper>
    </LayoutWrapper>
  );
};

export default Layout;
