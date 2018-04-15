import React from 'react'
import PropTypes from 'prop-types'
import SocialLink from '../SocialLink'
import './index.css'

const Footer = ({ links = [] }) => (
  <div className="footer">{links.map(link => <SocialLink {...link} />)}</div>
)

Footer.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape(SocialLink.propTypes)),
}

export default Footer
