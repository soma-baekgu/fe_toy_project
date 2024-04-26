import Button from "@/app/seonghwan/components/styledButton";
import styled from "styled-components";
import {Workspace} from "@/app/seonghwan/components/workspace/Workspace-info";
import Link from "next/link";

export const WorkspaceButton = ({workspace}: {workspace: Workspace}) => {

  return (
    <Link href={`seonghwan/${workspace.path}`}>
      <StyledWorkspaceButton>
        {workspace.name.substring(0, 2)}
      </StyledWorkspaceButton>
    </Link>
  )
}

export const StyledWorkspaceButton = styled(Button)`
    background-color: black;
`