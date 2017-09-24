/* ------------------------- External Dependencies -------------------------- */
import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router'
import { font, palette, key } from 'styled-theme'
import { ifProp } from 'styled-tools'
import { space, width, fontSize } from 'styled-system'

/* ------------------------- Internal Dependencies -------------------------- */


/* --------------------------- Render Functions ----------------------------- */
const fontSizeHeight = ({ height }) => `${height / 40}rem`

const backgroundColor = ({ transparent, disabled }) =>
  transparent ? 'transparent' : palette(disabled ? 2 : 1)

const foregroundColor = ({ transparent, disabled }) =>
  transparent ? palette(disabled ? 2 : 1) : palette('grayscale', 0, true)

const hoverBackgroundColor = ({ disabled, transparent }) => !disabled && !transparent && palette(0)
const hoverForegroundColor = ({ disabled, transparent }) => !disabled && transparent && palette(0)

const shadowRendered = ({shadow, shadowIndex}) => key(['shadows', 0, 'default'])
const shadowRenderedHover = ({shadow, shadowIndex}) => key(['shadows', 0, 'hover'])

const gradientPalette = ({gradient}) => key(['gradient', gradient])
const directionRendered = ({direction}) => `${direction}`


/* ----------------------------- Styled Childs ------------------------------ */
const styles = css`
  align-items: center;
  appearance: none;
  background-color: ${backgroundColor};
  background: -webkit-linear-gradient(${directionRendered}, ${gradientPalette });  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(${directionRendered}, ${gradientPalette}); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  border: 0.0625em solid ${ifProp('transparent', 'currentcolor', 'transparent')};
  border-radius: 0.125em;
  box-sizing: border-box;
  box-shadow: ${shadowRendered};
  color: ${foregroundColor};
  cursor: ${ifProp('disabled', 'default', 'pointer')};
  display: inline-flex;
  font-family: ${font('primary')};
  ${fontSize};

  height: 2.5em;
  justify-content: center;
  pointer-events: ${ifProp('disabled', 'none', 'auto')};
  ${space}
  text-decoration: none;
  transition: background-color 250ms ease-out, color 250ms ease-out, border-color 250ms ease-out, box-shadow 250ms ease, top 200ms ease-out;
  top: 0;
  white-space: nowrap;

  &:hover, &:focus, &:active {
    background-color: ${hoverBackgroundColor};
    box-shadow: ${shadowRenderedHover};
    color: ${hoverForegroundColor};
    top: -2px;
  }

  &:focus {
    outline: none
  }
`

const StyledLink = styled(({ disabled, transparent, reverse, palette, height, theme, ...props }) =>
  <Link {...props} />
)`${styles}`
const Anchor = styled.a`${styles}`
const StyledButton = styled.button`${styles}`

const Button = ({ type, ...props }) => {
  if (props.to) {
    return <StyledLink {...props} />
  } else if (props.href) {
    return <Anchor {...props} />
  }
  return <StyledButton {...props} type={type} />
}

Button.propTypes = {
  disabled: PropTypes.bool,
  gradient: PropTypes.string,
  palette: PropTypes.string,
  transparent: PropTypes.bool,
  reverse: PropTypes.bool,
  height: PropTypes.number,
  type: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string,
  shadowIndex: PropTypes.string
}

Button.defaultProps = {
  gradient: 'primary',
  direction: '0deg',
  palette: 'primary',
  type: 'button',
  height: 40,
  shadowIndex: 0
}

export default Button
