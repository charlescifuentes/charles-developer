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

    <Header title={data.allWordpressPost.edges[0].node.title} />

    <section id="blog" className="blog-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Blog</h3>
              <p className="subtitle-a">
                Artículos recientes sobre tecnologías para desarrollo de
                software
              </p>
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
    allWordpressPost {
      edges {
        node {
          title
          content
          excerpt
          author
          slug
          date(formatString: "DD MM YYYY")
          featured_media {
            source_url
          }
          categories {
            name
          }
        }
      }
    }
  }
`
