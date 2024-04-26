interface IParams {
  params: { id: string }
}

const WorkspaceDetail = ({ params: { id } }: IParams) => {
  return (
    <div>
      {id}
    </div>
  )
}

export  default WorkspaceDetail;