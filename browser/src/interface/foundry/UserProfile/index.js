/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { Absolute, Flex, Box } from 'particles'
import { Heading, Paragraph, Image, Link, SVG} from 'atomic'

/* ------------------------------- Component -------------------------------- */
const imageLayout = {
  align: 'center',
  justify: 'center',
  direction: ['column'],
  flex:['1 1 0'],
  gradient:'blue',
  bs:'2',
  py:[10],
  textAlign: 'center'
}

const mainLayout = {
  flex:['2 1 0'],
  pl:[10],
  bg:'white',
  bs:'2',
  p:[7.5]
}

export default props => (
<Flex direction={['row']} align='stretch' justify='center' p={[10]} w={[1, 1, 0.33333]} {...props} key={props.uid} >
  <Flex {...imageLayout }>
    <Link to={`/dashboard/users/${props && props.uid || null }`}>
      <Image w={[85]} b='2px solid' br='50%' bc='white' bs={[3]} src={props.identity && props.identity.imageProfile || null}/>
    </Link>
  </Flex>
  <Box {...mainLayout}>
    <Heading f={[3]} level={3} children={props.identity && props.identity.nameDisplay || null} />
    <Paragraph f={[1]} children={props.identity && props.authentication.email || null} />
    <Paragraph f={[1]} children={props.identity && props.identity.biography || null} />
  </Box>
</Flex>
)