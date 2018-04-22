import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledForm = styled.form`
  max-width: 400px;
  margin: auto;
`

const Form = ({ children, ...props }) => (
  <StyledForm {...props}>{children}</StyledForm>
)

Form.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

export default Form
