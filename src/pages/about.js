import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
export default ({ data }) => (
    <Layout>
        <h1>Lets Talk About How {data.site.siteMetadata.title}</h1>
        <p>
            Sci-Fi is the best genre ever! And this site is going to tell you all about it! "Engage!"
    </p>
    </Layout>
)
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`