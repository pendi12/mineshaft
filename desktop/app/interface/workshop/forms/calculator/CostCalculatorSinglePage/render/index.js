/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { Flex, Box, Grid} from 'particles'

import {
  Checkbox,
} from 'redux-form-material-ui'
/* ------------------------- Internal Dependencies -------------------------- */
import assets  from 'assets'
import { Button, Image,  Paragraph, Heading } from 'atomic'
import ReduxField from 'organisms/ReduxField'

/* --------------------------- Styled Components ---------------------------- */
const FormWrapper = styled(Grid)`
  background: #FFF;
  display: block;
  padding: 20px;
`
/* ---------------------------- Form Component ------------------------------ */
const FormElements = (props) => {
  const { handleSubmit, isSubmitting, calculatorFocus, layout } = props
  return (
    <FormWrapper method="POST" onSubmit={handleSubmit} {...layout}>
      <Flex direction={['row']} align={['center']}>
        <Image src={assets.graphics.vector} w={[55]} mt={[-30]} ml={[-30]} />
        <Heading fontSize={[3,4]} mt={[-30]} ml={[10]}><strong>Design</strong> - Pixels</Heading>
      </Flex>
      <Flex direction={['column']} mt={[10]} mb={[10,20]}>
        <Box onMouseOver={()=>calculatorFocus('designLogo')}>
          <Grid><Field name="designLogo" component={Checkbox} /></Grid>
          <Grid>
              <Heading f={[2]} level={[5]} fontWeight={[500]}><strong>Logo</strong> - $400 | Internet Ready Logo (Multiple Sizes) </Heading>
              <Paragraph f={[]}>A modern logo revamped for the Internet and optimized for legibility on all devices</Paragraph>
          </Grid>
        </Box>
        <Box onMouseOver={()=>calculatorFocus('designBrand')}>
          <Grid><Field name="designBrand" component={Checkbox} /></Grid>
          <Grid>
              <Heading f={[2]} level={[5]} fontWeight={[500]}><strong>Brand</strong> - $250 | Modern Colors &amp; Gradients and Hues </Heading>
              <Paragraph f={[]}>Enhanced user experience with a smooth layout, for a delightful experience.</Paragraph>
          </Grid>
        </Box>
      </Flex>
      <Flex direction={['row']} align={['center']} mt={[10, 20, 40]}>
        <Image src={assets.graphics.server} w={[45]} w={[55]} mt={[-30]} ml={[-30]} />
        <Heading fontSize={[3,4]} mt={[-30]} ml={[10]}><strong>Development</strong> - Code</Heading>
      </Flex>
      <Flex direction={['column']} mt={[10, 20]} >
        <Box onMouseOver={()=>calculatorFocus('codeForms')}>
          <Grid><Field name="codeForms" component={Checkbox} /></Grid>
          <Grid>
              <Heading f={[2]} level={[4]} fontWeight={[500]}><strong>Forms</strong> - $200 | Easily Collect Data Online</Heading>
              <Paragraph f={[]}>Easily coolection information like orders, event rsvp, or sales questionaire. </Paragraph>
          </Grid>
        </Box>
        <Box onMouseOver={()=>calculatorFocus('codeCommerce')}>
          <Grid><Field name="codeCommerce" component={Checkbox} /></Grid>
          <Grid>
              <Heading f={[2]} level={[4]} fontWeight={[500]}><strong>Commerce</strong> - $350 | Sell Services/Products</Heading>
              <Paragraph f={[]}>Simple online commerce store to sell multiple products + powerful seller tools.</Paragraph>
          </Grid>
        </Box>
      </Flex>
      <Flex direction={['row']} align={['center']} mt={[10, 20, 40]}>
        <Image src={assets.graphics.lab} w={[45]} w={[55]} mt={[-30]} ml={[-30]} />
        <Heading fontSize={[3,4]} mt={[-30]} ml={[10]}><strong>Infrastructure</strong> - Tools</Heading>
      </Flex>
      <Flex direction={['column']} mt={[10, 20]} >
        <Box onMouseOver={()=>calculatorFocus('businessAnalytics')}>
          <Grid><Field name="businessAnalytics" component={Checkbox} /></Grid>
          <Grid>
              <Heading f={[2]} level={[5]} fontWeight={[500]}><strong>Analytics</strong> - $200 | Make Smarter Decisions</Heading>
              <Paragraph f={[]}>Track the effectiveness of marketing campaigns and analyze incoming user traffic.</Paragraph>
          </Grid>
        </Box>
        <Box onMouseOver={()=>calculatorFocus('businessEmail')}>
          <Grid><Field name="businessEmail" component={Checkbox} /></Grid>
          <Grid>
              <Heading f={[2]} level={[5]} fontWeight={[500]}><strong>Social Media</strong> - $350 | Track Important Metrics</Heading>
              <Paragraph f={[]}>Optimize the site metatags for optimal sharing performance + engagement analytics.</Paragraph>
          </Grid>
        </Box>
      </Flex>
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
