import React from 'react'
import { View, ScrollView } from 'react-native'
import { MVText, MVButton, MVInput } from '../../components'
import moment from 'moment'
// import DatePicker from 'react-native-datepicker'
import DateField from 'react-native-datefield'
import { Formik } from 'formik'

import styles from './styles'

export function NewPetScreen({ navigation }) {

    return (
        <ScrollView style={styles.container}>
          <Formik
            enableReinitialize
            initialValues={{ name: '', email: '', crmv: '', career: '', date: '10/11/2015' }}
            onSubmit={(values) => {
              const user = {
                name: values.name,
                email: values.email,
                crmv: values.crmv,
                career: values.career,
                bio: values.bio
              }
              console.log(values.date)
              // navigation.navigate('MenuTabNavigation', { userType, user })
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
                  // onSubmit={(value) => handleChange(value.format("DD/MM/YYYY"), 'date')}
                />
                <DateField
                  editable={false}
                  labelDate='Dia'
                  labelMonth='Mês'
                  labelYear='Ano'
                  styleInput={styles.inputBorder}
                />
                <DateField
                  labelDate="Input date"
                  labelMonth="Input month"
                  labelYear="Input year"
                  defaultValue={new Date(2015, 11, 10)}
                  styleInput={styles.inputBorder}
                  onSubmit={(value) => handleChange('date', value.toDateString())}
                />
                <View style={styles.buttonContainer}>
                  <MVButton style={styles.button} onPress={handleSubmit}>
                    Salvar
                  </MVButton>
                </View>
              </View>
            )}
          </Formik>
        </ScrollView>
    );
}