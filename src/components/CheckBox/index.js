import React from 'react'
import { Pressable } from 'react-native'
import styles from './styles'

export function MVCheckBox(props) {
    const { checked, onChange, ...otherProps } = props

    function onCheckmarkPress() {
        onChange(!checked);
    }
    
    return (
        <Pressable
          style={[styles.checkboxBase, checked && styles.checkboxChecked]}
          onPress={onCheckmarkPress}>
          {checked && <Ionicons name="checkmark" size={24} color="white" />}
        </Pressable>
    )
}