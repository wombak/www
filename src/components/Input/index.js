import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

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
`

const InputField = styled.input`
  ${inputResets};
  color: #141927;
  font-size: 18px;
  padding: 10px;
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
  padding: 10px 20px;
  background-color: #f5e05b;
  color: #141927;
  font-size: 16px;
  text-transform: uppercase;
`

export const InputWithButton = ({ label, onClick, ...props }) => (
  <Input {...props}>
    <StyledButton>{label}</StyledButton>
  </Input>
)

export default Input
