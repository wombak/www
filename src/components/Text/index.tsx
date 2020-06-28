import React from 'react';
import styled from 'styled-components';

export type TextColor = 'light' | 'dark';
export type TextSize = 'normal' | 'xl' | 'xxl' | 'xxxl';
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

export const Text: React.FC<Props> = styled.span`
  color: ${({ color }: Props) => (color === 'light' ? '#ffffff' : '#232323')};
  font-family: 'PT Mono', monospace;
  font-weight: ${({ size }: Props) => sizeToWeight(size)};
  font-size: ${({ size }: Props) => sizeToPx(size)};
`;
