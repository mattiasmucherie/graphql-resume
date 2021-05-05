import { ApolloProvider } from "@apollo/client"
import { useApollo } from "src/apolloClient"
import "../styles/globals.scss"
import Nav from "../components/Nav/Nav"

function MyApp({ Component, pageProps }) {
  const client = useApollo()
  return (
    <ApolloProvider client={client}>
      <Nav />
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
