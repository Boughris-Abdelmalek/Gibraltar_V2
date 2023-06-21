import styled, { css } from "styled-components";
import { IProps } from "./IProps";

export const StyledButton = styled.button<IProps>`
  /* Default styles */
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;

  /* Customizable props */
  ${(props) =>
    props.variant === "primary" &&
    css`
      background-color: #007bff;
      color: #ffffff;
    `}

  ${(props) =>
    props.variant === "secondary" &&
    css`
      background-color: #6c757d;
      color: #ffffff;
    `}
`;
