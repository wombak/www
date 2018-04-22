import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledSocialLink = styled.a`
  display: inline-block;
  width: 25px;
  height: 24px;
  margin: 0;
  opacity: 0.5;
  transition: opacity 0.25s ease-in-out;

  &:hover {
    opacity: 0.8;
  }

  .social-link-svg {
    max-width: 100%;
  }

  @media screen and (min-width: 600px) {
    width: 33px;
    height: 32px;
  }
`

const socialIcons = {
  github: (
    <svg
      className="social-link-svg"
      width="33"
      heigt="32"
      viewBox="0 0 33 32"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <path id="a" d="M0 0h32.579v31.775H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="b" fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <path
          d="M16.289 0C7.294 0-.001 7.294-.001 16.291c0 7.196 4.668 13.302 11.142 15.456.815.149 1.112-.353 1.112-.785 0-.387-.014-1.411-.022-2.771-4.531.985-5.487-2.183-5.487-2.183-.741-1.882-1.81-2.383-1.81-2.383-1.478-1.011.113-.99.113-.99 1.635.115 2.495 1.678 2.495 1.678 1.453 2.49 3.812 1.771 4.74 1.354.149-1.053.569-1.771 1.035-2.178-3.617-.411-7.42-1.808-7.42-8.051 0-1.778.635-3.232 1.677-4.371-.168-.412-.727-2.068.159-4.31 0 0 1.368-.439 4.48 1.67a15.56 15.56 0 0 1 4.078-.549c1.383.006 2.777.187 4.078.549 3.11-2.109 4.475-1.67 4.475-1.67.889 2.242.33 3.898.162 4.31 1.044 1.139 1.675 2.593 1.675 4.371 0 6.258-3.81 7.635-7.438 8.039.585.502 1.106 1.497 1.106 3.016 0 2.178-.02 3.935-.02 4.469 0 .435.293.942 1.12.783 6.467-2.158 11.13-8.26 11.13-15.454C32.58 7.294 25.287 0 16.29 0"
          fill="#FEFEFE"
          mask="url(#b)"
        />
      </g>
    </svg>
  ),
  twitter: (
    <svg
      className="social-link-svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm8.533-21.733c-.6.333-1.333.533-2 .6.734-.467 1.267-1.2 1.534-2.067-.667.4-1.4.733-2.267.933-.667-.733-1.533-1.2-2.533-1.2-1.934 0-3.534 1.667-3.534 3.8 0 .267 0 .6.067.867-2.933-.133-5.533-1.667-7.267-3.933-.333.533-.466 1.2-.466 1.933 0 1.333.6 2.467 1.533 3.133-.6 0-1.133-.2-1.6-.466v.066c0 1.8 1.2 3.334 2.8 3.734-.267.066-.6.133-.933.133-.2 0-.467 0-.667-.067.467 1.534 1.733 2.6 3.267 2.6-1.2 1-2.734 1.6-4.334 1.6-.266 0-.533 0-.866-.066 1.533 1.066 3.4 1.733 5.4 1.733 6.466 0 10-5.733 10-10.733V12.4c.8-.667 1.4-1.333 1.866-2.133z"
        fill="#FFF"
        fillOpacity="0.5"
      />
    </svg>
  ),
}

const SocialLink = ({ name, link, ...props }) => (
  <StyledSocialLink href={link} title={name} target="_blank" {...props}>
    {socialIcons[name]}
  </StyledSocialLink>
)

SocialLink.propTypes = {
  name: PropTypes.oneOf(['github', 'twitter']).isRequired,
  link: PropTypes.string.isRequired,
}

export default SocialLink
