import React, { useEffect, useState } from 'react'
import { View, ScrollView } from 'react-native'
import { MVText, MVButton, MVInput, MVDatePicker } from '../../components'
import { Formik } from 'formik'

import styles from './styles'

export function ReminderDetailScreen({ navigation, route }) {
    const [reminder, setReminder] = useState({})

    useEffect(() => {
      setReminder(route.params.reminder)
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
            // TODO: rhian.costa - 30/12/2021 - call to api to edit a new reminder
            navigation.navigate('Reminder')
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