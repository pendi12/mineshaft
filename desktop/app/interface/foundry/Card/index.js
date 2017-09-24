/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import styled from 'styled-components'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { Absolute, Flex, Box } from 'particles'
import { BackgroundGradient, Container, Heading, Paragraph, Link, Section, Shape} from 'atomic'
import { Card, CardWrapper } from 'atomic'

import { BackgroundImage } from 'foundry'

const Content = styled(Flex)`
  position: relative;
`


const cardHeader = {
      align: 'center',
      justify: 'center',
      p: 20,
      py: [95, 145],
    }
const cardBody = {
      bg: 'blue',
      color: 'white',
      direction: ['column'],
      p: 22,
      pb: [25, 35],
    }

/* ------------------------------- Component -------------------------------- */
const CardFoundry = props => (
<Flex direction="column" {...props.outer} >
  <Flex {...props} direction={['column']} {...props.inner} >
    <Flex {...cardHeader} pos='relative' >
      <Heading color="white" textShadow={[0,1]} children={props.title} />
      { !props.image ? null : <BackgroundImage image={props.image} styled={{opacity:1}} /> }
      <Shape left bottom right h="55px" svgColor='blue' svg={assets.shapes.mountain} />
    </Flex>
    <Flex {...cardBody} >
      <Flex direction='row' justify={['space-evenly']} w={[1,1, 0.5]} > {props.badges ? props.badges.map(badge=>badge) : null }</Flex>
      <Heading color="white" f={[3]} level={[5]} ts={[1]} children={props.link} />
      <Paragraph f={[1]} children={props.description} />
    </Flex>
  </Flex>
</Flex>
)

CardFoundry.defaultProps = {
  
}

export default CardFoundry