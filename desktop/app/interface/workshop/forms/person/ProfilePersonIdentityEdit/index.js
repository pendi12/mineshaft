/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import _ from 'lodash'
import filterKeys from 'filter-keys'

/* ------------------------- Internal Dependencies -------------------------- */
import { createValidator, required } from 'logic/forms/validation'

/*--- Redux Store ---*/
import { databaseWriteRequest } from 'store/departments/actions'
import { selectPersonPublic } from 'store/departments/database/selectors'

/* ------------------------ Initialize Dependencies ------------------------- */
import FormRender from './render'

/* --------------------------- Component Entry ------------------------------ */
const FormRedux = props => <FormRender { ...props} />

/*-- Event Handlers ---*/
const onSubmit = (data, dispatch, props) => new Promise((resolve, reject) => {
  // Normalize Form Submission Data 
  const address = _.pickBy(data, (value, key)=> key.startsWith("address"));
  const contact =  _.pickBy(data, (value, key)=> key.startsWith("contact"));
  const identity = _.pickBy(data, (value, key)=> key.startsWith("identity"));

  // Compose Dispatch
  const metadata = {entity: 'community',branch: ['people', props.match.params.token,]}
  const payload = { contact, identity, address}
  const config = {writeType: 'patch'}

  // Geocoding | US Consensus

  // Dispatch | Request Database Write
  dispatch(databaseWriteRequest({payload, metadata, config }))
})

/* ----------------------------- Form Validation -------------------------------- */
const validate = createValidator({
  exampleField: [required],
})

/* ----------------------------- React Redux -------------------------------- */
const mapStateToProps = (state, props) => {
  const token = props.match.params.token
  const {identity, contact, address} = selectPersonPublic(state, props.match.params.token)
  if (identity || contact || address) {
  console.log(...identity)
  return {
    initialValues: {
      token,
      ...identity,
      ...contact,
      ...address
    }
  }}
}

const mapDispatchToProps = dispatch => ({

})

const config = {
  form: 'ProfilePersonIdentityEdit',
  fields: [
    'nameFirst',
    'nameLast',
  ],
  destroyOnUnmount: true,
  onSubmit,
  validate
}


export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(config)(FormRedux))
