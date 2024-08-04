import styled from '@emotion/styled';

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.layout.space200};
`;

const CheckboxInput = styled.input`
  outline: ${(props) => props.theme.checkbox.outlineColor};
  background-color: ${(props) => props.theme.checkbox.bgColor};
  width: 24px;
  height: 24px;
  appearance: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.checkbox.hoverBgColor};
  }

  &:checked {
    background-color: ${(props) => props.theme.checkbox.checkedBgColor};
    background-size: 65%;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('./images/icons/icon-check.svg');
  }
`;

const CheckboxLabel = styled.label`
  font-size: ${(props) => props.theme.typography.fs100};
  font-weight: ${(props) => props.theme.typography.fwBold};
  cursor: pointer;
`;

const Checkbox = ({ checked, id, value, onChange, children }) => {
  return (
    <CheckboxContainer>
      <CheckboxInput
        checked={checked}
        id={id}
        name={id}
        type='checkbox'
        value={value}
        onChange={onChange}
      />
      <CheckboxLabel htmlFor={id}>{children}</CheckboxLabel>
    </CheckboxContainer>
  );
};

export default Checkbox;
