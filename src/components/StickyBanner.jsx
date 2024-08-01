import styled from '@emotion/styled';

import Button from './Button';

const StickyBannerContainer = styled.div`
  position: sticky;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.stickyBanner.bgColor};
  box-shadow: ${(props) => props.theme.colors.lightGray} 1px 1px;
`;

const InnerBox = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.layout.space200};
  justify-content: space-between;
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => theme.layout.space400};
`;

const TextBox = styled.div`
  display: none;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet_small}) {
    display: block;
  }
`;

const StyledJobTitle = styled.h3`
  color: ${({ theme }) => theme.stickyBanner.title};
`;

const StyledText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.stickyBanner.text};
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet_small}) {
    width: initial;
  }
`;

const StickyBanner = ({ company, position, website }) => {
  return (
    <StickyBannerContainer>
      <InnerBox>
        <TextBox>
          <StyledJobTitle>{position}</StyledJobTitle>
          <StyledText>{company}</StyledText>
        </TextBox>
        <ButtonContainer>
          <Button as='a' href={website} variant='secondary'>
            Apply Now
          </Button>
        </ButtonContainer>
      </InnerBox>
    </StickyBannerContainer>
  );
};

export default StickyBanner;
