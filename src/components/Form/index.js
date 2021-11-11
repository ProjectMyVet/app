import React from 'react'
import { View } from 'react-native'

import { Formik } from 'formik'
import PropTypes from 'prop-types'

export function Form(props) {
  const { initialValues, onSubmit, children, innerRef } = props

  return (
    <Formik
      initialValues={initialValues}
      innerRef={innerRef}
      onSubmit={onSubmit}
    >
      <View>{children}</View>
    </Formik>
  )
}

Form.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  initialValues: PropTypes.object.isRequired,
  innerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]).isRequired,
  onSubmit: PropTypes.func.isRequired,
}
