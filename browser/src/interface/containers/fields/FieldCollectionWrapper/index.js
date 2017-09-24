/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import styled from 'styled-components'
import { Flex } from 'particles'

/* ------------------------- Internal Dependencies -------------------------- */

/* --------------------------- Styled Components ---------------------------- */
const FlexWrapper = styled(Flex)`
  & > div:not(last-of-type) {
    padding-right: 10px;
  }
`

/* ------------------------- Component Properties --------------------------- */
/* ------------------------------- Component -------------------------------- */
const FieldCollectionWrapper = props => (
    <FlexWrapper {...props}>
      {props.children}
    </FlexWrapper>
  )

/* ---------------------------- Export Package ------------------------------ */
export default FieldCollectionWrapper