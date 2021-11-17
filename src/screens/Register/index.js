import { StatusBar } from 'expo-status-bar'
import React, { useRef, useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MVText, MVForm, MVInput } from '../../components'
import { COLORS } from '../../constants'

import styles from './styles'

export function RegisterScreen({ navigation, route }) {
  const formRef = useRef(null)
  const [user, setUser] = useState({})

  useEffect(() => {
    setUser(route.params.user)
  }, [route])

  return (
    <View style={styles.container}>
      <MVText size={22} color={COLORS.BLACK} style={styles.title}>Cadastro</MVText>
      <MVForm
          initialValues={{ email: '', password: '' }}
          innerRef={formRef}
          onSubmit={({ email, password }) => {
            // efetuar chamada
          }}
        >
          <MVInput
            name='email'
            placeholder='E-mail'
            value={user.email}
            onSubmitEditing={() => formService.setFocus('password')}
          />
        </MVForm>
    </View>
  );
}