import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: 'description',
          content: 'We are a digital cooperative with a profound skillset in and around JavaScript.',
        },
        {
          name: 'keywords',
          content:
            'digital agency, javascript, development, html5, html, CSS, mvp, digital products',
        },
      ]}
    />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 1200,
        padding: '0 1.0875rem 1.45rem',
      }}
    >
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
