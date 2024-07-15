import styled from "@emotion/styled";

const Input = styled.input`
  border: none;
  outline: none;
  flex-grow: 1;
`;

const Icon = styled.img`
  padding: ${(props) => props.theme.layout.space200};
`;

export { Input, Icon };
