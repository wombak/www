import React from 'react';
import styled from 'styled-components';
import { Text } from '../Text';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
export type ButtonSize = 'small' | 'normal';

interface Props {
  label: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
}

const variantToBgColor = (variant?: ButtonVariant): string => {
  switch (variant) {
    case 'secondary':
      return '#232323';
    case 'tertiary':
      return '#ffffff';
    default:
      return '#f5e05b';
  }
};

const variantToBoxShadow = (variant?: ButtonVariant): string => {
  switch (variant) {
    case 'secondary':
    case 'tertiary':
      return '0 2px 8px 0 rgba(47, 47, 47, 0.3)';
    default:
      return '0 0 10px 0 rgba(245, 224, 91, 0.3), 0 2px 8px 0 rgba(47, 47, 47, 0.8)';
  }
};

const sizeToPadding = (size?: ButtonSize): string => {
  if (size === 'small') {
    return '12px 16px';
  }
  return '15px 20px';
};

const sizeToTextSize = (size?: ButtonSize) => size;

const ButtonWrapper = styled.div`
  display: inline-block;
  background-color: ${({ variant }: Partial<Props>) =>
    variantToBgColor(variant)};
  box-shadow: ${({ variant }: Partial<Props>) => variantToBoxShadow(variant)};
  padding: ${({ size }: Partial<Props>) => sizeToPadding(size)};
`;

export const Button: React.FC<Props & React.HTMLAttributes<HTMLDivElement>> = ({
  label,
  variant,
  size
}: Props) => (
  <ButtonWrapper variant={variant} size={size}>
    <Text
      color={variant === 'secondary' ? 'light' : 'dark'}
      size={sizeToTextSize(size)}
    >
      {label}
    </Text>
  </ButtonWrapper>
);
