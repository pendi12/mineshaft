/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import styled from 'styled-components'
import { Flex, Box } from 'particles'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { Heading, Image, Span, Link } from 'atomic'
import { DrawerOpen} from 'containers'
/* ------------------------------- Component -------------------------------- */
const BlockBranding = ({ ...props }) => {
  return (
    <Flex direction={['column', 'row']} align={"stretch"} justify="center" bg={['charcoal']} gradientDir='45deg' color={['green']} bs={[0]}  z='20' pos='relative'>
      <Flex align="center" justify="left" w={[1, 1, 0.25]} pl={[15]} direction={['row']} >
        <Link to="/"><Heading color={'white'} level={4} margin={'0'} fontSize={[3]} fontWeight={'100'}>Mine<Span f={[3]}>shaft 🏗 </Span></Heading></Link>
      </Flex>
      
      <Flex align="center" w={[1, 1, 0.45]} justify="flex-start" display={['none', 'none', 'Flex']} py={[15]} >
        <Link to="/why" color={['white']}><Heading f={[2]} level={[5]} display='inline' px={10}>Balance: <Span fontWeight='300' color='red'>45XMR</Span> </Heading></Link>
        <Link to="/tools" color={['white']}><Heading f={[2]} level={[5]} display='inline' px={10}>Security: <Span fontWeight='300' color='green'>Initialized</Span></Heading></Link>
        <Link to="/servics" color={['white']}><Heading f={[2]} level={[5]} display='inline' px={10}>Market Status: <Span fontWeight='300' color='green' >Healthy</Span></Heading></Link>
      </Flex>
      <Flex align="center" justify={[ 'center', 'center', 'flex-end']} pr={[null, null, 15]} py={[5, 5, 'inherit']} w={[1, 1, 0.23]}>

      </Flex>
      <Flex align="center" justify='center' gradient={['blue']} py={[10]} color='white' w={[1, 1, 0.07]} textAlign="center">
        <DrawerOpen><Heading f={[2]} level={[4]}><a>Menu</a></Heading></DrawerOpen>
      </Flex>
    </Flex>
)
}

/* ---------------------------- Export Package ------------------------------ */
export default BlockBranding