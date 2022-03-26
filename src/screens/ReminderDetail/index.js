import React, { useEffect, useState } from 'react'
import { View, ScrollView } from 'react-native'
import { MVText, MVButton, MVInput, MVDatePicker } from '../../components'
import { Formik } from 'formik'
import axios from 'axios'

import styles from './styles'

export function ReminderDetailScreen({ navigation, route }) {
    const [reminder, setReminder] = useState({})
    const [userId, setUserId] = useState({})

    useEffect(() => {
      setReminder(route.params.reminder)
      setUserId(route.params.userId)
    }, [route])

    return (
      <ScrollView style={styles.container}>
        <Formik
          enableReinitialize
          initialValues={{ id: reminder.id, date: reminder.date, action: reminder.action }}
          onSubmit={(values) => {
            const reminder = {
              id: values.id,
              date: values.date,
              action: values.action,
            }
            axios.put('http://localhost:8010/myvet/reminders', reminder, { params: { userId }})
                .then(response => navigation.navigate('Reminder'))
          }}
        >
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <View>
              <MVText style={styles.title}>Detalhes do Lembrete</MVText>
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
    );
}