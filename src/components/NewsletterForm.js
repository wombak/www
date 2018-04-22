import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Form from 'components/Form'
import { InputWithButton } from 'components/Input'
import RocketIcon from 'components/RocketIcon'

const StyledForm = styled(Form)`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
`

const NewsletterHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 17px;
  text-align: center;
`

const StyledRocket = styled(RocketIcon)`
  width: 40px;
  margin-right: 16px;
  margin-left: -16px;

  path {
    fill: #fff;
  }
`

const NewsletterHeading = styled.h3`
  margin: 0 0 3px;
  font-size: 16px;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
`

const NewsletterSubHeading = styled.p`
  margin: 0;
  font-size: 13px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`

const NewsletterForm = ({ formAction }) => (
  <StyledForm action={formAction} method="post" target="_blank">
    <NewsletterHeader>
      <StyledRocket />
      <div>
        <NewsletterHeading>Don't miss the launch!</NewsletterHeading>
        <NewsletterSubHeading>Sign up for our newsletter</NewsletterSubHeading>
      </div>
    </NewsletterHeader>
    <InputWithButton
      buttonLabel="Lemme know!"
      type="email"
      placeholder="spacecadet764@email.com"
      name="EMAIL"
    />
  </StyledForm>
)

NewsletterForm.propTypes = {
  formAction: PropTypes.string,
}

export default NewsletterForm
