import React from 'react'
import { View, ScrollView } from 'react-native'
import { MVText, MVButton, MVInput, MVDatePicker } from '../../components'
import { Formik } from 'formik'

import styles from './styles'

export function NewReminderScreen({ navigation }) {

    return (
      <ScrollView style={styles.container}>
        <Formik
          enableReinitialize
          initialValues={{ date: '01-01-2022 12:00', action: '' }}
          onSubmit={(values) => {
            const reminder = {
              date: values.date,
              action: values.action,
            }
            console.log(reminder)
            // TODO: rhian.costa - 30/12/2021 - call to api to save a new pet
            navigation.navigate('Reminder', { reminder })
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
    );
}