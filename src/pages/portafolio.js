import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import backImg from '../images/web-developer-background.jpg'

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

    <div className="intro intro-single route bg-image" style={{ backgroundImage: `url(${backImg})` }}>
      <div className="overlay-mf"></div>
      <div className="intro-content display-table">
        <div className="table-cell">
          <div className="container">
            <h2 className="intro-title mb-4">Portafolio</h2>
          </div>
        </div>
      </div>
    </div>

    <section id="work" className="portfolio-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">
                Portfolio
            </h3>
              <p className="subtitle-a">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="work-box">
              <a href="img/work-1.jpg" data-lightbox="gallery-mf">
                <div className="work-img">
                  <img src="img/work-1.jpg" alt="" class="img-fluid" />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Lorem impsum dolor</h2>
                      <div className="w-more">
                        <span className="w-ctegory">Web Design</span> / <span class="w-date">18 Sep. 2018</span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <span className="ion-ios-plus-outline"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="work-box">
              <a href="img/work-2.jpg" data-lightbox="gallery-mf">
                <div className="work-img">
                  <img src="img/work-2.jpg" alt="" class="img-fluid" />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Loreda Cuno Nere</h2>
                      <div className="w-more">
                        <span className="w-ctegory">Web Design</span> / <span class="w-date">18 Sep. 2018</span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <span class="ion-ios-plus-outline"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="work-box">
              <a href="img/work-3.jpg" data-lightbox="gallery-mf">
                <div className="work-img">
                  <img src="img/work-3.jpg" alt="" className="img-fluid" />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div class="col-sm-8">
                      <h2 class="w-title">Mavrito Lana Dere</h2>
                      <div class="w-more">
                        <span class="w-ctegory">Web Design</span> / <span class="w-date">18 Sep. 2018</span>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="w-like">
                        <span class="ion-ios-plus-outline"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout >
)

export default Portafolio

export const query = graphql`
  {
      allWordpressPage(filter: {slug: {eq: "sobre-mi" } }) {
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
