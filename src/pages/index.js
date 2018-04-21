import React from 'react'
import PropTypes from 'prop-types'
import {
  WombakLogo,
  Header,
  InputButton,
  Footer,
  Form,
  CoolBackground,
} from '../components'
import Link from 'gatsby-link'

import './index.css'

const footerLinks = [
  {
    name: 'github',
    link: 'https://github.com/wombak',
  },
]

const IndexPage = () => (
  <div>
    <WombakLogo />
    <Header />
    <Form action={process.env.GATSBY_NEWSLETTER_URL || ''} method="post">
      <p>Sign up to our newsletter!</p>
      <InputButton
        label="submit"
        type="email"
        placeholder="your@email.com"
        name="EMAIL"
      />
    </Form>
    <Footer links={footerLinks} />
    <CoolBackground />
  </div>
)

export default IndexPage
