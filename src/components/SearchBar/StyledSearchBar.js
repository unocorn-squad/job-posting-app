import styled from '@emotion/styled';

import SearchIcon from '../../assets/images/icons/icon-search.svg?react';

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Column = styled.div`
  ${({
    borderTop,
    borderRight,
    borderBottom,
    borderLeft,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    theme,
  }) => `
    display: flex;
    width: 100%;
    background-color: white;
    border-top-left-radius: ${borderTopLeftRadius || '0'};
    border-bottom-left-radius: ${borderBottomLeftRadius || '0'};
    border-top-right-radius: ${borderTopRightRadius || '0'};
    border-bottom-right-radius: ${borderBottomRightRadius || '0'};
    border-top: ${
      borderTop ? `0.5px solid ${theme.searchBar.border.color}` : '0'
    };
     border-right: ${
       borderRight ? `0.5px solid ${theme.searchBar.border.color}` : '0'
     };
    border-bottom: ${
      borderBottom ? `0.5px solid ${theme.searchBar.border.color}` : '0'
    };
    border-left: ${
      borderLeft ? `0.5px solid ${theme.searchBar.border.color}` : '0'
    };
    padding: ${theme.layout.space200} ${theme.layout.space300};
    overflow: hidden;

   @media (min-width: ${theme.breakpoints.tablet_small}) {
      padding-right: ${theme.layout.space200};
      padding-left: ${theme.layout.space200};
    }

    @media (min-width: ${theme.breakpoints.tablet_large}) {
      padding-right: ${theme.layout.space300};
      padding-left: ${theme.layout.space300};
    }
  `}
`;

export const StatusFilterColumn = styled(Column)`
  ${({ tsWidth, tmWidth, theme }) => `
    align-items: center;
    justify-content: space-between;
    gap: ${theme.layout.space200};

    @media (min-width: ${theme.breakpoints.tablet_small}) {
      min-width: ${tsWidth}
    }

    @media (min-width: ${theme.breakpoints.tablet_medium}) {
      min-width: ${tmWidth}
    }
  `}
`;

export const ModalColumn = styled(Column)`
  flex-direction: column;
  width: initial;
  padding: ${({ theme }) =>
    `${theme.layout.space400} ${theme.layout.space300}`};
`;

export const HideMobileOnly = styled.span`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet_medium}) {
    display: inline-block;
  }
`;

export const MobileSearchIcon = styled(SearchIcon)`
  path {
    fill: ${({ theme }) => theme.colors.white};
  }
`;

export const ModalButton = styled.button`
  border: 0;
  background: none;
  margin-right: ${({ theme }) => theme.layout.space100};
  padding: ${({ theme }) => theme.layout.space200};
  cursor: pointer;
`;

export const ModalButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: ${({ theme }) => theme.layout.space200};
`;
