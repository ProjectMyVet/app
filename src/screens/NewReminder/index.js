import React, { useState, useEffect } from 'react'
import { View, ScrollView } from 'react-native'
import { MVText, MVButton, MVInput, MVDatePicker } from '../../components'
import { Formik } from 'formik'
import axios from 'axios'

import styles from './styles'

export function NewReminderScreen({ navigation, route }) {
  const [userId, setUserId] = useState({})

  useEffect(() => {
    setUserId(route.params.userId)
  },[navigation, route])

  return (
    <ScrollView style={styles.container}>
      <Formik
        enableReinitialize
        initialValues={{ date: '01-01-2022 12:00', action: '' }}
        onSubmit={(values) => {
          const reminder = {
            userId: userId,
            date: values.date,
            action: values.action,
          }
          axios.post('http://localhost:8010/myvet/reminders', reminder)
                .then(response => navigation.navigate('Reminder'))
        }}
      >
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View>
            <MVText style={styles.title}>Cadastro de Lembrete</MVText>
            <MVInput 
              label='Descrição' 
              placeholder='Dar remédio de vermes...' 
              onChangeText={handleChange('action')}
              onBlur={handleBlur('action')}
              value={values.action}
            />
            <MVDatePicker
              label='Data do Lembrete'
              mode='datetime'
              date={values.date}
              onDateChange={handleChange('date')}
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