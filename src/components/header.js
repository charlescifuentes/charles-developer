import { StaticQuery, graphql, Link } from "gatsby"
import React, {useState } from "react"
import { Container, Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)
  
  return(
    <StaticQuery
      query={graphql`
        {
          wordpressSiteMetadata {
            name
            description
          }
          wordpressMenusMenusItems(name: {eq: "Main Menu"}) {
            items {
              title
              url
            }
          }
        }
      `}
      render={data => (
        <header>
            <Navbar color="primary" expand="md" className="navbar-dark">
            <Container>
              <Link to="/" className="navbar-brand">{data.wordpressSiteMetadata.name}</Link>
              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                {data.wordpressMenusMenusItems.items.map(item => (
                  <NavItem key={item.url}>
                    <Link to={`/${item.url}`} className="nav-link">{item.title}</Link>
                  </NavItem>
                  ))}
                </Nav>
              </Collapse>
              </Container>
            </Navbar>
        </header>
      )}
  />
  )
}

export default Header