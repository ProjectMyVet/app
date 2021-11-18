import React from 'react'
import { View, Text, TextInput } from 'react-native'
import styles from './styles'

export function MVInput(props) {
    const { label, icon, isPassword, hidePassword, setHidePassword, ...otherProps } = props
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.input} {...otherProps} />
        </View>
    )
}