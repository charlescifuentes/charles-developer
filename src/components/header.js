import { StaticQuery, graphql, Link } from "gatsby"
import React from "react"

const Header = () => (
  <StaticQuery
    query={graphql`
      query MyQuery {
        wordpressSiteMetadata {
          name
          description
        }
        wordpressMenusMenusItems(name: {eq: "Main Menu"}) {
          items {
            title
            slug
          }
        }
      }
    `}
    render={data => (
      <header
        style={{
          background: `rebeccapurple`,
          marginBottom: `1.45rem`,
        }}
      >
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1.45rem 1.0875rem`,
            display: `flex`,
            justifyContent: `space-between`,
            alignItems: `center`,
          }}
        >
          <div style={{ display: `block` }}>
            <h1 style={{ margin: 0 }}>
              <Link
                to="/"
                style={{
                  color: `white`,
                  textDecoration: `none`,
                }}
              >
                {data.wordpressSiteMetadata.name}
              </Link>
            </h1>
            <div style={{ color: `white` }}>{data.wordpressSiteMetadata.description}</div>
          </div>
          <ul style={{ listStyle: `none`, display: `flex`, margin: 0 }}>
            {data.wordpressMenusMenusItems.items.map(item => (
              <li key={item.slug} style={{ margin: `0 10px` }}>
                <Link
                  to={`/${item.slug}`}
                  style={{
                    color: `white`,
                    textDecoration: `none`,
                    fontFamily: `sans-serif`,
                  }}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
      </header>
    )}
  />
)

export default Header