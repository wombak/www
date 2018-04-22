import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import SocialLink from '../SocialLink'

const StyledFooter = styled.footer`
  position: fixed;
  top: 10px;
  right: 10px;

  @media screen and (min-width: 600px) {
    top: 20px;
    right: 20px;
  }
`

const Footer = ({ links = [] }) => (
  <StyledFooter>
    {links.map((link, key) => <SocialLink key={key} {...link} />)}
  </StyledFooter>
)

Footer.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape(SocialLink.propTypes)),
}

export default Footer
