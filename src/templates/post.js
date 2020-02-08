import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({pageContext}) => (
  <Layout>
    <SEO 
      title={pageContext.title}
      description={pageContext.excerpt} 
    />
    <h1>{pageContext.title}</h1>
    <img src={pageContext.featured_media.source_url} />
    <p>Written by ___ on {pageContext.date}</p>
    <div
      style={{ marginTop: 20 }}
      dangerouslySetInnerHTML={{ __html: pageContext.content }}
    />
  </Layout>
)