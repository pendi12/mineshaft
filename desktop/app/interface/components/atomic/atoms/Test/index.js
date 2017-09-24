/* ------------------------- External Dependencies -------------------------- */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Dimensions from 'react-dimensions'
/* ------------------------- Internal Dependencies -------------------------- */

/* ------------------------ Initialize Dependencies ------------------------- */

/* --------------------------- Child Components ----------------------------- */

/* ---------------------------- Module Package ------------------------------ */
class Container extends Component {

  /*--- Property Types ---*/
  static propTypes = {
    loading: PropTypes.bool
  }

  /*--- Default Properties ---*/
  static defaultProps = {
    loading: true
  }

  /*--- Component Mount ---*/
  componentDidMount() {
    console.log(this.props)
  }

  /*--- Render ---*/
  render() {
    return (
    <div>
     
    </div>
    )
  }
}
/* ---------------------------- Export Package ------------------------------ */
export default Dimensions()(Container)
