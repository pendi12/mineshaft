import React from 'react'
import { compose } from 'recompose'
import styled from 'styled-components'
import {
  space,
  boxShadow,
  borderColor,
  borderImage,
  borderRadius,
  color,
  fontSize,
  height,
  minHeight,
  textShadow,
  responsiveStyle,
  width,
} from 'quarks'
import {
  arrayOf,
  oneOfType,
  number,
  string
} from 'prop-types'
import tag from './tag'

const prop = oneOfType([
  number,
  string,
  arrayOf(oneOfType([
    number,
    string
  ]))
])

const propTypes = {
  width: prop,
  w: prop,
  fontSize: prop,
  f: prop,
  color: prop,
  bg: prop,
  m: prop,
  mt: prop,
  mr: prop,
  mb: prop,
  ml: prop,
  mx: prop,
  my: prop,
  p: prop,
  pt: prop,
  pr: prop,
  pb: prop,
  pl: prop,
  px: prop,
  py: prop,
  z: prop,
  zIndex: prop,
}

const withStyle = (style, props) => Component => {
  
  const gradient = props => 
    props.gradient
    ? props.radial
      ? 
        `
        background: #EB3349;  /* fallback for old browsers */
        background: -webkit-radial-gradient(${props.gradientDir ? props.gradientDir : 'circle at center'},${props.theme.gradient[props.gradient]});  /* Chrome 10-25, Safari 5.1-6 */
        background: radial-gradient(${props.gradientDir ? props.gradientDir : 'circle at center'}, ${props.theme.gradient[props.gradient]}); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        `
      :
        `
        background-image: -webkit-linear-gradient(${props.gradientDir ? props.gradientDir : '0deg'}, ${props.theme.gradient[props.gradient]});
        background-image: linear-gradient(${props.gradientDir ? props.gradientDir : '0deg'}, ${props.theme.gradient[props.gradient]});
        `
    : null

  const blurry = responsiveStyle('filter', 'blur')
  const border = [responsiveStyle('border',), responsiveStyle('border', 'b') ]
  const display = [responsiveStyle('display'), responsiveStyle('display', 'dis') ]
  const filter = [responsiveStyle('filter'), responsiveStyle('filter', 'fil') ]
  const fontWeight = [responsiveStyle('fontWeight'), responsiveStyle('fontWeight', 'fw')]
  const opacity = [responsiveStyle('opacity', 'opacity'), responsiveStyle('opacity', 'o') ]
  const overflow = [responsiveStyle('overflow',), responsiveStyle('overflow', 'of') ]
  const position = [responsiveStyle('position', 'position'), responsiveStyle('position', 'pos') ]
  const textAlign = [responsiveStyle('textAlign'), responsiveStyle('textAlign', 'ta') ]
  const transform = [responsiveStyle('transform'), responsiveStyle('transform', 't') ]
  const zIndex = [responsiveStyle('z-index', 'zIndex'), responsiveStyle('z-index', 'z') ]

  const Base = styled(Component)([],
    blurry,
    ...border,
    boxShadow,
    borderColor,
    borderImage,
    borderRadius,
    color,
    ...display,
    ...filter,
    gradient,
    fontSize,
    fontWeight,
    height,
    minHeight,
    ...position,
    ...opacity,
    ...overflow,
    textShadow,
    ...transform,
    space,
    width,
    ...zIndex
  )

  Base.propTypes = propTypes

  const Comp = styled(Base)
    .attrs(props)
    ([], style)

  return Comp
}

const hoc = (style, props) => compose(
  withStyle(style, props),
  tag
)

export default hoc
