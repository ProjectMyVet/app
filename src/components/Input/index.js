import React from 'react'
import { TextInput, View } from 'react-native'

import { useField } from 'formik'
import PropTypes from 'prop-types'
import { MVText } from '../Text'
import { COLORS } from '../../constants'

import styles from './styles'

export function Input(props) {
  const { edit, value, innerRef, placeholder, ...otherProps } = props

  const [field, meta, helpers] = useField(props)

  function onBlur() {
    helpers.setTouched(true)
  }

  function onChange({ nativeEvent }) {
    helpers.setTouched(true)
    helpers.setValue(nativeEvent.text)
  }

  function renderError() {
    if (meta.touched) {
      return (
        <MVText color={COLORS.RED} size={12} style={styles.error}>
          {meta.error || ''}
        </MVText>
      )
    }

    return null
  }

  function renderLabel() {
    if (edit) {
      return (
        <MVText style={styles.editLabel} size={17}>
          {placeholder}
        </MVText>
      )
    }
    return null
  }

  return (
    <View>
      {renderLabel()}
      <TextInput
        placeholder={placeholder}
        ref={innerRef}
        style={styles.input}
        value={field.value || value}
        onBlur={onBlur}
        onChange={onChange}
        {...otherProps}
      />
      {renderError()}
    </View>
  )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  innerRef: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  edit: PropTypes.bool,
}

Input.defaultProps = {
  innerRef: null,
  placeholder: '',
}
