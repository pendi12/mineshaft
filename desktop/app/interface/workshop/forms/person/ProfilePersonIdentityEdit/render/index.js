/* ------------------------- External Dependencies -------------------------- */
import React, { PropTypes } from 'react'
import { Field } from 'redux-form'
import styled from 'styled-components'


/* ------------------------- Internal Dependencies -------------------------- */
import Button from 'atoms/Button'
import ReduxField from 'organisms/ReduxField'

import NameFullFieldCollection from 'containers/fields/NameFullFieldCollection'
import AddressFieldCollection from 'containers/fields/AddressFieldCollection'
import ContactFullFieldCollection from 'containers/fields/ContactFullFieldCollection'

/* --------------------------- Styled Components ---------------------------- */
const FormWrapper = styled.form`
  background: #FFF;
  display: block;
  padding: 20px;
`
const FormElements = (props) => {
  const { handleSubmit, isSubmitting, match } = props
  return (
    <FormWrapper method="POST" onSubmit={handleSubmit}>
      <Field name="personID" value={props.token} component={ReduxField} type="hidden" height={30}  />
      <NameFullFieldCollection />
      <ContactFullFieldCollection/>
      <AddressFieldCollection />

      <div><Button type="submit">Save Identity</Button></div>
    </FormWrapper>
  )
}

FormElements.propTypes = {
  handleSubmit: PropTypes.func,
  isSubmitting: PropTypes.bool
}

export default FormElements
