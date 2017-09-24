import React from 'react'
import styled from 'styled-components'
import { Block } from 'particles'

const Button = styled(Block)`
  align-items: center;
  appearance: none;
  border: 0;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  position: relative;
  text-decoration: none;
  transition: background-color 250ms ease-out, color 250ms ease-out, border-color 250ms ease-out,top 350ms ease-out;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  white-space: nowrap;
  &:active {
    top: 3px;
    outline: none;
  }
`
Button.defaultProps = {
  is: 'button',
  bg: 'indigo',
  br: 2,
  color: 'white',
  f: [1],
  ts: ['lightHaze'],
  py: [5, 10],
  px: [8, 12.5],
}

export default Button
