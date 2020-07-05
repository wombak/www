import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { color } from '../../theme';

interface Props {
  open?: boolean;
  variant?: 'light' | 'dark';
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 100%;
`;

const Button = styled.div<Props>`
  box-sizing: border-box;
  width: 12px;
  height: 12px;
  padding: 2px;
  border-radius: 50%;
  border-width: ${({ open }) => (open ? '1px' : '2px')};
  border-style: solid;
  border-color: ${({ variant }) =>
    variant === 'light' ? color.dark : color.light};
`;

const InnerDot = styled.div<{ show: boolean; variant: 'dark' | 'light' }>`
  width: 100%;
  height: 100%;
  background-color: ${({ variant }) =>
    variant === 'light' ? color.dark : color.light};
  border-radius: 50%;
  transition: opacity 0.2s;
  opacity: ${({ show }) => (show ? '1.0' : '0')};
`;

const Tooltip = styled.div<{ show: boolean; variant: 'dark' | 'light' }>`
  position: absolute;
  bottom: 15px;
  color: ${({ variant }) => (variant === 'light' ? color.dark : color.light)};
  font-size: 8px;
  transition: opacity 0.2s;
  opacity: ${({ show }) => (show ? '0.5' : '0')};
`;

export const MenuButton: React.FC<Props> = ({
  variant = 'dark',
  open = false
}) => {
  const [isOpen, setIsOpen] = useState(open);
  const [isHover, setIsHover] = useState(false);

  const onClick = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <Wrapper
      onClick={onClick}
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Button open={isOpen} variant={variant}>
        <InnerDot variant={variant} show={isOpen || isHover} />
      </Button>
      <Tooltip variant={variant} show={isHover}>
        {isOpen ? 'Close' : 'Menu'}
      </Tooltip>
    </Wrapper>
  );
};
