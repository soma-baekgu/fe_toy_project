"use client"

import styled from "styled-components";
import './global.css'
import WorkspaceSidebar from "@/app/seonghwan/components/workspace/WorkspaceSidebar";
import React from "react";


const Seonghwan = (
  {children,}
    : Readonly<{ children: React.ReactNode; }>
) => {
  return (
    <RootContainer>
      <RootHeader>hi</RootHeader>
      <MainContainer>
        <WorkspaceSidebar />
        <ContentContainer>{children}</ContentContainer>
      </MainContainer>
    </RootContainer>
  )
}

const RootContainer = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    background-color: #154672;
    overflow: hidden;
    height: 100%;
`

const RootHeader = styled.div`
    width: 100%;
    height: 3%;
`

const MainContainer = styled.div`
    display: flex;
    height: 97%;
`

const ContentContainer = styled.div`
    width: 95%;
    background-color: #153042;
    border-radius: 5px;
    margin: 5px;
`


export default Seonghwan;