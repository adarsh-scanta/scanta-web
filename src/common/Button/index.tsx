import { StyledButton } from "./styles";
import { ButtonProps } from "../types";

export const Button = ({
  color,
  textColor,
  border,
  fixedWidth,
  children,
  onClick,
}: ButtonProps) => (
  <StyledButton
    color={color}
    textColor={textColor}
    border={border}
    fixedWidth={fixedWidth}
    onClick={onClick}
  >
    {children}
  </StyledButton>
);
