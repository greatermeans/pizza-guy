import React from 'react'
import Radium from 'radium'
import { palette, fontFamily } from '../../theme/Theme.js'

const Title = ({ children, style }) => (
  <h6 style={[defaultStyles, style]}>
    {children}
  </h6>
)

const defaultStyles = {
  color: palette.blackPrimary,
  fontFamily: fontFamily,
  fontSize: 20,
  fontWeight: 500,
  lineHeight: 1,
  marginTop: 16,
  marginBottom: 16,
}

export default Radium(Title)
