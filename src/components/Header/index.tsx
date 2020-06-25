import React from 'react';
import styled from 'styled-components';
import { Logo } from '..';
import { color, bp } from '../../theme';

export type HeaderVariant = 'light' | 'dark';

interface Props {
  variant?: HeaderVariant;
}

const HeaderWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  height: 81px;
  padding: 0px 11px;
  background-color: ${({ variant }: Partial<Props>) =>
    variant === 'light' ? color.light : color.dark};

  @media screen and (min-width: ${bp.tablet}) {
    padding: 0px 40px;
  }
`;

const WombakLogo = styled(Logo)`
  position: absolute;
  top: 0;
`;

export const Header: React.FC<Props> = ({ variant }: Props) => (
  <HeaderWrapper variant={variant}>
    <WombakLogo variant={variant} />
  </HeaderWrapper>
);
