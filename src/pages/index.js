import React from 'react'
import PropTypes from 'prop-types'

import CoolBackground from 'components/CoolBackground'
import FadeIn from 'components/FadeIn'
import Footer from 'components/Footer'
import Header from 'components/Header'
import NewsletterForm from 'components/NewsletterForm'
import WombakLogo from 'components/WombakLogo'

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
