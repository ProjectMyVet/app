import React, { useMemo } from 'react'
import { Text } from 'react-native'

import PropTypes from 'prop-types'

import styles from './styles'
import { COLORS } from '../../constants'

// const fontTypes = {
//   'primary-regular': 'Roboto_400Regular',
//   'secondary-bold': 'Poppins_700Bold',
// }

export function MVText(props) {
  const { children, color, uppercase, size, style, type, ...otherProps } = props

  const textCustomStyle = useMemo(() => {
    return {
      color,
      fontSize: size,
      textTransform: uppercase ? 'uppercase' : null,
      // fontFamily: fontTypes[type],
    }
  }, [color, uppercase, size, type])

  return (
    <Text style={[textCustomStyle, style]} {...otherProps}>
      {children}
    </Text>
  )
}

MVText.defaultProps = {
  color: COLORS.WHITE,
  size: 14,
  style: {},
  type: 'primary-regular',
  uppercase: false,
}
