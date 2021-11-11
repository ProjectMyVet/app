import React from 'react'
import { Image, View } from 'react-native'
import { MVButton, MVText } from '../../components'
import { AntDesign } from '@expo/vector-icons'

import styles from './styles'

export function LoginScreen({ navigation }) {

  function handleSubmit() {
    navigation.navigate('UserType')
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: 'https://cdn.discordapp.com/attachments/576875163686010911/908133391621324800/unknown.png' }} />
      <MVText style={styles.title}>Seja Bem-Vindo!</MVText>
      <View style={styles.line} />
      <MVText style={styles.subtitle}>Para acessar o MyVet continue com:</MVText>
      <MVButton style={styles.button} onPress={handleSubmit}>
        <MVText>Continuar com o Google</MVText>
        <AntDesign name='google' size={25} style={styles.icon} />
      </MVButton>
    </View>
  );
}