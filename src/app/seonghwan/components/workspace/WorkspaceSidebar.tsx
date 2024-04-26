"use client"

import styled from "styled-components";
import {WorkspaceButton} from "@/app/seonghwan/components/workspace/WorkspaceButton";
import {dummyWorkspace, Workspace} from "@/app/seonghwan/components/workspace/Workspace-info";
import {useEffect, useState} from "react";

const WorkspaceSidebar = () => {
  const [workspace, setWorkspace] = useState<Workspace[]>()

  useEffect(() => {
    setWorkspace(dummyWorkspace)
  }, [])

  return (
    <WorkspaceSideBar>
      {workspace && workspace.map(
        (w, i) => <WorkspaceButton key={i} workspace={w}/>)}
    </WorkspaceSideBar>
  )
}


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