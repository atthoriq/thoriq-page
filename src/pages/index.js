import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons'

import Layout from "../components/layout"

import './index.css'

const IndexPage = () => (
  <Layout>
    <div className='hello-text hi'>
      Hi! It's me
    </div>
    <div className='hello-text name'>
      At Thoriq
    </div>

    <div className='desc-text'>
      <p>
        {`I'm a computer science student,
          currently exploring web development both back and frontend fields, 
          and I love to talk about human interaction and education topics.
        `}
      </p>
    </div>
    <div className='soc-med'>
      <a href="https://www.linkedin.com/in/muhammad-at-thoriq/" target="_blank">
        <FontAwesomeIcon icon={faLinkedinIn} size="2x"/>
      </a>
      <a href="https://github.com/atthoriq" target="_blank">
        <FontAwesomeIcon icon={faGithub} size="2x"/>
      </a>
      <a href="https://medium.com/@atthareq" target="_blank">
        <FontAwesomeIcon icon={faMedium} size="2x"/>
      </a>
    </div>
  </Layout>
)

export default IndexPage
