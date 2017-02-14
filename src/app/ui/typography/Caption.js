import React from 'react'
import Radium from 'radium'
import { palette, fontFamily } from '../../theme/Theme.js'

const Caption = ({ children, style }) => (
  <small style={[defaultStyles, style]}>
    {children}
  </small>
)

const defaultStyles = {
  color: palette.blackSecondary,
  fontFamily: fontFamily,
  fontSize: 12,
  fontWeight: 400,
  lineHeight: 1,
  marginBottom: 6,
}

export default Radium(Caption)
