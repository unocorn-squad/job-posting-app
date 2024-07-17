import styled from '@emotion/styled';

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
  // @TODO Uncomment style after importing header component
  // transform: translateY(-32px);
`;

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      {/* @TODO Import Header component once it's complete. */}
      Header Component
      <ContentWrapper>
        <InnerContentWrapper>{children}</InnerContentWrapper>
      </ContentWrapper>
    </LayoutWrapper>
  );
};

export default Layout;
