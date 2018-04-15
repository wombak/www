import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

const Form = ({ className = '', children, ...props }) => (
  <form className={`form ${className}`} {...props}>
    {children}
  </form>
)

Form.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

export default Form
