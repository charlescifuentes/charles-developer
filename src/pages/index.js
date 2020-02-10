import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`software developer`, `fullstack developer`, `software engineer`]} />
    <h1>{data.allWordpressPage.edges[0].node.title}</h1>
    <div dangerouslySetInnerHTML={{__html: data.allWordpressPage.edges[0].node.content}} />
    <hr />
    <h1 style={{textDecorationLine: 'underline', textDecorationStyle: 'double'}}>Últimos Post</h1>
    <ul style={{ listStyle: "none" }}>
      {data.allWordpressPost.edges.map(post => (
        <li style={{ padding: "20px 0", borderBottom: "1px solid #ccc" }}>
          <Link
            to={`/post/${post.node.slug}`}
            style={{ display: "flex", color: "black", textDecoration: "none" }}
          >
            <img src={post.node.featured_media.source_url} style={{ width: "25%", marginRight: 20 }} alt="" />
            <div style={{ width: "75%" }}>
              <h3
                dangerouslySetInnerHTML={{ __html: post.node.title }}
                style={{ marginBottom: 0 }}
              />
              <p style={{ margin: 0, color: "grey" }}>
                Written by {post.node.author} on {post.node.date}
              </p>
              <div dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allWordpressPage(filter: {slug: {eq:"inicio"}}) {
      edges {
        node {
          title
          content
          slug
        }
      }
    }
    allWordpressPost {
      edges {
        node {
          title
          excerpt
          slug
          author
          date(formatString: "MMMM DD, YYYY")
          featured_media {
            source_url
          }
        }
      }
    }
  }
`
