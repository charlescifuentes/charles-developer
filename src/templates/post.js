import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"

export default ({ pageContext }) => (
  <Layout>
    <SEO title={pageContext.title} description={pageContext.excerpt} />
    <Header title={pageContext.title} />

    <section className="blog-wrapper sect-pt4" id="blog">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="post-box">
              <div className="post-thumb">
                <img
                  src={pageContext.featured_media.source_url}
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="article-content">
                <p dangerouslySetInnerHTML={{ __html: pageContext.content }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)
