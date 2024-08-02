import styled from '@emotion/styled';

const IconWrapper = styled.span`
  width: 24px;
  height: 24px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.layout.space200};
  width: 100%;
  overflow: hidden;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  padding: 0;
  overflow: hidden;
  font-size: ${({ theme }) => theme.typography.fs100};
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const FormInput = ({ icon, id, label, name, placeholder, value, onChange }) => {
  return (
    <InputWrapper>
      {icon && <IconWrapper>{icon}</IconWrapper>}
      <Input
        aria-label={label}
        id={id}
        name={name}
        placeholder={placeholder}
        type='text'
        value={value}
        onChange={onChange}
      />
    </InputWrapper>
  );
};

export default FormInput;
