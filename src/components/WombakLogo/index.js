import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const WombakSVG = ({ className }) => (
  <svg
    className={className}
    width="1148"
    viewBox="0 0 1148 591"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M576.208 192.55L349.921 591 0 0h1147.763L812.124 591 576.208 192.55z"
      fill="#F5E05B"
      fill-rule="evenodd"
    />
  </svg>
)

const StyledLogo = styled(WombakSVG)`
  display: block;
  width: 100%;
  margin: auto;
  max-height: 60vh;
  max-width: 80vw;
`

const WombakLogo = props => <StyledLogo {...props} />

export default WombakLogo
