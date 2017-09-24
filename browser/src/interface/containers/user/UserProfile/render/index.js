/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import styled from 'styled-components'
import { Flex, Box, Image, Text } from 'particles'
import Login from 'workshop/forms/authentication/AuthorizationLogin'
/* ------------------------- Internal Dependencies -------------------------- */
import { Button, Link } from 'atomic'
/* --------------------------- Styled Components ---------------------------- */
import { PopoverPure } from 'containers'
import { LinkIconSimple } from 'foundry'
import { ProfileMenu } from 'content/menus'
const ProfileMenuMap = <Box bg='white' bs={[1]} p={[10]} >{ProfileMenu.map(item=> <LinkIconSimple {...item}/> )}</Box>
/* ------------------------------- Component -------------------------------- */

const UserProfile = (props) => {
  if (!props.user) return <Login gradient='orange' children='Login/Register' />
  const { photoURL, displayName } = props.user
  return (
    <Flex {...props} direction={['row']} justify='center' align={['center', null, 'center']} wrap='wrap' textAlign={['center']} w={[1]} >
      <Box flex={['1 1 0', '2 1 auto']}  >
        <Text color='white' ts='light' >{displayName}</Text>
      </Box>
      <Box flex={['1 1 0', '1 1 auto']}  >
        <PopoverPure body={ProfileMenuMap} >
          <Image src={photoURL} h={[37.5]} w={[37.5]} br={0.5} bs={[2]} b={['2px solid transparent']} bc={['white']} />
        </PopoverPure>
      </Box>
      <Box flex={['1 1 0', '2 1 auto']}  >
        <Button gradient='orange' onClick={props.logout} f={[0]} >Logout</Button>
      </Box>
    </Flex>
  )
}

/* ---------------------------- Export Package ------------------------------ */
export default UserProfile