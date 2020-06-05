import React from 'react';
import styled from 'styled-components';

interface Props {
  label: string;
}

const H1 = styled.h1`
  display: inline-block;
  color: #f5e05b;
  background: #232323;
  font-size: 20px;
  padding: 3px 4px;
`;

export const HelloWorld: React.FC<Props> = ({ label }) => <H1>{label}</H1>;
