import React, { useEffect, useState } from 'react'
import { View, ScrollView, Picker } from 'react-native'
import { MVText, MVButton, MVDatePicker } from '../../components'
import { Formik } from 'formik'

import styles from './styles'

export function NewAttendanceDateScreen({ navigation, route }) {
  const [petId, setPetId] = useState({})
  const [type, setType] = useState({})
  const [userId, setUserId] = useState({})

  useEffect(() => {
    setPetId(route.params.petId)
    setUserId(route.params.userId)
    setType(route.params.type)
  },[navigation, route])

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Formik
        enableReinitialize
        initialValues={{ date: '03-03-2022', turn: 'AFTERNOON' }}
        onSubmit={(values) => {
          navigation.navigate('NewAttendanceTime', { type, userId, petId, date: values.date, turn: values.turn })
        }}
      >
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View>
            <MVText style={styles.title}>Selecione a Data e Turno</MVText>
            <MVDatePicker
              label='Data de Atendimento'
              mode='date'
              date={values.date}
              onDateChange={handleChange('date')}
            />
            <View style={styles.picker}>
              <Picker
                selectedValue={values.turn}
                style={{ height: 20, width: 100}}
                onValueChange={handleChange('turn')}
                itemStyle={{ fontSize: 16 }}
                prompt='AFTERNOON'
              > 
                <Picker.Item label='Manhã' value='MORNING' />
                <Picker.Item label='Tarde' value='AFTERNOON' />
                <Picker.Item label='Noite' value='NIGHT' />
              </Picker>
            </View>
            <View style={styles.button}>
              <MVButton onPress={handleSubmit}>
                Próximo
              </MVButton>
            </View>
          </View>
        )}
      </Formik>
    </ScrollView>
  )
}