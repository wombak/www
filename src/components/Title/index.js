import React, { createElement } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledTitle = styled.h1`
  text-transform: lowercase;
  font-weight: 900;
  font-size: 2em;
  text-align: center;
  margin: 40px auto 20px;
  position: relative;
`

const Title = ({ children, is = 'h1', ...props }) => {
  const titleEl = StyledTitle.withComponent(is)
  return createElement(titleEl, { ...props }, children)
}

Title.propTypes = {
  is: PropTypes.string,
  children: PropTypes.node,
}

export default Title
