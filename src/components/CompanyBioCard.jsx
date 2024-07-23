import styled from '@emotion/styled';

const CompanyBioContainer = styled.div`
  ${({ theme }) => `
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: ${theme.companyBioCard.bgColor};
    border-radius: 6px;

    @media (min-width: ${theme.breakpoints.tablet_small}) {
      flex-direction: row;
      height: 140px;
    }
  `};
`;

const LogoImageWrapper = styled.div`
  background-color: ${({ logoBackground }) => logoBackground};

  ${({ theme }) => `
    width: 50px;
    height: 50px;
    display: flex;
    border-radius: 16px;
    align-items: center;
    justify-content: center;
    margin-top: -1.5rem;

    @media (min-width: ${theme.breakpoints.tablet_small}) {
      margin-top: 0;
      width: 140px;
      height: 140px;
      border-radius: 6px 0 0 6px;
    }
  `};
`;

const LogoImage = styled.img`
  width: 100%;
  padding: ${props => props.theme.layout.space300};
`;

const CompanyInfo = styled.div`
  ${({ theme }) => `
    padding: ${theme.layout.space300} 0 ${theme.layout.space400};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    flex-grow: 1;

    @media (min-width: ${theme.breakpoints.tablet_small}) {
      flex-direction: row;
      padding: ${theme.layout.space500};
    }
  `};
`

const TextInfo = styled.div`
  ${({ theme }) => `
    text-align: center;
    h2 {
      font-size: ${theme.typography.fs125};
    }

    @media (min-width: ${theme.breakpoints.tablet_small}) {
      text-align: left;

      h2 {
        font-size: ${theme.typography.fs150};
      }
    }
  `};
`

const CompanyLink = styled.a`
  ${({ theme }) => `
    color: ${theme.companyBioCard.linkColor};
    display: block;
    padding: ${theme.layout.space100} 0 ${theme.layout.space300};
    text-decoration: none;

    @media (min-width: ${theme.breakpoints.tablet_small}) {
      padding: ${theme.layout.space100} 0;
    }
  `};
`

const CompanyBioCard = ({
  company,
  logo,
  logoBackground,
  website
}) => {
  return (
    <CompanyBioContainer>
      <LogoImageWrapper logoBackground={logoBackground}>
        <LogoImage src={logo} alt={`${company} logo`}>
        </LogoImage>
      </LogoImageWrapper>
      <CompanyInfo>
        <TextInfo>
          <h2>{company}</h2>
          <CompanyLink href={website}>
            {company.toLowerCase()}.com
          </CompanyLink>
        </TextInfo>
        {/* TODO: Replace with button component */}
        <button>Company Site</button>
      </CompanyInfo>
    </CompanyBioContainer>
  )
};

export default CompanyBioCard;
