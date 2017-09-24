/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import styled from 'styled-components'
import MediaQuery from 'react-responsive'
import { Flex, Box, Grid} from 'particles'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { BackgroundImage, BackgroundGradient, Blockquote, Heading, Image, Paragraph, HorizontalRule, Container, Button, Card, LinkButtonOutline, Link, Section, SVG, Shape, Span, Responsive } from 'atomic'
import { ButtonLink } from 'fusion'
import { IconCircle } from 'foundry'
import { SpotlightToggle, SpotlightViewport } from 'containers'
import MacbookDisplay from 'components/sentient/MacbookDisplay'
import BrowserDisplay from 'components/sentient/BrowserDisplay'
import { CommunityPrograms } from 'workshop/blocks'
import { FrontShowcase } from 'workshop/sections'
import {BackgroundParticles} from 'fusion/background'
/* ------------------------------- Component -------------------------------- */
const MainCapture = ({ ...props }) => {
  return (
    <div>
    <Section gradient='blue' color='white' pos='relative' pb={[20,50]} >
      <BackgroundParticles/>
      <Container py={[20,50]} w={1320} >
        <Box textAlign='center'>
          <Heading level={[3]} f={[5,7,9]} color='white' fw='bold' textAlign='center' ts={['darkPurple']}  >EVO</Heading>
          <HorizontalRule bi='colorBase' bs={1} gradient='lime' w={[0.33333, 40, 60]} />
          <Paragraph f={[2]} color='grayLight' fw='300' textAlign='center' ts={['darkHazy']}>Rapid Evolution for Powerful Internet Applications</Paragraph>
          <Button gradient='cherry'>Start Project Today</Button>
        </Box>
        <Flex direction={['column', 'column', 'row']} mt={[15,30, 75]} align={['center']} wrap='wrap' >
          <Box w={[1]} px={[15,30]} >
            <Container w={[720]} >
              <Flex direction={['column', 'column', 'row']} my={[15,30,55]} mb={[15,55,135]} align={['center']} wrap='wrap' justify={['space-evenly']} >


                <SpotlightToggle spotlight="serviceFrontend" library={{subject: 'service', item: 'designFrontend'} } >
                  <SpotlightToggle spotlight="serviceBackend" library={{subject: 'service', item: 'designBackend'} } >
                    <Heading level={[3]} f={[5,6]} color='white'>Design</Heading>
                  </SpotlightToggle>
                </SpotlightToggle>
                <SpotlightToggle spotlight="serviceFrontend" library={{subject: 'service', item: 'developmentFrontend'} } >
                  <SpotlightToggle spotlight="serviceBackend" library={{subject: 'service', item: 'developmentBackend'} } >
                    <Heading level={[3]} f={[5,6]} color='white'>Development</Heading>
                  </SpotlightToggle>
                </SpotlightToggle>
                <SpotlightToggle spotlight="serviceFrontend" library={{subject: 'service', item: 'visionFrontend'} } >
                  <SpotlightToggle spotlight="serviceBackend" library={{subject: 'service', item: 'visionBackend'} } >
                    <Heading level={[3]} f={[5,6]} color='white'>Vision</Heading>
                  </SpotlightToggle>
                </SpotlightToggle>

 
                </Flex>
            </Container>
          </Box>
          <Box w={[1,1,0.5]} >
              <Heading level={[3]} f={[5]} fontWeight='300' textAlign='center'>Frontend</Heading>
              <HorizontalRule bi='colorBase' bs={1} gradient='lime' w={[0.33333]} />
              <SpotlightViewport viewport='serviceFrontend' />
          </Box>
          <Box w={[1,1,0.5]}>
              <Heading level={[3]} f={[5]} fontWeight='300' textAlign='center'>Backend</Heading>
              <HorizontalRule bi='colorBase' bs={1} gradient='lime' w={[0.33333]} />
              <SpotlightViewport viewport='serviceBackend' />
          </Box>
        </Flex>
      </Container>
      <Box textAlign='center' mt={[20,50]} >
          <HorizontalRule bi='colorBase' bs={1} gradient='lime' w={[0.33333, 40, 60]} />
          <Paragraph f={[2]} color='grayLight' fw='300' textAlign='center' ts={['darkHazy']}>Modern Javascript Application Development</Paragraph>
          <Button gradient='cherry'>Start Project Today</Button>
        </Box>
    </Section>
    <MediaQuery query='(min-width: 984px)' component={Section}>
      <FrontShowcase/>
    </MediaQuery>

    <Section bg={['sand']} py={[20,40]} >
    <Container w={[1,1, 1120]} >

      <Flex my={[20, 40]} align={['center']} wrap={['wrap']} >
        <Box flex={['1 1 100%', '1 1 100%', '1 1 50%']} order={[1]} pos="relative" >
         <Box w={[1,1, '120%']} ml={[null,null, '-20%']} >
           <BrowserDisplay>
              <Image br={[5]} bs={[0]} src={assets.devices.browserCultureCenter}/>
            </BrowserDisplay>
          </Box>
        </Box>
        <Box flex={['1 1 100%', '1 1 100%', '1 1 50%']} order={[2]} py={[20,40, 60]} pl={[0,0,40]} >
          <Heading f={[4,5]} level={[3]} color={['blue']} fontWeight={[700]} >Community Organizing Application</Heading>
          <Heading f={[2,3]} level={[3]} color={['orange']} fontWeight={[700]} >Uniting Communties To Continue The Dream - The Sky Is The Limit </Heading>
          <Paragraph f={[]}>Praesent sodales sagittis molestie. Integer posuere purus vel eleifend eleifend. Morbi ut luctus nulla. Curabitur cursus nulla sem, vel porta ligula fermentum eget. In quis pellentesque lorem. Curabitur iaculis, nisl eget aliquam accumsan, ex velit accumsan purus, imperdiet mollis velit ex porta nisi. Nam vestibulum diam nisi, euismod viverra est pulvinar nec. </Paragraph>
        </Box>
      </Flex>

      <Flex my={[20, 40]} align={['center']} wrap={['wrap']} >
        <Box flex={['1 1 100%', '1 1 100%', '1 1 50%']} order={[1]} py={[20,40, 60]} pr={[0,0,40]} textAlign='right' >
          <Heading f={[4,5]} level={[3]} color={['blue']} fontWeight={[700]} >Internet Engineers Guild</Heading>
          <Heading f={[2,3]} level={[3]} color={['orange']} fontWeight={[700]} >Uniting Internet Engineers Globally to Solve Complex Challenges</Heading>
          <Paragraph f={[]}>Praesent sodales sagittis molestie. Integer posuere purus vel eleifend eleifend. Morbi ut luctus nulla. Curabitur cursus nulla sem, vel porta ligula fermentum eget. In quis pellentesque lorem. Curabitur iaculis, nisl eget aliquam accumsan, ex velit accumsan purus, imperdiet mollis velit ex porta nisi. Nam vestibulum diam nisi, euismod viverra est pulvinar nec. </Paragraph>
        </Box>
        <Box flex={['1 1 100%', '1 1 100%', '1 1 50%']} order={[2]} pos="relative" >
         <Box w={[1,1, '120%']}>
           <BrowserDisplay>
              <Image br={[5]} bs={[0]} src={assets.devices.browserInternetEngineers}/>
            </BrowserDisplay>
          </Box>
        </Box>
      </Flex>

      <Flex my={[20, 40]} align={['center']} wrap={['wrap']} >
        <Box flex={['1 1 100%', '1 1 100%', '1 1 50%']} order={[1]} pos="relative" >
         <Box w={[1,1, '120%']} ml={[null,null, '-20%']} >
           <BrowserDisplay>
              <Image br={[5]} bs={[0]} src={assets.devices.browserMineshaft}/>
            </BrowserDisplay>
          </Box>
        </Box>
        <Box flex={['1 1 100%', '1 1 100%', '1 1 50%']} order={[2]} py={[20,40, 60]} pl={[0,0,40]} >
          <Heading f={[4,5]} level={[3]} color={['blue']} fontWeight={[700]} >Decoupled Mining Interface</Heading>
          <Heading f={[2,3]} level={[3]} color={['orange']} fontWeight={[700]} >A Desktop Application to Interface Any Crpytocurrency Miner</Heading>
          <Paragraph f={[]}>Praesent sodales sagittis molestie. Integer posuere purus vel eleifend eleifend. Morbi ut luctus nulla. Curabitur cursus nulla sem, vel porta ligula fermentum eget. In quis pellentesque lorem. Curabitur iaculis, nisl eget aliquam accumsan, ex velit accumsan purus, imperdiet mollis velit ex porta nisi. Nam vestibulum diam nisi, euismod viverra est pulvinar nec. </Paragraph>
        </Box>
      </Flex>

    </Container>
    
   </Section>

   <Section bg={['green']} gradient='greenLush' color={['white']}  >
    <Container w={[1]} py={[40,80,250]} textAlign='center' bs={['insetBottom']}>
      <Heading f={[6,7]} level={[5]} ts={['light']} >The Mission</Heading>
      <Heading f={[3,4]} level={[5]} ts={['lightHazy']} fontWeight='300' >High Quality Internet Applications</Heading>
    </Container>
    </Section>
   <Section bg={['cherry']} gradient='cherry' color={['white']}  bs={['insetBottomHeavy']} py={[15,20, 90]}>
      <Box >
        <Heading f={[4,5]} level={[3]} color={['white']} fontWeight={[700]} textAlign='center'  >Holistic Product Development</Heading>
        <Container>
        <Flex direction={['column', 'column', 'row']} justify='space-evenly' >
          <Box w={[1,1, 0.33333]} px={[10,10, 20]} >
            <SVG svg={assets.svg.design} svgColor='white' h={50} w={50} />
            <Heading level={[3]} f={[3]}>Modern Design</Heading>
            <Paragraph f={[1]}>Curabitur quis elit posuere sem fringilla finibus. Vestibulum quis nibh eu nisl cursus ultricies. Mauris lectus augue, dapibus vel sapien sed, hendrerit consequat ante. Sed iaculis at diam at malesuada. Vestibulum malesuada est nec egestas egestas. Nunc et accumsan magna. Nam sollicitudin libero non dolor blandit varius.</Paragraph>
          </Box>
          <Box w={[1,1, 0.33333]} px={[10,10, 20]} >
            <SVG svg={assets.svg.design} svgColor='white' h={50} w={50} />
            <Heading level={[3]} f={[3]}>Integrated Development</Heading>
            <Paragraph f={[1]}>Curabitur quis elit posuere sem fringilla finibus. Vestibulum quis nibh eu nisl cursus ultricies. Mauris lectus augue, dapibus vel sapien sed, hendrerit consequat ante. Sed iaculis at diam at malesuada. Vestibulum malesuada est nec egestas egestas. Nunc et accumsan magna. Nam sollicitudin libero non dolor blandit varius.</Paragraph>
          </Box>
          <Box w={[1,1, 0.33333]} px={[10,10, 20]} >
            <SVG svg={assets.svg.design} svgColor='white' h={50} w={50} />
            <Heading level={[3]} f={[3]}>Clear Vision</Heading>
            <Paragraph f={[1]}>Curabitur quis elit posuere sem fringilla finibus. Vestibulum quis nibh eu nisl cursus ultricies. Mauris lectus augue, dapibus vel sapien sed, hendrerit consequat ante. Sed iaculis at diam at malesuada. Vestibulum malesuada est nec egestas egestas. Nunc et accumsan magna. Nam sollicitudin libero non dolor blandit varius.</Paragraph>
          </Box>
        </Flex>
        </Container>
      </Box>
   </Section>
   <Section pos='relative' >
        <BackgroundImage src={assets.images.marin} z={5} o={[0.5]} />
      <Flex align={['center']} justify={['space-evenly']} pt={[20,40, 60]} wrap='wrap' gradient='blue' p={[10]} br={[4]} bs={[3]} mb={[10,20]} mh={['50vh']} pb={[40, 80, 180]} >
        <Box w={[1]} textAlign='center' ><Heading level={[4]} f={[5,6]} color='white'><Span fontWeight='300'>Fullstack </Span>Development</Heading></Box>
          <Container w={[920]} my={[20,50]} >
            <Flex align={['center']} justify={['space-evenly']} w={[1]}>
              <IconCircle svg={assets.svg.firebase} title={'Firebase'}/>
            </Flex>
            <Flex align={['center']} justify={['space-evenly']} w={[0.6]} ml={['20%']} >
              <IconCircle svg={assets.svg.react} title={'React'}/>
              <IconCircle svg={assets.svg.terminal} title={'React Router'}/>
            </Flex>
            <Flex align={['center']} justify={['space-evenly']} w={[0.7]} ml={['15%']} >
              <IconCircle svg={assets.svg.sketchIcon} title={'React'}/>
              <IconCircle svg={assets.svg.nodeSass} title={'React Router'}/>
              <IconCircle svg={assets.svg.webpack} title={'Redux'}/>
            </Flex>
            <Flex align={['center']} justify={['space-evenly']} w={[0.8]} ml={['10%']} >
              <IconCircle svg={assets.svg.npm} title={'React'}/>
              <IconCircle svg={assets.svg.nodejs} title={'React Router'}/>
              <IconCircle svg={assets.svg.redux} title={'Redux'}/>
              <IconCircle svg={assets.svg.reduxSaga} title={'Sagas'}/>
            </Flex>
            <Flex align={['center']} justify={['space-evenly']} w={[1]}>
              <IconCircle svg={assets.svg.html5} title={'HTML5'}/>
              <IconCircle svg={assets.svg.css3} title={'CSS3'}/>
              <IconCircle svg={assets.svg.javascript} title={'Javascript'}/>
              <IconCircle svg={assets.svg.docker} title={'Sketch'}/>
              <IconCircle svg={assets.svg.amazonWebServices} title={'Photoshop'}/>
            </Flex>
            <Flex align={['center']} justify={['space-evenly']} w={[1]}>
              <IconCircle svg={assets.svg.monero} title={'Monero'}/>
              <IconCircle svg={assets.svg.ethereum} title={'Ethereum'}/>
              <IconCircle svg={assets.svg.c} title={'C++'}/>
              <IconCircle svg={assets.svg.javascript} title={'Javascript'}/>
              <IconCircle svg={assets.svg.docker} title={'Sketch'}/>
              <IconCircle svg={assets.svg.amazonWebServices} title={'Photoshop'}/>
            </Flex>
          </Container>
        </Flex>
      </Section>
   <Section color={['charcoal']}>
     <Container w={[1,1, 1380]} mt={[0,0, -140]} >
      <Flex align={['center']} justify={['center']} direction={['column']}  gradient={['ibize']} color={['white']} mh={['60vh']} px={[15,20,50]} w={[1]} pos='relative' bs={[0,1]} br={['50%']} b={['2px solid']} bc="white" bs={[3]} of='hidden' > 
        <Box z={15} pos='relative' textAlign='center'>
        <Heading f={[]} level={[2]} ts={[0]} gradient={['blue']} py={[10]} px={[20]} >Technology Built for You. <Span fontWeight={[300]} >From Coast to Coast</Span>.</Heading>
        <Paragraph f={[3]}>Remote Application Development + Quarerly Visits</Paragraph>
        </Box>
        <BackgroundImage image={assets.images.coastal} z={1} o={[0.7]}  />
      </Flex>
    </Container>
    <Container w={[1,1, 720]} py={[20,40, 80]} >
      <Heading level={[3]} f={[6,7]}>How It Works</Heading>
      <Paragraph f={[4]}>Together, we'll build an Internet Applications with steadfast focus on <strong>success</strong></Paragraph>
      <Paragraph f={[1]}>Integrating the latest in Frontend Design strategies and technology, in addition to secure Backend Services with scalable/affordable infrastructure. and Duis tellus quam, condimentum ac nunc sed, tincidunt tempor lorem. Curabitur non malesuada orci. Praesent vitae ante pellentesque, elementum eros nec, dapibus libero. Mauris vulputate eleifend est eu condimentum. Nunc ut aliquet erat. Sed tristique turpis a scelerisque vestibulum. Suspendisse potenti. Maecenas hendrerit purus pretium ipsum volutpat, et euismod massa scelerisque. Aliquam at porta nisl. Integer hendrerit eu lorem nec venenatis. Ut venenatis malesuada diam sit amet ultricies. Mauris sit amet odio eget mi tempor ornare vel tempus libero. Etiam sollicitudin neque sed porttitor pellentesque. Nam vitae ornare ligula. Integer venenatis, tortor a consequat efficitur, arcu nisl semper dui, ac bibendum purus lectus eget diam.</Paragraph>
    </Container>
   </Section>
    </div>
  )
}

/* ---------------------------- Export Package ------------------------------ */
export default MainCapture