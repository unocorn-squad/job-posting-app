import styled from '@emotion/styled';

const StickyBannerContainer = styled.div`
  height: 96px;
  width: 768px;
  position: absolute;
  bottom: 0;
  right: 25%;
  left: 50%;
  margin-left: -384px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${(props) => props.theme.colors.lightGray} 1px 1px;
  @media (min-width: ${(props) => props.theme.breakpoints.desktop_small}) {
  }
`;

const InnerBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${(props) => props.theme.layout.space400};
`;

const TextBox = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  line-height: 10px;
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
    <>
      <StickyBannerContainer>
        <InnerBox>
          <TextBox>
            <StyledJobTitle>{position}</StyledJobTitle>
            <StyledText>{company}</StyledText>
          </TextBox>
          <StyledButton>Apply Now</StyledButton>
        </InnerBox>
      </StickyBannerContainer>
    </>
  );
};

export default StickyBanner;
