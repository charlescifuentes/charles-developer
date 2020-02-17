import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from 'reactstrap'

const SobreMi = ({ data }) => (
  <Layout>
    <SEO title="Sobre Mi" keywords={[`software developer`, `fullstack developer`, `software engineer`]} />
    <Container>
      <h1>{data.allWordpressPage.edges[0].node.title}</h1>
      <Row>
        <Col md="8" className="d-flex align-items-center">
          <p dangerouslySetInnerHTML={{__html: data.allWordpressPage.edges[0].node.acf.about_me_description}} />
        </Col>
        <Col md="4">
          <img src={data.allWordpressPage.edges[0].node.acf.about_me_picture.source_url} className="profile-img" alt="Profile Pic"></img>
        </Col>
      </Row>
      <hr />
      <h2 className="text-primary">Skills</h2>
      <Row>
        <Col md="6">
          <p>HTML5</p>
          <div className="skills-wrap">
            <div className="skills html">95%</div>
          </div>

          <p>CSS3</p>
          <div className="skills-wrap">
            <div className="skills css">90%</div>
          </div>

          <p>JavaScript</p>
          <div className="skills-wrap">
            <div className="skills js">90%</div>
          </div>

          <p>Php</p>
          <div className="skills-wrap">
            <div className="skills php">90%</div>
          </div>

          <p>MySQL</p>
          <div className="skills-wrap">
            <div className="skills mysql">88%</div>
          </div>
        </Col>
        <Col md="6" className="text-center">
          <img src={data.allWordpressPage.edges[0].node.acf.skills_image.source_url} alt="Skills Pic"/>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default SobreMi

export const query = graphql`
  {
    allWordpressPage {
      edges {
        node {
          title
          acf {
            about_me_description
            about_me_picture {
              source_url
            }
            skills_image {
              source_url
            }
          }
        }
      }
    }
  }
`