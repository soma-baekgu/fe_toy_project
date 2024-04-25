"use client"

import styled from "styled-components";
import Button from "@/app/seonghwan/components/styledButton";

const WorkspaceSidebar = () => {
  return (
    <WorkspaceSideBar>
      <WorkspaceButton>워1</WorkspaceButton>
      <WorkspaceButton>워2</WorkspaceButton>
      <WorkspaceButton>워3</WorkspaceButton>
      <WorkspaceButton>워4</WorkspaceButton>
      <WorkspaceButton>워5</WorkspaceButton>
    </WorkspaceSideBar>
  )
}

const WorkspaceButton = styled(Button)`
    background-color: black;
`

const WorkspaceSideBar = styled.div`
    width: 5%;
    min-width: 4em;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2%;
    padding-top: 1%;
`;

export default WorkspaceSidebar