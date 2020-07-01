import React from 'react';
import styled from 'styled-components';
import * as theme from '../../theme';

export type TextColor = 'light' | 'dark';
export type TextSize = 'small' | 'normal' | 'xl' | 'xxl' | 'xxxl';
export type TextTag =
  | 'span'
  | 'div'
  | 'p'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'h7';

interface Props {
  size?: TextSize;
  color?: TextColor;
  as?: TextTag;
  children: string;
}

const sizeToPx = (size?: TextSize) => {
  switch (size) {
    case 'small':
      return '14px';
    case 'xl':
      return '32px';
    case 'xxl':
      return '60px';
    case 'xxxl':
      return '72px';
    default:
      return '16px';
  }
};

const sizeToWeight = (size?: TextSize) => {
  switch (size) {
    case 'xl':
    case 'xxl':
    case 'xxxl':
      return 'bold';
    default:
      return 'normal';
  }
};

const variants = {
  light: theme.color.light,
  darK: theme.color.dark
};

export const Text: React.FC<Props> = styled.span`
  color: ${({ color }: Props) => (color && variants[color]) ?? 'inherit'};
  font-family: 'PT Mono', monospace;
  font-weight: ${({ size }: Props) => sizeToWeight(size)};
  font-size: ${({ size }: Props) => sizeToPx(size)};
`;
