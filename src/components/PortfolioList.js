import React from 'react'
import { graphql } from 'gatsby'

const PortfolioList = ({ data }) => (
    <div className="row">
        {data.allWordpressWpPortfolio.edges.map(portfolio => (
            <div className="col-md-4">
                <div className="work-box">
                    <a href="img/work-1.jpg" data-lightbox="gallery-mf">
                        <div className="work-img">
                            <img src="img/work-1.jpg" alt="" class="img-fluid" />
                        </div>
                        <div className="work-content">
                            <div className="row">
                                <div className="col-sm-8">
                                    <h2 className="w-title">{portfolio.node.title}</h2>
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
        ))}
    </div >
)

export default PortfolioList

export const query = graphql`
{
    allWordpressWpPortfolio {
      edges {
        node {
          title
          content
          featured_media {
            source_url
          }
        }
      }
    }
  }  
`