/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

/* ------------------------- Internal Dependencies -------------------------- */
/*--- Form Validation ---*/
import { createValidator, required } from 'logic/forms/validation'

/*--- Redux Store ---*/
import { calculatorFocus } from 'store/departments/actions'

/* ------------------------ Initialize Dependencies ------------------------- */
import FormRender from './render'

/* --------------------------- Component Entry ------------------------------ */
const FormRedux = props => <FormRender { ...props} />


/* ----------------------------- Form Validation -------------------------------- */
const validate = createValidator({

})

/* ---------------------------- Form Handlers ------------------------------- */
/*-- Event Handlers ---*/
const onSubmit = (data, dispatch) => new Promise((resolve, reject) => {
  const { } = data
})

const mapStateToProps = (state) => ({
  initialValues: {}
})

const mapDispatchToProps = dispatch => ({
  calculatorFocus: (service) => dispatch(calculatorFocus(service),)
})

/* -------------------------- Form Configuration ---------------------------- */
export const config = {
  form: 'CostCalculatorSinglePage',
  fields: [
    '',
  ],
  destroyOnUnmount: true,
  onSubmit,
  validate
}

/*-- Export Form ---*/
export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(config)(FormRender))
