import styled from "@emotion/styled";

const Input = styled.input`
  border: none;
  outline: none;
  flex-grow: 1;
  padding-left: ${(props) => (props.isMobile ?  props.theme.layout.space400 :"")};
`;

const FormInput = ({ id, placeholder, name, label, isMobile }) => {
  return (
    <Input
      type="text"
      id={id}
      placeholder={placeholder}
      name={name}
      aria-label={label}
      isMobile={isMobile}
    />
  );
};

export default FormInput;
