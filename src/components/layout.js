/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import SEO from "../components/seo"
import "./layout.css"

const Layout = ({ children }) => {

  return (
    <>
      <SEO title={`At Thoriq`}/>
      <div
        style={{
          margin: `0 auto`,
          width: `60%`,
          paddingTop: `15%`,
        }}
      >
        <main
          style={{
            color: `#F4EFD3`
          }}
        >{children}</main>
      </div>
      <footer
        style={{
          backgroundColor: `#e5dfdf`,
          fontSize: `13px`,
          textAlign: `center`,
          padding: `1%`,
          bottom: 0,
          position: `fixed`,
          width: `100%`,
          margin: 0,
        }}
      >
        © {new Date().getFullYear()}, Built with
        {` ❤️ `} in Jakarta.
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
