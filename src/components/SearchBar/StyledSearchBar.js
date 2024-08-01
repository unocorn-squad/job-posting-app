import styled from '@emotion/styled';

// const StyledContainer = styled.div`
//   display: flex;
//   flex-direction: 'row';
//   border-bottom: ${(props) =>
//     `0.5px solid ${props.theme.searchBar.border.color}`};
// `;

export const Row = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet_small}) {
    flex-direction: row;
  }
`;

export const Column = styled.div`
  ${({
    borderLeft,
    borderRight,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    theme,
  }) => `
    display: flex;
    width: 100%;
    background-color: white;
    border-top-left-radius: ${borderTopLeftRadius || '0'};
    border-bottom-left-radius: ${borderBottomLeftRadius || '0'};
    border-top-right-radius: ${borderTopRightRadius || '0'};
    border-bottom-right-radius: ${borderBottomRightRadius || '0'};
    border-left: ${
      borderLeft ? `0.5px solid ${theme.searchBar.border.color}` : '0'
    };
    border-right: ${
      borderRight ? `0.5px solid ${theme.searchBar.border.color}` : '0'
    };
    padding: ${theme.layout.space200};
    overflow: hidden;

    @media (min-width: ${theme.breakpoints.tablet_large}) {
      padding-right: ${theme.layout.space300};
      padding-left: ${theme.layout.space300};
    }
  `}
`;

export const FilterColumn = styled(Column)`
  ${({ tsWidth, tmWidth, theme }) => `
  @media (min-width: ${theme.breakpoints.tablet_small}) {
    min-width: ${tsWidth}
  }

  @media (min-width: ${theme.breakpoints.tablet_medium}) {
    min-width: ${tmWidth}
  }
`}

  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.layout.space200};
`;

export const MobileHiddenText = styled.span`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet_medium}) {
    display: inline-block;
  }
`;

// const ButtonMobileContainer = styled.div`
//   padding-left: ${(props) => props.theme.layout.space300};
//   padding-top: ${(props) => props.theme.layout.space200};
// `;
