import React from 'react';
import styled from 'styled-components';
import { Logo } from '..';
import { color, bp } from '../../theme';
import { MenuButton } from './MenuButton';

export type HeaderVariant = 'light' | 'dark';

interface Props {
  variant?: HeaderVariant;
}

const HeaderWrapper = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  height: 80px;
  padding: 0px 10px;
  background-color: ${({ variant }) =>
    variant === 'light' ? color.light : color.dark};

  @media screen and (min-width: ${bp.tablet}) {
    padding: 0px 40px;
  }
`;

const WombakLogo = styled(Logo)``;

export const Header: React.FC<Props> = ({ variant }) => (
  <HeaderWrapper variant={variant}>
    <WombakLogo variant={variant} />
    <MenuButton variant={variant} />
  </HeaderWrapper>
);
