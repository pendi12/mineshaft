/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import styled from 'styled-components'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { Absolute, Flex, Box } from 'particles'
import { BackgroundGradient, Container, Heading, Link, Paragraph, Section, SVG} from 'atomic'
import { UserProfileIdentity } from 'containers'
import { DrawerLink } from 'fusion'

import { ResponibilityRapidResponse, TwilioTextSendUser } from 'workshop/forms'

import { LinkIconSimpleUserContext, UserProfileSimple } from 'foundry'
import { ProfileDashboardMenu, UserProfileContextMenu } from 'content/menus'
const ProfileMenuMap = props => <Box bg='white' bs={[1]} p={[10]} >{UserProfileContextMenu.map(item=> <LinkIconSimpleUserContext {...item} uid={props.uid} /> )}</Box>

/* ------------------------------- Component -------------------------------- */
const UserProfileDashboard = props => (
<Absolute left right top bottom align='stretch' h={1} is={Flex} >
  <Box bg='grayLight' w={[1,1, 0.3]} bs={[3]} z={15}>

    <UserProfileSimple {...props}/>
    <ProfileMenuMap {...props} />
    <TwilioTextSendUser {...props} p={[15]} />
  </Box>
  <Box bg='white' w={[1,1, 0.7]} p={[15, 20, 35]} >
    <ResponibilityRapidResponse {...props}/>
  </Box>
</Absolute>)

UserProfileDashboard.defaultProps = {

}

export default UserProfileDashboard