import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLink,
  faCalendarAlt,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons"

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
                <div
                  dangerouslySetInnerHTML={{ __html: pageContext.content }}
                />
                <div className="text-info m-2">
                  <FontAwesomeIcon icon={faArrowAltCircleRight} />{" "}
                  {pageContext.acf.tipo}
                </div>
                <div className="text-center">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="p-3 m-2 bg-info text-white rounded">
                        <FontAwesomeIcon icon={faCalendarAlt} /> Año:{" "}
                        {pageContext.acf.ano_desarrollo}
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="p-3 m-2 bg-info rounded">
                        <a
                          className="text-white"
                          href={pageContext.acf.url}
                          role="button"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FontAwesomeIcon icon={faLink} /> Visitar
                        </a>
                      </div>
                    </div>
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
