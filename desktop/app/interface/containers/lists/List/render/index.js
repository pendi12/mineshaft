/* ------------------------- External Dependencies -------------------------- */
import _ from 'lodash'
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { Flex } from 'particles'
import { Card, LinkIcon } from 'foundry'
/* ------------------------ Initialize Dependencies ------------------------- */
let applyStyle = _.curry((styled,item)=> ({...item,inner:{...styled.inner},outer:{...styled.outer}}))
/* ---------------------------- Module Package ------------------------------ */
const ListQuery = props => {
  const ListStyled = props.list ? _.map(props.list, _.curry(applyStyle)(props.styled)) : null;
  const ListFoundry = props.list && ListStyled ? _.map(ListStyled, Card) : null
  return (
    <Flex direction={['row']} wrap='wrap' {...props}>
      {ListFoundry}
    </Flex>
  )
}
/* ---------------------------- Export Package ------------------------------ */
export default ListQuery
