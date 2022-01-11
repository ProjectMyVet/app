import React from 'react'
import { TouchableOpacity, ActivityIndicator } from 'react-native'

import PropTypes from 'prop-types'

import styles from './styles'
import { MVText } from '../Text'
import { COLORS } from '../../constants'

export function MVButton(props) {
  const { onPress, children, isLoading, style, ...otherProps } = props

  function renderLabel() {
    if (isLoading) {
      return <ActivityIndicator color={COLORS.WHITE} />
    }

    return (
      <MVText color={COLORS.WHITE} size={17} style={styles.label}>
        {children}
      </MVText>
    )
  }

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[styles.button, style]}
      onPress={onPress}
      {...otherProps}
    >
      {renderLabel()}
    </TouchableOpacity>
  )
}

MVButton.propTypes = {
  children: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
}

MVButton.defaultProps = {
  isLoading: false,
}
