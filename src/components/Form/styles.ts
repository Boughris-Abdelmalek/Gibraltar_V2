import { styled } from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  border-radius: 5px;
`;

export const FormInputContainer = styled.span`
  width: 100%;
  margin: 0.5rem;
`;

export const FormInput = styled.input`
  margin-block: 10px;
  padding: 0.75rem;
  width: 100%;
  border-radius: 5px;
  border: 1px solid grey;
`;

export const FormButton = styled.button`
  padding: 10px 20px;
  width: 100%;
`;
