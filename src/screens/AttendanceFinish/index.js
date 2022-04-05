import React, { useEffect, useState } from 'react'
import { View, ScrollView, Picker } from 'react-native'
import { MVText, MVButton, MVInput, MVDatePicker } from '../../components'
import { Formik } from 'formik'
import axios from 'axios'

import styles from './styles'

export function AttendanceFinishScreen({ navigation, route }) {
  const [userId, setUserId] = useState({})
  const [attendanceId, setAttendanceId] = useState({})

  useEffect(() => {
    setUserId(route.params.userId)
    setAttendanceId(route.params.attendanceId)
  },[navigation, route])

  return (
      <ScrollView style={styles.container}>
        <Formik
          enableReinitialize
          initialValues={{ period: '', description: '' }}
          onSubmit={(values) => {
            const body = {
              userId,
              attendanceId,
              period: values.period,
              description: values.description
            }
            axios.patch('http://localhost:8010/myvet/attendances/finish', body)
              .then(response => navigation.navigate('Attendance'))
          }}
        >
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <View>
              <MVText style={styles.title}>Cadastro de Tratamento</MVText>
              <MVInput 
                label='Período' 
                placeholder='Um remédio por dia, durante 5 dias' 
                onChangeText={handleChange('period')}
                onBlur={handleBlur('period')}
                value={values.period}
              />
              <MVInput 
                label='Descrição' 
                placeholder='1 Cx de Remédio de Vermes' 
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