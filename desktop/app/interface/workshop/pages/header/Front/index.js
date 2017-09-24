/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import styled from 'styled-components'
import { Flex, Box, Grid, Text, Lead} from 'particles'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { BackgroundImage, BackgroundGradient, BackgroundMovement, Button, Heading, HorizontalRule, Paragraph, Container, SVG, Section, Span } from 'atomic'
import Login from 'workshop/forms/authentication/AuthorizationLogin'
import { CoinHavest, MiningInterface, MiningClock } from 'containers'
const MediaQuery = require('react-responsive');

/* --------------------------- Styled Components ---------------------------- */
/* ------------------------- Component Properties --------------------------- */
/* ------------------------------- Component -------------------------------- */
const Front = ({ ...props }) => {
  return (
    <Section {...props} color='white' pos='relative' >
      <BackgroundGradient gradient={['blue']} z={5} o={[0.15]} bs={['insetBottomLight']}/>
      <BackgroundImage src={assets.images.coding} z={5} o={[0.75]} bs={['insetBottomLight']}/>
      
      <Container>
      <Flex align='center' direction={['column']} justify={['center']} mh={['100vh']} w={[1]} >
        <Box w={1} color="white" ta='center' >
          <Heading fontSize={[5,6,7]} level={3} fontWeight={[500]} mb={10} ts={['darkPurple']} >Internet Engineer</Heading>
          <HorizontalRule bi='colorBase' bs={1} mb={[10, 20]} w={[0.33333]} />
          <Paragraph fontSize={[2]} fontWeight={[100]} ts={['darkHazy']}>React - Firebase - Node/Webpack - Drupal - Electron - Sketch - Photoshop - Redux/Sagas - Browser Automation </Paragraph>
          <HorizontalRule bi='colorBaseReverse' bs={1} mt={[10, 20]} gradientDir='-170deg' w={[0.33333]} />
          <br/>
          <Heading level={[3]} f={[3]}>Start Mining Cryptocurrency </Heading>
          <Container w={[620]} ><MiningInterface/></Container>
        </Box>
      </Flex>
      </Container>
    </Section>
  )
}

/* ---------------------------- Export Package ------------------------------ */
export default Front