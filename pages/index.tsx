import Head from "next/head"
import { gql, useQuery } from "@apollo/client"
import { format } from "date-fns"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import prismStyle from "react-syntax-highlighter/src/styles/prism/xonokai"

import styles from "../styles/Home.module.css"
import { print } from "graphql"

const ResumeQuery = gql`
  query ResumeQuery {
    bio {
      name
      tagline
      website
      linkedin
      email
    }
    positions {
      title
      id
      location
      company
      startDate
      endDate
      years
      months
      achievements
    }
  }
`

export default function Home() {
  const { data, loading, error } = useQuery(ResumeQuery)

  if (error) {
    return <span>Error.... oops!</span>
  }
  if (loading) {
    return (
      <header>
        <h1>Mattias Mucherie </h1>
        <h2>Loading...</h2>
      </header>
    )
  }
  const { bio, positions } = data
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1>{bio.name}</h1>
        <h2>{bio.tagline}</h2>
      </header>

      <div>
        <div>
          <h2>Contact</h2>
          <p>
            <strong>Email</strong>{" "}
            <a href={`mailto:${bio.email}`}>{bio.email}</a>
          </p>
          <p>
            <strong>Website</strong>{" "}
            <a href={`${bio.website}`}>{new URL(bio.website).host}</a>
          </p>
          <p>
            <strong>LinkedIn</strong>{" "}
            <a href={`${bio.linkedin}`}>
              {bio.linkedin.replace("https://www.", "")}
            </a>
          </p>
          <SyntaxHighlighter language="graphql" style={prismStyle}>
            {print(ResumeQuery)}
          </SyntaxHighlighter>
        </div>
        <div>
          <h2>Objective</h2>
          <h2>Experience</h2>
          {positions.map((pos) => {
            const period = [
              pos.years > 0 ? `${pos.years} yrs` : null,
              pos.months > 0 ? `${pos.months} mths` : null,
            ]
              .filter((str) => str)
              .join(" ")
            return (
              <div key={pos.id}>
                <h3>{pos.title}</h3>
                <p>
                  {pos.company} | {pos.location}
                </p>
                <p>
                  {format(new Date(pos.startDate), "MMM yyyy")} -{" "}
                  {pos.endDate
                    ? format(new Date(pos.endDate), "MMM yyyy")
                    : "Current"}{" "}
                  ({period})
                </p>
                <ul>
                  {pos.achievements.map((ach) => (
                    <li key={ach}>{ach}</li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
