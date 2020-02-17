import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./style.css"
import { Container } from 'reactstrap'

const Layout = ({ children }) => {

  return (
    <>
      <Header />
      <div>
        <main className="py-3">{children}</main>
      </div>
      <footer className="bg-primary">
        <Container>
          <div className="text-white p-3">
            © Charles Developer - {new Date().getFullYear()}, Built with the JAMStack
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
