/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components'
import { Box } from 'rebass'
/* ------------------------- External Dependencies -------------------------- */
import Front from 'workshop/pages/main/Front'
import { BlockBranding }  from 'workshop/blocks'

const HeaderRoutes = styled(Box)``

HeaderRoutes.defaultProps = {
  pos: 'relative',
  z: 5
}

export default () => (
  <HeaderRoutes>
    <Route path="/" component={BlockBranding} />
  </HeaderRoutes>);

