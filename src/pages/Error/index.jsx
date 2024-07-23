import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import styled from '@emotion/styled';

const StyledHeading = styled.div`
  font-size: ${(props) => props.theme.typography.fs150};
  font-weight: ${(props) => props.theme.typography.fwSemiBold};
  color: ${(props) => props.theme.colors.black};
  padding-top: ${(props) => props.theme.layout.space500};
`;

const StyledText = styled.div`
  font-size: ${(props) => props.theme.typography.fs100};
  font-weight: ${(props) => props.theme.typography.fwRegular};
  color: ${(props) => props.theme.colors.black};
  padding-top: ${(props) => props.theme.layout.space200};
`;

const StyledLink = styled(Link)`
  font-size: ${(props) => props.theme.typography.fs100};
  font-weight: ${(props) => props.theme.typography.fwRegular};
  color: ${(props) => props.theme.colors.black};
  padding-top: ${(props) => props.theme.layout.space200};
  display: block;
  &:hover,:focus {
    color: ${(props) => props.theme.colors.darkGray};
  }
`;

function Error() {
  return (
    <Layout>
      <StyledHeading>404 Error</StyledHeading>
      <StyledText>Cannot find the page you're looking for.</StyledText>
      <StyledLink to="/">Return to Home</StyledLink>
    </Layout>
    );
}

export default Error;
