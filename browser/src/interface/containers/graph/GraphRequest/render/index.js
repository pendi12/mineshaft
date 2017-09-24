/* ------------------------- External Dependencies -------------------------- */
import _ from 'lodash'
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { Flex } from 'particles'
import {Heading, Image, Paragraph, Container, Section} from 'atomic'
/* ------------------------ Initialize Dependencies ------------------------- */
import Foundry, { QueryUsers, UserProfileDashboard, UserProfile } from 'foundry'
/* ---------------------------- Module Package ------------------------------ */
const GraphRequest = ({list, test, status, data, itemStyled, foundry}) => {
  let ComponentFoundry = Foundry[foundry]
  return (
    <Flex direction={['row']} wrap='wrap'>
     { data && ComponentFoundry ?  <ComponentFoundry {...data}/> : null }
    </Flex>
  )
}
/* ---------------------------- Export Package ------------------------------ */
export default GraphRequest
