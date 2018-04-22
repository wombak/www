import React, { createElement } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledTitle = styled.h1`
  text-transform: lowercase;
  font-weight: 700;
  font-size: 2em;
  line-height: 1.2;
  text-align: center;
  margin: 40px auto 0;
  position: relative;

  strong {
    font-weight: 900;
  }
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
