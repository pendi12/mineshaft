/* ------------------------- External Dependencies -------------------------- */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Dimensions from 'react-dimensions'
/* ------------------------- Internal Dependencies -------------------------- */
import { GraphExample, GraphBlock, MoneroMining } from 'foundry'
/* ------------------------ Initialize Dependencies ------------------------- */

/* --------------------------- Child Components ----------------------------- */

/* ---------------------------- Module Package ------------------------------ */
class Dimensionify extends Component {
  /*--- Component Mount ---*/
  componentDidMount() {
    console.log(this.props)
  }

  /*--- Render ---*/
  render() {
    return (
    <div>
      <GraphBlock height={this.props.containerWidth /2.3 } width={this.props.containerWidth} bins={16} bin={16} count={155} cy={16} />
    </div>
    )
  }
}
/* ---------------------------- Export Package ------------------------------ */
export default Dimensions()(Dimensionify)
