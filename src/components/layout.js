import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./style.css"
import { Container } from "reactstrap"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
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
