/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import {Card, LinkIcon } from 'foundry'
import { MoneroMining } from 'content/software'
import { List } from 'containers'
/* ------------------------------- Component -------------------------------- */
export default props => <List
  list={MoneroMining}
  styled={{
    inner:{ h:[1], w: [1]},
    outer: { mb:[10], px: [10], w: [1, 0.50, 0.333333333]}
  }}
  justify='stretch'
/>