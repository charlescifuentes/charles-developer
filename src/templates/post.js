import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from "reactstrap"

export default ({ pageContext }) => (
  <Layout>
    <SEO title={pageContext.title} description={pageContext.excerpt} />
    <Container>
      <Row>
        <Col>
          <h1 className="blog-title">{pageContext.title}</h1>
          <p className="blog-date">Written on {pageContext.date}</p>
          <img
            src={pageContext.featured_media.source_url}
            alt=""
            className="blog-featured-image"
          />
          <div
            style={{ marginTop: 20 }}
            dangerouslySetInnerHTML={{ __html: pageContext.content }}
          />
        </Col>
      </Row>
    </Container>
  </Layout>
)
