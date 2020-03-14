import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"
import BlogList from "../components/BlogList"
import SEO from "../components/seo"

const Blog = ({ data }) => (
  <Layout>
    <SEO
      title="Blog"
      keywords={[
        `software developer`,
        `fullstack developer`,
        `software engineer`,
      ]}
    />

    <Header title={data.allWordpressPage.edges[0].node.title} />

    <section id="blog" className="blog-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <p
                className="display-5"
                dangerouslySetInnerHTML={{
                  __html: data.allWordpressPage.edges[0].node.content,
                }}
              />
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <BlogList />
      </div>
    </section>
  </Layout>
)

export default Blog

export const query = graphql`
  {
    allWordpressPage(filter: { slug: { eq: "blog" } }) {
      edges {
        node {
          title
          content
        }
      }
    }
  }
`
