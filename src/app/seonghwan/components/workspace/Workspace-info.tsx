export interface Workspace {
  name: string;
  thumbnail: string;
  page: string;
  path: string;
}

export const dummyWorkspace: Workspace[] = [
  {
    name: "소프트웨어 마에스트로",
    thumbnail: "https://dummyimage.com/50x50/000/fff",
    page: "https://swmaestro.org/sw/main/main.do",
    path: "/workspace/1"
  },
  {
    name: "백구",
    thumbnail: "https://dummyimage.com/50x50/000/fff",
    page: "https://github.com/soma-baekgu",
    path: "/workspace/2"
  },
]