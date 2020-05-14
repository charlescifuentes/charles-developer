import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

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
      style={{
        backgroundImage: `url(${data.allWordpressPage.edges[0].node.acf.header_background_image.source_url})`,
      }}
    >
      <div className="overlay-itro"></div>
      <div className="intro-content display-table">
        <div className="table-cell">
          <div className="container">
            <h1 className="intro-title mb-4">
              {data.allWordpressPage.edges[0].node.acf.header_title}
            </h1>
            <p className="intro-subtitle">
              {data.allWordpressPage.edges[0].node.acf.header_subtitle}
              <strong className="text-slider"></strong>
            </p>
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
                  <div className="row">
                    <div className="col-sm-6 col-md-5">
                      <div className="about-img">
                        <img
                          src={
                            data.allWordpressPage.edges[0].node.acf
                              .about_picture.source_url
                          }
                          className="img-fluid rounded b-shadow-a"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-7">
                      <div className="about-info">
                        <p>
                          <span className="title-s">Name: </span>{" "}
                          <span>Charles Cifuentes</span>
                        </p>
                        <p>
                          <span className="title-s">Profile: </span>{" "}
                          <span>Fullstack Developer</span>
                        </p>
                        <p>
                          <span className="title-s">Email: </span>{" "}
                          <span>charlescifuentes@gmail.com</span>
                        </p>
                        <p>
                          <span className="title-s">Phone: </span>{" "}
                          <span>(57) 3174015113</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <h5 className="title-left">Sobre Mi</h5>
                    </div>
                    <p
                      className="lead"
                      dangerouslySetInnerHTML={{
                        __html:
                          data.allWordpressPage.edges[0].node.acf
                            .about_description,
                      }}
                    />
                    <Link to="/sobre-mi">
                      <button type="button" class="btn btn-info">
                        Ver Más
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="blog" className="blog-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Blog</h3>
              <p className="subtitle-a">
                Artículos recientes sobre tecnologías para desarrollo de
                software
              </p>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="row">
          {data.allWordpressPost.edges.map(post => (
            <div className="col-md-4">
              <div className="card card-blog">
                <div className="card-img">
                  <Link to={`/post/${post.node.slug}`}>
                    <img
                      src={post.node.featured_media.source_url}
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="card-body">
                  <div className="card-category-box">
                    <div className="card-category">
                      <h6 className="category">
                        {post.node.categories[0].name}
                      </h6>
                    </div>
                  </div>
                  <h3 className="card-title">
                    <Link
                      to={`/post/${post.node.slug}`}
                      dangerouslySetInnerHTML={{ __html: post.node.title }}
                    />
                  </h3>
                  <p
                    className="card-description"
                    dangerouslySetInnerHTML={{ __html: post.node.excerpt }}
                  />
                </div>
                <div className="card-footer">
                  <div className="post-date">
                    <div>Escrito el: </div>
                    <span className="ion-ios-clock-outline"> </span>
                    <div dangerouslySetInnerHTML={{ __html: post.node.date }} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
)

export default Inicio

export const query = graphql`
  {
    allWordpressPage(filter: { slug: { eq: "inicio" } }) {
      edges {
        node {
          acf {
            header_title
            header_subtitle
            header_background_image {
              source_url
            }
            about_description
            about_picture {
              source_url
            }
            about_name
            about_profile
            about_email
            about_phone
          }
        }
      }
    }
    allWordpressPost {
      edges {
        node {
          title
          content
          excerpt
          slug
          date(formatString: "DD MM YYYY")
          featured_media {
            source_url
          }
          categories {
            name
          }
        }
      }
    }
  }
`
