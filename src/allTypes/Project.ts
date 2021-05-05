import { objectType } from "@nexus/schema"
import { ObjectDefinitionBlock } from "@nexus/schema/dist/definitions/objectType"

export const Project = objectType({
  name: "Project",
  definition(t: ObjectDefinitionBlock<"Project">) {
    t.string("title")
    t.string("description")
    t.string("img")
    t.url("sourceCode", { resolve: (bio) => new URL(bio.sourceCode) })
    t.url("demo", { resolve: (bio) => new URL(bio.demo) })
  }
})
