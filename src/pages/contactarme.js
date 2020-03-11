import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import backImg from "../images/web-developer-background.jpg"

const Contactarme = ({ data }) => (
  <Layout>
    <SEO
      title="Contactarme"
      keywords={[
        `software developer`,
        `fullstack developer`,
        `software engineer`,
      ]}
    />

    <div
      className="intro intro-single route bg-image"
      style={{ backgroundImage: `url(${backImg})` }}
    >
      <div className="overlay-mf"></div>
      <div className="intro-content display-table">
        <div className="table-cell">
          <div className="container">
            <h2 className="intro-title mb-4">Contactarme</h2>
          </div>
        </div>
      </div>
    </div>

    <section id="about" className="about-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h2>Here will be the Contact Page</h2>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default Contactarme

export const query = graphql`
  {
    allWordpressPage(filter: { slug: { eq: "sobre-mi" } }) {
      edges {
        node {
          title
          content
          acf {
            about_me_description
            about_me_picture {
              source_url
            }
          }
        }
      }
    }
  }
`
