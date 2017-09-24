/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import {Absolute} from 'particles'
/* ------------------------- Internal Dependencies -------------------------- */
/* --------------------------- Styled Components ---------------------------- */
const layout = {
  bottom: true,
  left: true,
  right: true,
  top: true,
}

/* ------------------------- Component Properties --------------------------- */
/* ------------------------------- Component -------------------------------- */
export default props => <Absolute {...layout} {...props} />