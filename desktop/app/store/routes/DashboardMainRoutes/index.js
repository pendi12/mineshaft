/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar'
/* ------------------------- Internal Dependencies -------------------------- */
import { fromMain } from 'workshop/zones'
import {Dimension} from 'containers'
import {Heading} from 'atomic'
import MiningConfiguration from 'workshop/forms/mining/MiningConfiguration'
import { GraphExample, GraphBlock, MoneroMining } from 'foundry'
/* ------------------------------- Component -------------------------------- */
const Chart = ()=> 
<div>

  <Heading level={[3]} f={[6]}>Blockchain Deep Dive</Heading>
  <Dimension/>
  <Heading level={[3]} f={[6]}>Cryptocurrency Market Trends </Heading>
  <PerfectScrollbar suppressScrollY>
    <GraphExample height={500} width={2500} margin={0} />
    </PerfectScrollbar >
  </div>

export default () => (
  <Switch>
    <Route exact path="/statistics" component={MoneroMining} />
    <Route exact path="/opportunity" component={Chart} />
    <Route exact path="/" component={MiningConfiguration} />
  </Switch>);
