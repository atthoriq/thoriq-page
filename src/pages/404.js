import React from "react"
import {Link} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <>
  <SEO />
  <Layout>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist...</p>
    <p><Link to="/">Back to home</Link></p>
  </Layout>
  </>
)

export default NotFoundPage
