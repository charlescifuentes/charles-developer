import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"

const PortfolioList = () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressWpPortfolio {
          edges {
            node {
              title
              content
              featured_media {
                source_url
              }
              categories {
                name
              }
              slug
            }
          }
        }
      }
    `}
    render={data => (
      <div className="row">
        {data.allWordpressWpPortfolio.edges.map(portfolio => (
          <div className="col-md-4">
            <div className="work-box">
              <div className="work-img">
                <Link to={`/portfolio/${portfolio.node.slug}`}>
                  <img
                    src={portfolio.node.featured_media.source_url}
                    alt=""
                    class="img-fluid"
                  />
                </Link>
              </div>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <Link to={`/portfolio/${portfolio.node.slug}`}>
                      <h2 className="w-title">{portfolio.node.title}</h2>
                    </Link>
                    <div className="w-more">
                      <span className="w-ctegory">
                        {portfolio.node.categories[0].name}
                      </span>{" "}
                      /{" "}
                      <span
                        class="w-date"
                        dangerouslySetInnerHTML={{
                          __html: portfolio.node.content,
                        }}
                      ></span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="w-like">
                      <span className="ion-ios-plus-outline"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )}
  />
)

export default PortfolioList
