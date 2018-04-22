import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledForm = styled.form`
  width: 400px;
  max-width: 100%;
  margin: auto;
  padding: 0 10px;
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
