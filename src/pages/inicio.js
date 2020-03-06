import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from "reactstrap"
import IntroImg from "../images/gatsby-astronaut.png"

const Inicio = ({ data }) => (
  <Layout>
    <SEO
      title="Inicio"
      keywords={[
        `software developer`,
        `fullstack developer`,
        `software engineer`,
      ]}
    />
    <div
      id="home"
      className="intro route bg-image"
      style={{ backgroundImage: `url(${IntroImg})` }}
    >
      <div className="overlay-itro"></div>
      <div className="intro-content display-table">
        <div className="table-cell">
          <div className="container">
            <h1 className="intro-title mb-4">I am Morgan Freeman</h1>
            <p className="intro-subtitle">
              <span className="text-slider-items">
                CEO DevFolio,Web Developer,Web Designer,Frontend
                Developer,Graphic Designer
              </span>
              <strong className="text-slider"></strong>
            </p>
          </div>
        </div>
      </div>
    </div>
    <Container className="themed-container" fluid={true}>
      <h1>{data.allWordpressPage.edges[0].node.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: data.allWordpressPage.edges[0].node.content,
        }}
      />
    </Container>
    <hr />
    <section>
      <Container>
        <Row>
          <h1
            style={{
              textDecorationLine: "underline",
              textDecorationStyle: "double",
            }}
          >
            Últimos Post
          </h1>
          <ul style={{ listStyle: "none" }}>
            {data.allWordpressPost.edges.map(post => (
              <li style={{ padding: "20px 0", borderBottom: "1px solid #ccc" }}>
                <Link
                  to={`/post/${post.node.slug}`}
                  style={{
                    display: "flex",
                    color: "black",
                    textDecoration: "none",
                  }}
                >
                  <Col xs="6" md="4">
                    <img
                      src={post.node.featured_media.source_url}
                      alt=""
                      className="blog-featured-image"
                    />
                  </Col>
                  <Col xs="6" md="8">
                    <h3 dangerouslySetInnerHTML={{ __html: post.node.title }} />
                    <p style={{ color: "grey" }}>
                      Written by {post.node.author} on {post.node.date}
                    </p>
                    <div
                      dangerouslySetInnerHTML={{ __html: post.node.excerpt }}
                    />
                  </Col>
                </Link>
              </li>
            ))}
          </ul>
        </Row>
      </Container>
    </section>
  </Layout>
)

export default Inicio

export const query = graphql`
  query {
    allWordpressPage(filter: { slug: { eq: "inicio" } }) {
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
          content
          excerpt
          author
          slug
          date(formatString: "DD MM YYYY")
          featured_media {
            source_url
          }
        }
      }
    }
  }
`
