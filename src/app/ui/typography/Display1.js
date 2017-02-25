import React from 'react'
import Radium from 'radium'
import { palette, fontFamily } from '../../theme/Theme.js'

const Display1 = ({ children, noLeadMargin = false, style }) => (
  <h4 style={[defaultStyles, noLeadMargin && noLeadMarginStyles, style]}>
    {children}
  </h4>
)

const noLeadMarginStyles = {
  marginTop: 0,
}

const defaultStyles = {
  color: palette.blackSecondary,
  fontFamily: fontFamily,
  fontSize: 34,
  fontWeight: 400,
  lineHeight: '40px',
  marginBottom: 3,
}

export default Radium(Display1)
