import React from 'react'
import { Pressable } from 'react-native'
import styles from './styles'
import { Ionicons } from '@expo/vector-icons'; 

export function MVCheckBox({ key, checked, onChange }) {
    
    return (
        <>
        {console.log(key)}
        <Pressable
          style={[styles.checkboxBase, checked && styles.checkboxChecked]}
          onPress={() => console.log(key)}>
          {checked && <Ionicons name="checkmark" size={24} color="white" />}
        </Pressable>
        </>
    )
}