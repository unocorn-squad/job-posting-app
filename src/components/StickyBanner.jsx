import styled from '@emotion/styled';
import PrimaryButtonLink from './ButtonLink/PrimaryButtonLink';

const StickyBannerContainer = styled.div`
  height: auto;
  width: 100%;
  flex-grow: 3; 
  background-color: ${({ theme }) => theme.jobCard.bgColor};
  position: absolute;
  bottom: 0;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${(props) => props.theme.colors.lightGray} 1px 1px;
`;

const InnerBox = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  padding: ${(props) => props.theme.layout.space400};

  @media (min-width: ${(props) => props.theme.breakpoints.tablet_small}) {
  flex-direction: row;
  justify-content: space-between;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.desktop_small}) {
  flex-direction: row;
  justify-content: space-between;
  }
`;

const TextBox = styled.div`
  width: auto;
  height: auto;
  display: none;
  flex-direction: column;
  line-height: 10px;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet_small}) {
  display: flex;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.desktop_small}) {
  display: flex;
  }
`;

const StyledJobTitle = styled.div`
  line-height: 40px;
  font-size: ${(props) => props.theme.typography.fs125};
  font-weight: ${(props) => props.theme.typography.fwBold};
  color: ${(props) => props.theme.colors.black};
`;

const StyledText = styled.div`
  font-size: ${(props) => props.theme.typography.fs100};
  color: ${(props) => props.theme.colors.darkGray};
`;

const StyledButton = styled.div`
  border-radius: 5px;
  width: 141px;
  height: 48px;
  text-align: center;
  line-height: 50px;
  background-color: ${(props) => props.theme.colors.violet};
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.typography.fs100};
  font-weight: ${(props) => props.theme.typography.fwMedium};
`;

const StickyBanner = ({ company, position, website }) => {
    return (
        <StickyBannerContainer>
            <InnerBox>
                <TextBox>
                    <StyledJobTitle>{position}</StyledJobTitle>
                    <StyledText>{company}</StyledText>
                </TextBox>
                <PrimaryButtonLink>Apply Now</PrimaryButtonLink>
            </InnerBox>
        </StickyBannerContainer>
    );
};

export default StickyBanner;
