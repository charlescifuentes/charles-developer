import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({pageContext}) => (
  <>
    <Layout>
      <SEO 
        title={pageContext.title}
        description={pageContext.excerpt} 
      />
      <h1>{pageContext.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: pageContext.content }}
      />
    </Layout>
  </>
)