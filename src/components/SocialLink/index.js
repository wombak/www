import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const SocialLink = ({ name, link, className = '', ...props }) => (
  <a className={`social-media ${name}`} href={link} {...props}>
    {name}
  </a>
)

SocialLink.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default SocialLink
