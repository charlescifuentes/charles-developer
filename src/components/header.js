import { StaticQuery, graphql, Link } from "gatsby"
import React, { useState } from "react"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <StaticQuery
      query={graphql`
        {
          wordpressSiteMetadata {
            name
            description
          }
          wordpressMenusMenusItems(name: { eq: "Main Menu" }) {
            items {
              title
              url
            }
          }
        }
      `}
      render={data => (
        <nav
          className="navbar navbar-b navbar-trans navbar-expand-md fixed-top"
          id="mainNav"
        >
          <div className="container">
            <Link to="/" className="navbar-brand js-scroll">
              {data.wordpressSiteMetadata.name}
            </Link>
            <button
              class="navbar-toggler collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#navbarDefault"
              aria-controls="navbarDefault"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div
              className="navbar-collapse collapse justify-content-end"
              id="navbarDefault"
            >
              <ul className="navbar-nav">
                {data.wordpressMenusMenusItems.items.map(item => (
                  <li class="nav-item" key={item.url}>
                    <Link
                      to={`/${item.url}`}
                      className="nav-link js-scroll active"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      )}
    />
  )
}

export default Header
