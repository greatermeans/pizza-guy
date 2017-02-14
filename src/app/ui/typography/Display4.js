import React from 'react'
import Radium from 'radium'
import { palette, fontFamily } from '../../theme/Theme.js'

const Display4 = ({ children, style }) => (
  <h1 style={[defaultStyles, style]}>
    {children}
  </h1>
)

const defaultStyles = {
  color: palette.blackSecondary,
  fontFamily: fontFamily,
  fontWeight: 300,
  fontSize: 112,
  lineHeight: 1,
  marginBottom: 56,
}

export default Radium(Display4)
