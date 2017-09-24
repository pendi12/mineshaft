/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Flex, Box } from 'particles'
/* ------------------------- Internal Dependencies -------------------------- */
import { Heading, Paragraph, Span } from 'atomic'
/* ------------------------------- Component -------------------------------- */
const MiningStatistics = props => (
<Flex align="center" w={[1, 1, 0.45]} justify="flex-start" display={['none', 'none', 'Flex']} py={[15]} >
  <Link to="/why" color={['white']}><Heading f={[2]} level={[5]} display='inline' px={10}>Balance: <Span fontWeight='300' color='red'>45XMR</Span> </Heading></Link>
  <Link to="/tools" color={['white']}><Heading f={[2]} level={[5]} display='inline' px={10}>Security: <Span fontWeight='300' color='green'>Initialized</Span></Heading></Link>
  <Link to="/servics" color={['white']}><Heading f={[2]} level={[5]} display='inline' px={10}>Market Status: <Span fontWeight='300' color='green' >Healthy</Span></Heading></Link>
</Flex>
)

/* ---------------------------- Export Package ------------------------------ */
export default MiningStatistics