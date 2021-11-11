import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MVText } from '../../components'
import { COLORS } from '../../constants'

import styles from './styles'

export function RegisterScreen() {
  return (
    <View style={styles.container}>
      <MVText size={22} color={COLORS.BLACK} style={styles.title}>Cadastro</MVText>
    </View>
  );
}