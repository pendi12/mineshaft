/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import MediaQuery from 'react-responsive'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Flex, Box, Grid} from 'particles'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { BackgroundImage, BackgroundGradient, Blockquote, Heading, Image, Paragraph, HorizontalRule, Container, Button, Card, LinkButtonOutline, Link, Section, SVG, Shape, Span, Responsive } from 'atomic'
import { IconCircle } from 'foundry'
import {Dimension} from 'containers'
import { SpotlightToggle, SpotlightViewport } from 'containers'
import { GraphExample, GraphBlock, MoneroMining } from 'foundry'
import { FrontShowcase } from 'workshop/sections'
import {BackgroundParticles} from 'fusion/background'
/* ------------------------------- Component -------------------------------- */
const MainCapture = ({ ...props }) => {
  return (
    <div>
    <Section gradient='blue' px={[0]} >
      <PerfectScrollbar suppressScrollY swipeEasing swipePropegation>
        <GraphExample height={500} width={2500} margin={0} />
      </PerfectScrollbar >
      <Container w={[1,1,1220]} px={0} py={20} >
        <Heading level={[3]} f={[6,7]} color='white' textAlign='center' >Analyze The Blockchain</Heading>
        <Dimension/>
      </Container>
    </Section>
    </div>
  )
}

/* ---------------------------- Export Package ------------------------------ */
export default MainCapture