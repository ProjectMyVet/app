import React, { useEffect, useState } from 'react'
import { Image, View, ScrollView } from 'react-native'
import { MVText, MVInput, MVButton } from '../../components'
import { COLORS } from '../../constants'
import { Formik } from 'formik'

import styles from './styles'
import axios from 'axios'

export function RegisterScreen({ navigation, route }) {
  const [user, setUser] = useState({})
  const [userType, setUserType] = useState('')

  useEffect(() => {
    setUser(route.params.user)
    setUserType(route.params.userType)
  }, [route])

  function renderVetFields(handleChange, handleBlur, values) {
    if (userType === 'vet') {
      return <>
          <MVInput 
            label='CRMV' 
            placeholder='CRMV' 
            onChangeText={handleChange('crmv')}
            onBlur={handleBlur('crmv')}
            value={values.crmv}
          />
          <MVInput 
            label='Carreira' 
            placeholder='Carreira' 
            onChangeText={handleChange('career')}
            onBlur={handleBlur('career')}
            value={values.career}
          />
        </>
    }
  }

  function renderCustomerFields(handleChange, handleBlur, values) {
    if (userType === 'customer') {
      return <>
          <MVInput 
            label='Biografia' 
            placeholder='Biografia' 
            onChangeText={handleChange('bio')}
            onBlur={handleBlur('bio')}
            value={values.bio}
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
      <Formik
        enableReinitialize
        initialValues={{ name: user.name, email: user.email, crmv: '', career: '', bio: '' }}
        onSubmit={(values) => {
          // const user = {
          //   name: values.name,
          //   email: values.email,
          //   crmv: values.crmv,
          //   career: values.career,
          //   bio: values.bio
          // }
          if (userType === 'customer') {
            const customer = {
              idToken: user.id,
              name: values.name,
              email: values.email,
              photoUrl: user.photoUrl,
              bio: values.bio
            }
            console.log(user)
            console.log(customer)
            axios.post('http://localhost:8010/myvet/users/customer', customer)
              .then(response => navigation.navigate('MenuTabNavigation', { userType, user }))
              .catch(function (error) {
                if (error.response) {
                  // Request made and server responded
                  console.log(error.response.data);
                  console.log(error.response.status);
                  console.log(error.response.headers);
                } else if (error.request) {
                  // The request was made but no response was received
                  console.log(error.request);
                } else {
                  // Something happened in setting up the request that triggered an Error
                  console.log('Error', error.message);
                }
            
              })
          }
        }}
      >
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View>
            <MVInput 
              label='Nome' 
              placeholder='Nome' 
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
            />
            <MVInput 
              label='E-Mail' 
              placeholder='E-Mail' 
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            {renderVetFields(handleChange, handleBlur, values)}
            {renderCustomerFields(handleChange, handleBlur, values)}
            <View style={styles.buttonContainer}>
              <MVButton style={styles.button} onPress={handleSubmit}>
                Continuar
              </MVButton>
            </View>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
}