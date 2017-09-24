/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'
import MenuItem from 'material-ui/MenuItem'
import { AutoComplete as MUIAutoComplete } from 'material-ui'
import { RadioButton } from 'material-ui/RadioButton'
import {
  AutoComplete,
  Checkbox,
  DatePicker,
  TimePicker,
  RadioButtonGroup,
  SelectField,
  Slider,
  TextField,
  Toggle
} from 'redux-form-material-ui'

/* ------------------------- Internal Dependencies -------------------------- */
import { Flex, Box, Button, Heading, Image, Paragraph, HorizontalRule, Container, Span } from 'atomic'
import ReduxField from 'organisms/ReduxField'
import { LoginUsernamePasswordFieldCollection } from 'containers'

/* --------------------------- Styled Components ---------------------------- */
const FormWrapper = styled(Box)`
  background: #FFF;
  display: block;
  padding: 20px;
`

const fieldAlgorithm = {
  name: "miningAlgo",
  hintText:"Select Algorithm",
  floatingLabelText:"Algorithm",
  fullWidth: true
}
const fieldAffinity = {
  name: "miningAffinity",
  hintText:"Select Affinity",
  floatingLabelText:"Affinity",
  fullWidth: true
}

const fieldCpuCapacity = {
  name: "miningCpuCapacity",
  defaultValue: 75,
  format: null,
  min: 0,
  max: 100,
  step: 1,
}
const fieldThreadCount = {
  name: "miningThreadCount",
  defaultValue: 24,
  format: null,
  min: 0,
  max: 32,
  step: 1,
}
const fieldUserAgent = {
  name: "miningUserAgent",
  hintText:"Select User Agent. If unsure leave to default.",
  floatingLabelText:"User Agent",
  fullWidth: true
}
/* ---------------------------- Form Component ------------------------------ */
const FormElements = (props) => {
  const { handleSubmit, isSubmitting, layout } = props
  console.log(props)
  return (
    <FormWrapper method="POST" onSubmit={handleSubmit} {...layout} {...props}>
      <Heading level={[3]} f={[7,8]}>Mining Configuration</Heading>
      <Field
        name="miningCurrency"
        component={SelectField}
        hintText="Cryptocurreny"
        floatingLabelText="Currency Selection"
        fullWidth
      >
        <MenuItem value="miningEthereum" primaryText="Ethereum" />
        <MenuItem value="miningMonero" primaryText="Monero" />
      </Field>
      <Field
        name="miningPool"
        component={SelectField}
        hintText="Mining Pool Selection - Choose The Best Mining Pool"
        floatingLabelText="Mining Pool"
        fullWidth
      >
        <MenuItem value="poolXMRSupport" primaryText="XMR Support | xmrsupport.com" />
        <MenuItem value="poolMoneroPool" primaryText="Monero Pool | http:moneropool.com" />
      </Field>


      <Heading level={[3]} f={[4]} color='blue' fontWeight='bold'>Thread Count: {props.live.miningThreadCount} </Heading>
      <Field component={Slider}{...fieldThreadCount} m={0} />


      <Flex direction='row' align='center' justify='space-evenly' >
        <Box>
          <Field name="miningConnectionRetryCount" label="Retry Count" component={ReduxField} type="text" w={1} />
        </Box>
        <Box ml={[10]}>
          <Field name="miningConnectionRetryCountPause" label="Retry Pause" component={ReduxField} type="text" w={1} />
        </Box>
      </Flex>
      <Field {...fieldUserAgent} component={SelectField}>
        <MenuItem value="miningUserAgent 1" primaryText="Option 1" />
        <MenuItem value="miningUserAgent 2" primaryText="Option 2" />
        <MenuItem value="miningUserAgent 3" primaryText="Option 3" />
        <MenuItem value="minigUserAgentCustom" primaryText="Custom User Agent" />
      </Field>

      <Box py={[20,30]} >
        <Heading level={[3]} f={[3]}>Credientials <Span fontWeight='300' >If Required</Span> </Heading>
        <LoginUsernamePasswordFieldCollection/>
      </Box>
      <HorizontalRule bi='colorBase' bs={1} mb={[10, 20]} />
      <Heading level={[3]} f={[5]}>Optimization</Heading>
      <Field {...fieldAlgorithm} component={SelectField}>
        <MenuItem value="miningAlgoAuto" primaryText="Automatic" />
        <MenuItem value="minigAlgoSelect" primaryText="Manual Selection" />
      </Field>
      <Field {...fieldAffinity} component={SelectField}>
        <MenuItem value="miningAffinityEnabled" primaryText="Enabled" />
        <MenuItem value="miningAffinityDisabled" primaryText="Disabled" />
      </Field>

      <Heading level={[3]} f={[3]}>Computer</Heading>
      <Heading level={[3]} f={[2]} color='blue' fontWeight='blue'>Max CPU: {props.live.miningCpuCapacity} %</Heading>
      <Field component={Slider}{...fieldCpuCapacity}/>
      <Field name="miningAddons" component={RadioButtonGroup}>
        <RadioButton value="miningAddonSafemode" label="Safe Mode" />
        <RadioButton value="miningAddonKeepAlive" label="Keep Alive" />
        <RadioButton value="miningAddonKeepAlive" label="Keep Alive" />
        <RadioButton value="miningAddonDonate" label="Donate" />
      </Field>

      
      <Heading level={[3]} f={[3]}>Energy</Heading>
      <Heading level={[3]} f={[5]}>Security</Heading>
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
