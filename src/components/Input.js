import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { darken } from 'polished'

const InputWrap = styled.div`
  margin: auto;
  height: 45px;
  display: flex;
  align-items: stretch;
  border-radius: 6px;
  overflow: hidden;
`

const inputResets = css`
  appearance: none;
  border: 0;
  border-radius: 0;
  outline: none;
  font-family: 'Muli', sans-serif;
  margin: 0;
`

const InputField = styled.input`
  ${inputResets};
  background: #fff;
  color: #141927;
  font-size: 17px;
  font-weight: 300;
  padding: 0 10px;
  width: 100%;
`

const Input = ({
  type = 'text',
  placeholder,
  className,
  children,
  ...props
}) => (
  <InputWrap className={className}>
    <InputField type={type} placeholder={placeholder} {...props} />
    {children}
  </InputWrap>
)

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
}

const StyledButton = styled.button`
  ${inputResets};
  padding: 0 16px;
  background: #f5e05b;
  color: #141927;
  font-size: 15px;
  font-weight: 800;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.25s ease-in-out;
  white-space: nowrap;

  &:hover {
    background: ${darken(0.15, '#f5e05b')};
  }
`

export const InputWithButton = ({ buttonLabel, onClick, ...props }) => (
  <Input {...props}>
    <StyledButton>{buttonLabel}</StyledButton>
  </Input>
)

export default Input
