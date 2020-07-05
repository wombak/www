import React from 'react';
import styled from 'styled-components';
import { Github, Linkedin } from '@styled-icons/fa-brands';
import { color, bp } from '../../theme';

export type ContactDetailsVariant = 'light' | 'dark';

interface Props {
  variant?: ContactDetailsVariant;
}

const ContactDetailsWrapper = styled.address<Props>`
  display: inline-block;
  color: ${({ variant }) => (variant === 'light' ? color.light : color.dark)};
  font-style: normal;
  text-align: center;
  @media screen and (min-width: ${bp.tablet}) {
    text-align: right;
  }
`;

const ContactLink = styled.a`
  display: inline-block;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 15px;
  text-decoration: none;
`;

const EmailAddress = styled.a`
  color: inherit;
  font-size: 15px;
  font-weight: bold;
  text-decoration: none;
`;

const GithubIcon = styled(Github)<Props>`
  color: ${({ variant }) => (variant === 'light' ? color.primary : color.dark)};
`;

const LinkedinIcon = styled(Linkedin)<Props>`
  color: ${({ variant }) => (variant === 'light' ? color.primary : color.dark)};
`;

const Address = styled.p`
  font-size: 10px;
`;

const Tlf = styled.a`
  display: inline-block;
  font-size: 10px;
  font-weight: bold;
  text-decoration: none;
  color: inherit;
  margin-bottom: 10px;
`;

const Separator = styled.span`
  margin-left: 10px;
  margin-right: 10px;
`;

export const ContactDetails: React.FC<Props> = ({ variant }) => (
  <ContactDetailsWrapper variant={variant}>
    <EmailAddress href="mailto:hi@wombak.xyz">hi@wombak.xyz</EmailAddress>
    <div>
      <ContactLink href="https://github.com/wombak" target="_blank">
        <GithubIcon size="21" variant={variant} />
      </ContactLink>
      <ContactLink
        href="https://www.linkedin.com/company/wombak/"
        target="_blank"
      >
        <LinkedinIcon size="21" variant={variant} />
      </ContactLink>
    </div>
    <Address>
      <Tlf href="tel:+34968000000">+34 968 00 00 00</Tlf>
      <Separator>/</Separator>
      <Tlf href="tel:+34619479705">+34 619 47 97 05</Tlf>
      <br />
      Calle Plateria, 29 2
      <br />
      Murcia 30001
      <br />
      Spain
      <br />
    </Address>
  </ContactDetailsWrapper>
);
