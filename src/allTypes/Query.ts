import { idArg, queryType } from "@nexus/schema"
import { data } from "src/data"
import { Bio, Position, Project } from "./index"

export const Query = queryType({
  definition(t) {
    t.field("bio", {
      type: Bio,
      description: "Get the bio",
      resolve: () => data.bio
    })
    t.list.field("positions", {
      type: Position,
      description: "Get all the positions",
      resolve: () => data.positions
    })
    t.field("position", {
      type: Position,
      description: "Find a position by its ID",
      args: { id: idArg() },
      resolve: (root, { id }: { id: string }, ctx) =>
        data.positions.find((pos) => pos.id === id)
    })
    t.list.field("projects", {
      type: Project,
      description: "Get all the projects",
      resolve: () => data.projects
    })
  }
})
