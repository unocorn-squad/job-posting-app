import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

import Button from '../../components/Button';
import Layout from '../../components/Layout';

const StyledContainer = styled.div`
  ${({ theme }) => `
    background-color: ${theme.errorPage.bgColor};
    border-radius: 8px;
    padding: ${theme.layout.space500};
  `};
`;

const StyledHeading = styled.div`
  ${({ theme }) => `
    margin-bottom: ${theme.layout.space200};
    font-size: ${theme.typography.fs150};
    font-weight: ${theme.typography.fwSemiBold};
    color: ${theme.errorPage.title};
  `};
`;

const StyledText = styled.div`
  ${({ theme }) => `
    margin-bottom: ${theme.layout.space600};
    font-weight: ${theme.typography.fwRegular};
    color: ${theme.errorPage.text};
  `};
`;

function Error() {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/');
  };

  return (
    <Layout>
      <StyledContainer>
        <StyledHeading>404 Error</StyledHeading>
        <StyledText>Cannot find the page you&apos;re looking for.</StyledText>
        <Button onClick={handleOnClick} variant='secondary'>
          Return to Home
        </Button>
      </StyledContainer>
    </Layout>
  );
}

export default Error;
