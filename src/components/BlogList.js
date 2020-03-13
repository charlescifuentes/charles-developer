import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"

const BlogList = () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressPost {
          edges {
            node {
              title
              content
              excerpt
              author
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
    `}
    render={data => (
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
                    <h6 className="category">{post.node.categories[0].name}</h6>
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
                  <div>Written on: </div>
                  <span className="ion-ios-clock-outline"> </span>
                  <div dangerouslySetInnerHTML={{ __html: post.node.date }} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )}
  />
)

export default BlogList
