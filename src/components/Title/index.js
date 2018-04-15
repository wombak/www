import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

const Title = ({ component = 'h1', className = '', children, ...props }) =>
  React.createElement(
    component,
    { className: `title ${className}`, ...props },
    children
  )

Title.propTypes = {
  component: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
}

export default Title
