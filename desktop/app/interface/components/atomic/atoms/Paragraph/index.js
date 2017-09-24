import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import {color, space, width, fontSize, textShadow, responsiveStyle } from 'quarks'
import { Text } from 'particles'

const Paragraph = styled(Text)`
  ${fontSize}
  ${responsiveStyle('font-weight', 'fontWeight')}
  ${responsiveStyle('text-align', 'textAlign')}
  ${textShadow}
  ${space}
  ${width}
`

Paragraph.propTypes = {

}

Paragraph.defaultProps = {
  mb: [8, 12, 15]
}

export default Paragraph
