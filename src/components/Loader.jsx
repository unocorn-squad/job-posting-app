import styled from '@emotion/styled';

const LoaderWrapper = styled.div`
  position: relative;
`;

const FoldingCube = styled.div`
  position: absolute;
  top: 48%;
  left: 48%;
  width: 40px;
  height: 40px;
  transform: rotateZ(45deg);
`;

const Cube = styled.div`
  float: left;
  width: 50%;
  height: 50%;
  position: relative;
  transform: scale(1.1);

  &:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.lightViolet};
    content: '';
    animation: cube-fold 2.4s infinite linear both;
  }

  @keyframes cube-fold {
    0%,
    10% {
      transform: perspective(140px) rotateX(-180deg);
      opacity: 0;
    }

    25%,
    75% {
      transform: perspective(140px) rotateX(0deg);
      opacity: 1;
    }

    90%,
    100% {
      -webkit-transform: perspective(140px) rotateY(180deg);
      transform: perspective(140px) rotateY(180deg);
      opacity: 0;
    }
  }
`;

// const TopCube = styled(Cube)``;

const RightCube = styled(Cube)`
  transform: scale(1.1) rotateZ(90deg);

  &:before {
    animation-delay: 0.3s;
  }
`;

const LeftCube = styled(Cube)`
  transform: scale(1.1) rotateZ(270deg);

  &::before {
    animation-delay: 0.9s;
  }
`;

const BottomCube = styled(Cube)`
  transform: scale(1.1) rotateZ(180deg);

  &:before {
    animation-delay: 0.6s;
  }
`;

const Loader = () => {
  return (
    <LoaderWrapper aria-hidden='true' aria-label='Loading...'>
      <FoldingCube>
        <Cube></Cube>
        <RightCube></RightCube>
        <LeftCube></LeftCube>
        <BottomCube></BottomCube>
      </FoldingCube>
    </LoaderWrapper>
  );
};

export default Loader;
