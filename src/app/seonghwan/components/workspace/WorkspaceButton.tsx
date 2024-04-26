import Button from "@/app/seonghwan/components/styledButton";
import styled from "styled-components";
import {Workspace} from "@/app/seonghwan/components/workspace/Workspace-info";

export const WorkspaceButton = ({workspace}: {workspace: Workspace}) => {
  const onClick = () => {

  }

  return (
    <StyledWorkspaceButton onClick={onClick}>
      {workspace.name.substring(0, 2)}
    </StyledWorkspaceButton>
  )
}

export const StyledWorkspaceButton = styled(Button)`
    background-color: black;
`