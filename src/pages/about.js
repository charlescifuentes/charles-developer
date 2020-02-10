import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/">Home</Link>
  </Layout>
)

export default About

export const query = graphql`
  query {
    allWordpressPage(filter: {wordpress_id: {eq:16}}) {
      edges {
        node {
          title
          content
          wordpress_id
        }
      }
    }
  }
`
