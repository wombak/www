import React from 'react';
import styled from 'styled-components';
import { Logo } from '..';
import { color } from '../../theme';
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
  background-color: ${({ variant }) =>
    variant === 'light' ? color.light : color.dark};
  padding-left: 40px;
`;

const WombakLogo = styled(Logo)``;

export const Header: React.FC<Props> = ({ variant }) => (
  <HeaderWrapper variant={variant}>
    <WombakLogo variant={variant} />
    <MenuButton variant={variant} />
  </HeaderWrapper>
);
