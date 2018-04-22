import React from 'react'
import PropTypes from 'prop-types'
import {
  WombakLogo,
  Header,
  Footer,
  CoolBackground,
  NewsletterForm,
} from '../components'
import FadeIn from '../components/FadeIn'
import Link from 'gatsby-link'

const footerLinks = [
  {
    name: 'github',
    link: 'https://github.com/wombak',
  },
]

const IndexPage = () => (
  <div>
    <WombakLogo />
    <FadeIn>
      <Header />
      <NewsletterForm formAction={process.env.GATSBY_NEWSLETTER_URL || ''} />
      <Footer links={footerLinks} />
    </FadeIn>
    <CoolBackground />
  </div>
)

export default IndexPage
