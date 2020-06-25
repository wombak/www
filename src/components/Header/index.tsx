import React from 'react';
import styled from 'styled-components';
import { Text } from '../Text';

export type HeaderVariant = 'light' | 'dark';

interface Props {
  variant?: HeaderVariant;
}

const HeaderWrapper = styled.div`
  box-sizing: border-box;
  height: 81px;
  padding: 8px 11px;
  background-color: ${({ variant }: Partial<Props>) =>
    variant === 'light' ? '#ffffff' : '#232323'};

  @media screen and (min-width: 320px) {
    padding: 9px 40px;
  }
`;

export const Header: React.FC<Props> = ({ variant }: Props) => (
  <HeaderWrapper variant={variant}>
    <Text color={variant === 'light' ? 'dark' : 'light'}>Wombak</Text>
  </HeaderWrapper>
);
