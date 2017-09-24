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
  gradient:'cherry',
  py:[10],
  textAlign: 'center'
}

const mainLayout = {
  flex:['2 1 0'],
  pl:[10],
  bg:'white',
  p:[7.5]
}

export default props => (
<Flex direction={['row']} align='stretch' justify='center' w={[1]} {...props} >
  <Flex {...imageLayout } p={[10]} br={['0 0 10px 0']} bs={[0]} >
    <Link to={`/dashboard/users/${props && props.uid || null }`} >
      <Image w={[85]} b='2px solid' br='50%' bc='white' bs={[0]} src={props.identity && props.identity.imageProfile || null}/>
    </Link>
  </Flex>
  <Box {...mainLayout}>
    <Heading f={[3]} level={3} children={props.identity && props.identity.nameDisplay || null} />
    <Heading f={[2]} level={6} fontWeight={[300]} children={props.identity && props.identity.contactEmail || null} />
    <Heading f={[2]} level={6} fontWeight={[300]} children={props.identity && props.identity.contactPhone || null} />
    <Heading f={[1]} level={6} fw={[300]} children={props.identity && props.identity.contactURL || null} />
  </Box>
</Flex>
)