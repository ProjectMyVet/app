import React from 'react'
import { Image, View } from 'react-native'
import { MVButton, MVText } from '../../components'
import { AntDesign } from '@expo/vector-icons'
import { ENV } from '../../../environment'
import * as Google from 'expo-google-app-auth'

import styles from './styles'

export function LoginScreen({ navigation }) {

  function handleSubmit() {
    const config = {
      iosClientId: ENV.IOS_CLIENT_ID,
      androidClientId: ENV.ANDROID_CLIENT_ID,
      scope: ['profile', 'email']
    }
    Google.logInAsync(config)
      .then((result) => {
          const { type, user } = result
          if (type === 'success') {
              setTimeout(() => navigation.navigate('UserType', { user }), 1000)
          } else {
              // TODO: Mostrar mensagem Sign In Canceled
          }
      })
      .catch(error => {
          console.log(error)
      })
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