/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import query from 'apollo/query/UsersEssentials.gql'
import { ListQuery } from 'containers'
/* ------------------------------- Component -------------------------------- */
export default props => <ListQuery 
query='test'
gql={query}
variables={{boundaries:{limitToLast: 10}, order: {reverse: true}}}
itemStyled={{
  w: [1, 0.50]
}}
/>