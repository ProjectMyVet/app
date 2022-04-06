import React, { useState, useEffect } from 'react'
import { View, ScrollView } from 'react-native'
import { MVText, MVButton, MVInput } from '../../components'
import { Formik } from 'formik'
import axios from 'axios'

import styles from './styles'

export function NewMedicationScreen({ navigation, route }) {
  const [pet, setPet] = useState([])
  const [userId, setUserId] = useState({})

  useEffect(() => {
    setUserId(route.params.userId)
    setPet(route.params.pet)
  },[navigation, route])

  return (
    <ScrollView style={styles.container}>
      <Formik
        enableReinitialize
        initialValues={{ type: '', description: '' }}
        onSubmit={(values) => {
          const body = {
            customerId: userId,
            petId: pet.id,
            type: values.type,
            description: values.description
          }
          axios.post('http://localhost:8010/myvet/medications', body)
            .then(response => navigation.navigate('Pets', { userId }))
        }}
      >
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View>
            <MVText style={styles.title}>Cadastro de Medicamento</MVText>
            <MVInput 
              label='Tipo de Medicamento' 
              placeholder='Antibiótico' 
              onChangeText={handleChange('type')}
              onBlur={handleBlur('type')}
              value={values.type}
            />
            <MVInput 
              label='Descrição' 
              placeholder='Remédio para vômito do Bob' 
              onChangeText={handleChange('description')}
              onBlur={handleBlur('description')}
              value={values.description}
            />
            <View style={styles.button}>
              <MVButton onPress={handleSubmit}>
                Salvar
              </MVButton>
            </View>
          </View>
        )}
      </Formik>
    </ScrollView>
  )
}