import { StaticQuery, graphql, Link } from "gatsby"
import React, { useState, useEffect } from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Container,
} from "reactstrap"

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isReduced, setReduced] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(true)

  const toggle = () => {
    setIsOpen(!isOpen)
    setIsCollapsed(!isCollapsed)
  }

  const navBarReduce = () => {
    const pixels = 50

    if (window.scrollY > pixels) {
      setReduced(true)
    } else {
      setReduced(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", navBarReduce)

    return () => window.removeEventListener("scroll", navBarReduce)
  })

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
        <div>
          <Navbar
            className={`navbar navbar-b navbar-expand-md fixed-top ${
              isOpen ? "navbar-reduce" : ""
            } ${isReduced ? "navbar-reduce" : "navbar-trans"}`}
          >
            <Container>
              <Link to="/" className="navbar-brand js-scroll">
                {data.wordpressSiteMetadata.name}
              </Link>
              <NavbarToggler
                className={`${isCollapsed ? "collapsed" : ""}`}
                data-toggle="collapse"
                data-target="#navbarDefault"
                aria-controls="navbarDefault"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={toggle}
              >
                <span></span>
                <span></span>
                <span></span>
              </NavbarToggler>
              <Collapse
                isOpen={isOpen}
                navbar
                className="justify-content-end"
                id="navbarDefault"
              >
                <Nav navbar>
                  {data.wordpressMenusMenusItems.items.map(item => (
                    <NavItem key={item.url}>
                      <Link to={`/${item.url}`} className="nav-link js-scroll">
                        {item.title}
                      </Link>
                    </NavItem>
                  ))}
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
        </div>
      )}
    />
  )
}

export default NavBar
