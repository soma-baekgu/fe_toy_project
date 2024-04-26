"use client"

import styled from "styled-components";
import React from "react";

const Button = ({children}: {children: React.ReactNode | string}) => {
  return <StyledButton>{children}</StyledButton>
}

const StyledButton = styled.button`
    border-radius: 3px;
    width: fit-content;
    padding: 10%;
`

export default Button;
