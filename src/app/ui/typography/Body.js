import React from 'react'
import Radium from 'radium'
import { palette, fontFamily } from '../../theme/Theme.js'

const Body = ({ children, heavy = false, noLeadMargin = false, style }) => (
  <div style={[defaultStyles, heavy && heavyStyles, noLeadMargin && noLeadMarginStyles, style]}>
    {children}
  </div>
)

const noLeadMarginStyles = {
  marginTop: 0,
}

const heavyStyles = {
  fontWeight: 500,
}

const defaultStyles = {
  color: palette.blackPrimary,
  fontFamily: fontFamily,
  fontSize: 14,
  fontWeight: 400,
  lineHeight: '24px',
  marginBottom: 2,
  marginTop: 24,
  '@media (min-width: 1024px)': {
    fontSize: 13,
    marginBottom: 1,
  },
}

export default Radium(Body)
