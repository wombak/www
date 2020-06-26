import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { color } from '../../theme';

interface Props {
  open?: boolean;
  variant?: 'light' | 'dark';
}

const Wrapper = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
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

const InnerDot = styled.div<Props>`
  width: 100%;
  height: 100%;
  background-color: ${({ variant }) =>
    variant === 'light' ? color.dark : color.light};
  border-radius: 50%;
`;

export const MenuButton: React.FC<Props> = ({
  variant = 'dark',
  open = false
}) => {
  const [isOpen, setIsOpen] = useState(open);

  const onClick = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <Wrapper onClick={onClick}>
      <Button open={isOpen} variant={variant}>
        {isOpen && <InnerDot variant={variant} />}
      </Button>
    </Wrapper>
  );
};
