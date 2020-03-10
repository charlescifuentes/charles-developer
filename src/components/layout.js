import React from "react"
import PropTypes from "prop-types"

import NavBar from "./navbar"
import "./style.css"
import { Container } from "reactstrap"

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <footer>
        <Container>
          <div className="text-white p-3">
            © Charles Developer - {new Date().getFullYear()}, Built with the
            JAMStack
          </div>
        </Container>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
