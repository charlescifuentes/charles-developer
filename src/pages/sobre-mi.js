import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from 'reactstrap'

const SobreMi = ({ data }) => (
  <Layout>
    <SEO title="Sobre Mi" keywords={[`software developer`, `fullstack developer`, `software engineer`]} />
    <Container>
      <h1>{data.allWordpressPage.edges[0].node.title}</h1>
      <div dangerouslySetInnerHTML={{__html: data.allWordpressPage.edges[0].node.content}} />
    </Container>
  </Layout>
)

export default SobreMi

export const query = graphql`
  query {
    allWordpressPage(filter: {slug: {eq:"sobre-mi"}}) {
      edges {
        node {
          title
          content
          slug
        }
      }
    }
  }
`