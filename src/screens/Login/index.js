import React from 'react'
import { Image, View } from 'react-native'
import { MVButton, MVText } from '../../components'
import { AntDesign } from '@expo/vector-icons'
import { ENV } from '../../../environment'
import axios from 'axios'
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
              axios.get('http://localhost:8010/myvet/users/check', { params: { idToken: user.id }})
                .then(response => setTimeout(() => navigation.navigate('MenuTabNavigation', { user, userType: response.data.userType, userId: response.data.id }), 100))
                .catch(error => setTimeout(() => navigation.navigate('UserType', { user }), 100))
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
      <Image style={styles.image} source={{ uri: 'https://cdn.discordapp.com/attachments/576875163686010911/929724367473115146/4.png' }} />
      <MVText style={styles.title}>Seja Bem-Vindo!</MVText>
      <View style={styles.line} />
      <MVText style={styles.subtitle}>Para acessar o MyVet continue com:</MVText>
      <MVButton style={styles.button} onPress={handleSubmit}>
        <MVText style={styles.continue} >Continuar com o Google</MVText>
        <AntDesign name='google' size={25} style={styles.icon} />
      </MVButton>
    </View>
  )
}