import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

const Input = ({
  type = 'text',
  placeholder = '',
  className = '',
  children,
  ...props
}) => (
  <div className={`inputField ${className}`}>
    <input type={type} placeholder={placeholder} {...props} />
    {children}
  </div>
)

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
}

export const InputButton = ({ label, onClick, ...props }) => (
  <Input {...props}>
    <button className="button">{label}</button>
  </Input>
)

export default Input
