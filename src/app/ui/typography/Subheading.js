import React from 'react'
import Radium from 'radium'
import { palette, fontFamily } from '../../theme/Theme.js'

const Subheading = ({ children, roomy = false, noLeadMargin = false, style }) => (
  <p style={[defaultStyles, roomy && roomyStyles, noLeadMargin && noLeadMarginStyles, style]}>
    {children}
  </p>
)

const noLeadMarginStyles = {
  marginTop: 0,
}

const roomyStyles = {
  lineHeight: '28px',
  marginBottom: 2,
}

const defaultStyles = {
  color: palette.blackPrimary,
  fontFamily: fontFamily,
  fontSize: 16,
  fontWeight: 400,
  lineHeight: '24px',
  marginBottom: 4,
  marginTop: 24,
  '@media (min-width: 1024px)': {
    fontSize: 15,
    marginBottom: 3,
  },
}

export default Radium(Subheading)
