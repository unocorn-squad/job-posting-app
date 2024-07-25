// @TODO: Uncomment SearchBar when final version is available, to allow the user to try another search directly from the error page.
// @NOTE: Included options for a text link or a button link. Final design can use either/or.

import { Link } from "react-router-dom";
import styled from "@emotion/styled";

import Layout from "../../components/Layout";
import SearchBar from "../../components/SearchBar";
import SecondaryButton from "../../components/Buttons/SecondaryButton";

const StyledContainer = styled.div`
  ${({ theme }) => `
    // margin-top: ${theme.layout.space600};
    border-radius: 8px;
    padding: ${theme.layout.space500};
    background-color: ${theme.colors.white};

    display: flex;
    flex-direction: column;
    gap: ${theme.layout.space300};
  `};
`;

const StyledHeading = styled.div`
  ${({ theme }) => `
    font-size: ${theme.typography.fs150};
    font-weight: ${theme.typography.fwSemiBold};
    color: ${theme.colors.darkBlue};
  `};
`;

const StyledText = styled.div`
  ${({ theme }) => `
    font-weight: ${theme.typography.fwRegular};
    color: ${theme.colors.darkGray};
  `};
`;

const StyledLink = styled(Link)`
  ${({ theme }) => `
    font-weight: ${theme.typography.fwSemiBold};
    color: ${theme.colors.violet};
    text-decoration: none;

    &:hover,
    :focus {
      color: ${theme.colors.lightViolet};
    }
  `};
`;

function Error() {
  return (
    <Layout>
      {/* <SearchBar></SearchBar> */}
      <StyledContainer>
        <StyledHeading>404 Error</StyledHeading>
        <StyledText>Cannot find the page you're looking for.</StyledText>
        <StyledLink to="/">Return to Home</StyledLink>
        {/* Uncomment below to see button link option */}
        {/* <Link to="/">
          <SecondaryButton
            buttonName="linkHome"
            buttonText="Return to Home"
          ></SecondaryButton>
        </Link> */}
      </StyledContainer>
    </Layout>
  );
}

export default Error;
