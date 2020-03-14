import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"

const PortfolioList = () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressWpPortfolio {
          edges {
            node {
              acf {
                ano_desarrollo
                tipo
                url
              }
              excerpt
              title
              slug
              featured_media {
                source_url
              }
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
                <Link to={`/portfolio/${portfolio.node.slug}`}>
                  <h2 className="w-title">{portfolio.node.title}</h2>
                </Link>
                <div className="w-more">
                  <span className="w-ctegory">
                    >> {portfolio.node.acf.tipo}
                  </span>
                  <span
                    class="w-date"
                    dangerouslySetInnerHTML={{
                      __html: portfolio.node.excerpt,
                    }}
                  ></span>
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
