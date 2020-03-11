import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"
import PortfolioList from "../components/PortfolioList"
import SEO from "../components/seo"

const Portafolio = ({ data }) => (
  <Layout>
    <SEO
      title="Portafolio"
      keywords={[
        `software developer`,
        `fullstack developer`,
        `software engineer`,
      ]}
    />

    <Header title={data.allWordpressPage.edges[0].node.title} />

    <section id="work" className="portfolio-mf sect-pt4 route">
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
        <PortfolioList />
      </div>
    </section>
  </Layout>
)

export default Portafolio

export const query = graphql`
  {
    allWordpressPage(filter: { slug: { eq: "portafolio" } }) {
      edges {
        node {
          title
          content
        }
      }
    }
  }
`
