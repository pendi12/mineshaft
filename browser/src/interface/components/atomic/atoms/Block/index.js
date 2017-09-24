import { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette, key } from 'styled-theme'
import { ifProp } from 'styled-tools'
import { space, width, fontSize } from 'styled-system'

const gradientPalette = ({gradient}) => key(['gradient', gradient])
const directionRendered = ({direction}) => `${direction}`

const Block = styled.div`
  background-color: ${ifProp('opaque', palette(0, true), 'transparent')};
  background: -webkit-linear-gradient(${directionRendered}, ${gradientPalette });  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(${directionRendered}, ${gradientPalette}); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: ${palette({ grayscale: 0 }, 1)};
  font-family: ${font('primary')};
  ${space}
  ${width}
`

Block.propTypes = {
  direction: PropTypes.string,
  gradient: PropTypes.string,
  palette: PropTypes.string,
  reverse: PropTypes.bool,
  opaque: PropTypes.bool,
}

Block.defaultProps = {
  direction: '0deg',
  gradient: 'primary',
  palette: 'grayscale',
}

export default Block
