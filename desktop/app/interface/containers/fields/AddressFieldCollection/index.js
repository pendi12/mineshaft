/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { Flex, Box } from 'rebass'
import { width } from 'styled-system'
import {
  DatePicker,
  TimePicker
} from 'redux-form-material-ui'

/* ------------------------- Internal Dependencies -------------------------- */
import ReduxField from 'organisms/ReduxField'
import FieldCollectionWrapper from 'containers/fields/FieldCollectionWrapper'

/* ---------------------------- Module Package ------------------------------ */
const FieldCollectionComponent = props => (
    <FieldCollectionWrapper direction={['column']} justify='space-evenly'>
      <Box w={[1]} >
        <Field name="addressStreet" placeholder="Address" component={ReduxField} type="text" height={30} />
      </Box>
      <FieldCollectionWrapper direction={['column', 'row']} justify='space-evenly'>
        <Box w={[1]} >
          <Field name="addressCity" placeholder="City" component={ReduxField} type="text" height={30} />
        </Box>
        <Box w={[1]} >
          <Field name="addressState" placeholder="State" component={ReduxField} type="text" height={30} />
        </Box>
        <Box w={[1]} >
          <Field name="addressZip" placeholder="Zip" component={ReduxField} type="number" height={30} />
        </Box>
      </FieldCollectionWrapper>
      <Box w={[1]} >
        <Field name="addressCountry" placeholder="Country" component={ReduxField} type="text" height={30} />
      </Box>
    </FieldCollectionWrapper>
  )

export default FieldCollectionComponent
