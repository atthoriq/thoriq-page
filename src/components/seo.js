/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

import icon from "../images/thoriq-icon.ico"

function SEO({lang, title }) {

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      link={
        [{rel: 'icon', type: 'image/ico', size: '64x64', href: `${icon}`}]
      }
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default SEO
