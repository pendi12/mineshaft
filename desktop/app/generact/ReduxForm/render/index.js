/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { Box } from 'particles'

/* ------------------------- Internal Dependencies -------------------------- */
import Button from 'atoms/Button'
import ReduxField from 'organisms/ReduxField'

/* --------------------------- Styled Components ---------------------------- */
const FormWrapper = styled(Box)`
  background: #FFF;
  display: block;
  padding: 20px;
`
/* ---------------------------- Form Component ------------------------------ */
const FormElements = (props) => {
  const { handleSubmit, isSubmitting, layout } = props
  return (
    <FormWrapper method="POST" onSubmit={handleSubmit} {...layout} {...props}>
      {/* Field | Example */}
      <Field name="exampleField" label="Example Field" component={ReduxField} type="text" />
      {/* Submit */}
      <Button type="submit">Submit</Button>
    </FormWrapper>
  )
}

/* -------------------------- Form Configuration ---------------------------- */
FormElements.propTypes = {
  handleSubmit: PropTypes.func,
  isSubmitting: PropTypes.bool
}

FormElements.defaultProps = {
  is: 'form',
}

export default FormElements
