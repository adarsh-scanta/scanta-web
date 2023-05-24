"use client";
import { StyledButton } from "./styles";
import { ButtonProps } from "../types";

export const Button = ({
  color,
  textColor,
  border,
  fixedWidth,
  children,
  width,
  pulse,
  onClick,
}: ButtonProps) => (
  <StyledButton
    color={color}
    textColor={textColor}
    border={border}
    width={width}
    pulse={pulse}
    fixedWidth={fixedWidth}
    onClick={onClick}
  >
    {children}
  </StyledButton>
);
