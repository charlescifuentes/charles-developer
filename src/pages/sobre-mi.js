import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import backImg from '../images/web-developer-background.jpg'

const SobreMi = ({ data }) => (
  <Layout>
    <SEO
      title="Sobre Mi"
      keywords={[
        `software developer`,
        `fullstack developer`,
        `software engineer`,
      ]}
    />

    <div className="intro intro-single route bg-image" style={{ backgroundImage: `url(${backImg})` }}>
      <div className="overlay-mf"></div>
      <div className="intro-content display-table">
        <div className="table-cell">
          <div className="container">
            <h2 className="intro-title mb-4">Sobre Mi</h2>
          </div>
        </div>
      </div>
    </div>

    <section id="about" className="about-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="box-shadow-full">
              <div className="row">
                <div className="col-md-6">
                  <div className="about-img">
                    <img src={data.allWordpressPage.edges[0].node.acf.about_me_picture.source_url} className="img-fluid rounded b-shadow-a" alt="" />
                  </div>
                  <div className="skill-mf">
                    <p className="title-s">Habilidades</p>
                    <span>HTML</span> <span class="pull-right">95%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{ width: "95%" }} aria-valuenow="85" aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                    <span>CSS3</span> <span class="pull-right">90%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{ width: "90%" }} aria-valuenow="75" aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                    <span>PHP</span> <span class="pull-right">90%</span>
                    <div className="progress">
                      <div class="progress-bar" role="progressbar" style={{ width: "90%" }} aria-valuenow="50" aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                    <span>JAVASCRIPT</span> <span class="pull-right">90%</span>
                    <div className="progress">
                      <div class="progress-bar" role="progressbar" style={{ width: "90%" }} aria-valuenow="90" aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                    <span>CODEIGNITER</span> <span class="pull-right">95%</span>
                    <div className="progress">
                      <div class="progress-bar" role="progressbar" style={{ width: "95%" }} aria-valuenow="90" aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                    <span>WORDPRESS</span> <span class="pull-right">90%</span>
                    <div className="progress">
                      <div class="progress-bar" role="progressbar" style={{ width: "90%" }} aria-valuenow="90" aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                    <span>REACT.JS</span> <span class="pull-right">85%</span>
                    <div className="progress">
                      <div class="progress-bar" role="progressbar" style={{ width: "90%" }} aria-valuenow="85" aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                    <span>NODE.JS</span> <span class="pull-right">80%</span>
                    <div className="progress">
                      <div class="progress-bar" role="progressbar" style={{ width: "90%" }} aria-valuenow="80" aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-me pt-4 pt-md-0">
                    <p className="lead" dangerouslySetInnerHTML={{ __html: data.allWordpressPage.edges[0].node.acf.about_me_description }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default SobreMi

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
