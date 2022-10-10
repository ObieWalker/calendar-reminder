import styled from "styled-components";

export const Container = styled.span`
  position: relative;
`;

export const Input = styled.input`
  height: 4rem;
  margin: 0;
  padding: 0 1rem;
  border: 1px solid gray;
  border-radius: 0.4rem;
  width: 90%;
  &:focus-visible {
    outline: 1px solid gray;
  }
`;

export const Error = styled.span`
  position: absolute;
  left: 0;
  top: 4rem;
  color: red;
`;
