/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Flex, Box} from 'particles'
/* ------------------------- Internal Dependencies -------------------------- */
import { BackgroundGradient, Button, Heading, HorizontalRule, Paragraph, Container, SVG, Section, Span, Shape } from 'atomic'
import Login from 'workshop/forms/authentication/AuthorizationLogin'

/* ------------------------------- Component -------------------------------- */
const Front = props => (
  <Section {...props} color='white' pos='relative' >
    <BackgroundGradient gradient={['blue']} z={5} o={[0.15]} bs={['insetBottomLight']}/>
    <Container>
      <Flex align='center' direction={['column']} justify={['center']} mh={['80vh']} w={[1]} >
        <Box w={1} color="white" ta='center' >
          <Heading level={[3]} f={[5]} color='white' fw='bold' textAlign='center' ts={['darkPurple']}>Welcome Back, <Span fontWeight='300' >Kames</Span></Heading>
          <HorizontalRule bi='colorBaseReverse' bs={1} mt={[10, 20]} gradientDir='-170deg' w={[0.33333]} />
        
        <Flex align='center' direction={['column', 'row']} justify={['space-evenly']} px={[null, null, '10%']} py={[15]} >
            <Button gradient='cherry' mb={[15]} ><Heading level={[3]} f={[3]}>System Diagnostics</Heading></Button>
            <Button gradient='greenLush' mb={[15]}><Heading level={[3]} f={[3]}>Analyze Market</Heading></Button>
            <Button gradient='blue' mb={[15]}><Heading level={[3]} f={[3]}>Security Protocol</Heading></Button>
        </Flex>
        </Box>
      </Flex>
    </Container>
  </Section>
)

export default Front