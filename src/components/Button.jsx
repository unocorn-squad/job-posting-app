import styled from '@emotion/styled';

const StyledButton = styled.button`
  ${({ theme, variant }) => `
    background-color: ${
      variant === 'primary'
        ? theme.primaryButton.bgColor
        : theme.secondaryButton.bgColor
    };
    border: 0;
    border-radius: 5px;
    padding: ${theme.layout.space200} ${theme.layout.space500};
    color:  ${
      variant === 'primary'
        ? theme.primaryButton.color
        : theme.secondaryButton.color
    };
    font-size: ${theme.typography.fs100};
    font-weight: ${theme.typography.fwBold};
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    transition: background-color 0.25s ease-in;

    &:hover,
    &:focus {
      background-color: ${
        variant === 'primary'
          ? theme.primaryButton.hoverBgColor
          : theme.secondaryButton.hoverBgColor
      };
    }
  `};
`;

const Button = ({ as, href, onClick, variant = 'primary', children }) => {
  if (as === 'a') {
    return (
      <StyledButton
        as={as}
        href={href}
        target='_blank'
        rel='noreferrer'
        variant={variant}>
        {children}
      </StyledButton>
    );
  }

  return (
    <StyledButton type='button' onClick={onClick} variant={variant}>
      {children}
    </StyledButton>
  );
};

export default Button;
