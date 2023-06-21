import React from "react";
import { IProps } from "./IProps";
import { StyledButton } from "./styles";

const Button: React.FC<IProps> = ({ variant, type, onClick, children }) => {
  return (
    <StyledButton variant={variant} onClick={onClick} type={type}>
      {children}
    </StyledButton>
  );
};

export default Button;
