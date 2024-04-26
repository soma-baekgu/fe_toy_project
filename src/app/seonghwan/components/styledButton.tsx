"use client"

import styled from "styled-components";
import React from "react";

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode | string | number;
}

const Button = ({children, onClick}: ButtonProps) => {
  return (
    <StyledButton onClick={onClick}>
      {children}
    </StyledButton>)
}

const StyledButton = styled.button<ButtonProps>`
    border-radius: 3px;
    width: fit-content;
    padding: 10%;
`

export default Button;