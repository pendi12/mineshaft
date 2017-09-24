/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

/* ------------------------- Internal Dependencies -------------------------- */
/*--- Form Validation ---*/
import { createValidator, required } from 'logic/forms/validation'

/*--- Redux Store ---*/
import { databaseWriteRequest} from 'store/departments/actions'
import {  fromAuthentication } from 'store/departments/selectors'

/* ------------------------ Initialize Dependencies ------------------------- */
import FormRender from './render'

/* --------------------------- Component Entry ------------------------------ */
const FormRedux = props => <FormRender { ...props} />

/* ----------------------------- Form Validation -------------------------------- */
const validate = createValidator({

})

/* ---------------------------- Form Handlers ------------------------------- */
/*-- Event Handlers ---*/
const onSubmit = (data, dispatch, state) => new Promise((resolve, reject) => {
  // Convert Date{Object} into Date{String} for storage in the database.
  Object.keys(data).map(field=>{
    if (Object.prototype.toString.call(data[field]) === '[object Date]'){
      data[field] = data[field].toString()
    }
  })

  const payload = {
    payload: {
      ...data
    },
    metadata: {
      userRequesting: data.userRequesting,
    }
  }

  // Dispatch | Request Database Writes
  const config = {writeType: 'create'}
  const metadata = {entity: 'infrastructure', branch: ['responsibility', 'rapidResponse']}
  dispatch(databaseWriteRequest({payload, metadata, config }))
})

const mapStateToProps = (state) => { 
  const userRequesting = fromAuthentication.getUserId(state)
  return {
    initialValues: {
      userRequesting
    }
  }
}

const mapDispatchToProps = dispatch => ({

})

/* -------------------------- Form Configuration ---------------------------- */
const config = {
  form: 'TwilioTextSend',
  fields: [
    'timeStart',
    'timeEnd',
    'dateStart',
    'dateEnd',
    'dayMonday',
    'dayTuesday',
    'dayWednesday',
    'dayThursday',
    'dayFriday',
    'daySaturday',
    'daySunday',
    'userRequesting',
  ],
  destroyOnUnmount: true,
  onSubmit,
  validate
}

/*-- Export Form ---*/
export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(config)(FormRedux))
