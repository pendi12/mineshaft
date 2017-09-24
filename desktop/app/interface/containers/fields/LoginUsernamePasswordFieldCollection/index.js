/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { Box } from 'particles'

/* ------------------------- Internal Dependencies -------------------------- */
import ReduxField from 'organisms/ReduxField'
import FieldCollectionWrapper from 'containers/fields/FieldCollectionWrapper'

// Normalize Input
import normalizePhone from 'logic/forms/normalize/phone'

/* ---------------------------- Module Package ------------------------------ */
const ContactFieldCollection = props => (
  <FieldCollectionWrapper direction={['column', 'row']} >
    <Box flex='1 1 auto'>
      <Field name="loginUsername" placeholder="Username" component={ReduxField} type="text" height={40} />
    </Box>
    <Box flex='1 1 auto'>
      <Field name="loginPassword" placeholder="Password" component={ReduxField} type="password" height={40} />
    </Box>
  </FieldCollectionWrapper>
)

export default ContactFieldCollection
