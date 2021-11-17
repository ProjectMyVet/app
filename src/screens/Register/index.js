import React, { useRef, useEffect, useState } from 'react'
import { Image, View, ScrollView } from 'react-native'
import { MVText, MVForm, MVInput, MVButton } from '../../components'
import { COLORS } from '../../constants'

import styles from './styles'

export function RegisterScreen({ navigation, route }) {
  const formRef = useRef(null)
  const [user, setUser] = useState({})
  const [userType, setUserType] = useState('')

  useEffect(() => {
    setUser(route.params.user)
    setUserType(route.params.userType)
  }, [route])

  function renderVetFields() {
    if (userType === 'vet') {
      return <>
          <MVInput
            name='crmv'
            placeholder='CRMV'
          />
          <MVInput
            name='career'
            placeholder='Carreira'
          />
        </>
    }
  }

  function renderCustomerFields() {
    if (userType === 'customer') {
      return <>
          <MVInput
            name='bio'
            placeholder='Biografia'
          />
        </>
    }
  }

  return (
    <ScrollView style={styles.container}>
      <MVText size={22} color={COLORS.BLACK} style={styles.title}>Cadastro</MVText>
      <View style={styles.imageContainer}>
        <Image resizeMode='cover' style={styles.image} source={{ uri: user.photoUrl }} />
      </View>
      <MVForm
          initialValues={{ name: user.name, email: user.email, crmv: '', career: '', bio: '' }}
          innerRef={formRef}
          onSubmit={({ email, password }) => {
            // efetuar chamada
          }}
        >
          <MVInput
            name='name'
            placeholder='Nome'
            value={user.name}
          />
          <MVInput
            name='email'
            placeholder='E-mail'
            value={user.email}
          />
          {renderVetFields()}
          {renderCustomerFields()}
        </MVForm>
        <View style={styles.buttonContainer}>
          <MVButton style={styles.button} >
            <MVText>Continuar</MVText>
          </MVButton>
        </View>
    </ScrollView>
  );
}