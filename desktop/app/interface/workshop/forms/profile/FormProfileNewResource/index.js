/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

/* ------------------------- Internal Dependencies -------------------------- */
import { createValidator, required } from 'logic/forms/validation'

/*--- Redux Store ---*/
import { databaseWriteRequest } from 'store/departments/actions'

/* ------------------------ Initialize Dependencies ------------------------- */
import FormRender from './render'

/* --------------------------- Component Entry ------------------------------ */
const FormProfileNewResource = props => <FormRender { ...props} />

/*-- Event Handlers ---*/
const onSubmit = (data, dispatch) => new Promise((resolve, reject) => {
  // Compose | Combine payload and metadata for database write 
  const payload = data
  const metadata = {
    entity: 'community',
    branch: ['resource']
  }

  // Dispatch | Request permission to write to the application database.
  dispatch(databaseWriteRequest({payload, metadata}))
})

/* ----------------------------- Form Validation -------------------------------- */
const validate = createValidator({
  resourceName: [required],
})

/* ----------------------------- React Redux -------------------------------- */
const mapStateToProps = (state) => ({
  initialValues: {}
})

const mapDispatchToProps = dispatch => ({

})

export const config = {
  form: 'FormProfileNewResource',
  fields: [
    'resourceName'
  ],
  destroyOnUnmount: true,
  onSubmit,
  validate
}


export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(config)(FormProfileNewResource))
