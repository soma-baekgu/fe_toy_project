"use client"

import styled from "styled-components";

const Button = ({children}: {children:any}) => {
  return <StyledButton>{children}</StyledButton>
}

const StyledButton = styled.button`
    border-radius: 3px;
    width: fit-content;
    padding: 10%;
`

export default Button;
