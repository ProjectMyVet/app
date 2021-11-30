import React from 'react'
import { Image, View } from 'react-native'
import { MVButton, MVText } from '../../components'
import styles from './styles'

export function Teste({ navigation }) {

  return (
    <View style={styles.container}>
      <MVText style={styles.title}>Seja Bem-Vindo!</MVText>
    </View>
  );
}