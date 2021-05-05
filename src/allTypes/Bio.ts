import { objectType } from "@nexus/schema"

export const Bio = objectType({
  name: "Bio",
  definition(t) {
    t.string("name")
    t.string("tagline")
    t.string("email")
    t.url("website", { resolve: (bio) => new URL(bio.website) })
    t.url("linkedin", { resolve: (bio) => new URL(bio.linkedin) })
  },
})
