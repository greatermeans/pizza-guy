import React from 'react'
import Radium from 'radium'
import { palette, fontFamily } from '../../theme/Theme.js'

const Display3 = ({ children, noLeadMargin = false, style }) => (
  <h3 style={[defaultStyles, noLeadMargin && noLeadMarginStyles, style]}>
    {children}
  </h3>
)

const noLeadMarginStyles = {
  marginTop: 0,
}

const defaultStyles = {
  color: palette.blackSecondary,
  fontFamily: fontFamily,
  fontSize: 56,
  fontWeight: 400,
  lineHeight: 1,
  marginBottom: 28,
}

export default Radium(Display3)
