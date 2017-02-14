import React from 'react'
import Radium from 'radium'
import { palette, fontFamily } from '../../theme/Theme.js'

const Headline = ({ children, noLeadMargin = false, style }) => (
  <h5 style={[defaultStyles, noLeadMargin && noLeadMarginStyles, style]}>
    {children}
  </h5>
)

const noLeadMarginStyles = {
  marginTop: 0,
}

const defaultStyles = {
  color: palette.blackPrimary,
  fontFamily: fontFamily,
  fontSize: 24,
  fontWeight: 400,
  lineHeight: '32px',
  marginBottom: 8,
}

export default Radium(Headline)
