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
      <Field name="contactEmail" placeholder="name@site.com" component={ReduxField} type="email" height={35} />
    </Box>
    <Box flex='1 1 auto'>
      <Field name="contactPhone" placeholder="(555) 420-1070" component={ReduxField} type="tel" height={35} normalize={normalizePhone} />
    </Box>
  </FieldCollectionWrapper>
)

export default ContactFieldCollection
