import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"

export default ({ pageContext }) => (
  <Layout>
    <SEO title={pageContext.title} description={pageContext.excerpt} />
    <Header title={pageContext.title} />

    <section id="work" className="portfolio-mf sect-pt4 route">
      <div className="container">
        <div className="box-shadow-full">
          <div className="row">
            <div className="col-sm-6">
              <div className="work-img">
                <img
                  src={pageContext.featured_media.source_url}
                  alt=""
                  class="img-fluid"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="work-content">
                <p dangerouslySetInnerHTML={{ __html: pageContext.content }} />
                <div>Año: {pageContext.acf.ano_desarrollo}</div>
                <div>
                  <a
                    className="btn btn-primary text-white"
                    href={pageContext.acf.url}
                    role="button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visitar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)
