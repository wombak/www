import React from 'react';
import styled from 'styled-components';
import { ContactDetails } from '../ContactDetails';
import { Logo } from '../Logo';
import { color, bp } from '../../theme';

export type FooterVariant = 'light' | 'dark';

interface Props {
  variant?: FooterVariant;
}

const FooterWrapper = styled.div<Props>`
  position: relative;
  color: ${({ variant }) => (variant === 'light' ? color.dark : color.light)};
  padding-left: 20px;
  padding-right: 20px;
  height: 340px;
  background-color: ${({ variant }) =>
    variant === 'light' ? color.primary : color.dark};
`;

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 165px;
  @media screen and (min-width: ${bp.tablet}) {
    align-items: flex-end;
  }
`;

const Copyright = styled.p`
  position: absolute;
  text-align: center;
  margin: 0 auto;
  font-size: 8px;
  bottom: 10px;
  left: 0;
  right: 0;
  @media screen and (min-width: ${bp.tablet}) {
    margin: 0;
  }
`;

const FooterLogo = styled(Logo)`
  position: absolute;
  max-width: 60%;
  width: 450px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  pointer-events: none;
  backface-visibility: hidden;
  @media screen and (min-width: ${bp.tablet}) {
    left: initial;
    right: initial;
    margin: 0;
  }
`;

export const Footer: React.FC<Props> = ({ variant = 'light' }) => (
  <FooterWrapper variant={variant}>
    <FooterLogo />
    <ContactWrapper>
      <ContactDetails variant={variant === 'light' ? 'dark' : 'light'} />
    </ContactWrapper>
    <Copyright>{`Copyright © ${new Date().getFullYear()} Wombak`}</Copyright>
  </FooterWrapper>
);
