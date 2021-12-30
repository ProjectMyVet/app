import React from 'react'
import { View, ScrollView } from 'react-native'
import { MVText, MVButton, MVInput } from '../../components'
import DatePicker from 'react-native-datepicker'
import { Formik } from 'formik'

import styles from './styles'

export function NewPetScreen({ navigation }) {

    return (
        <ScrollView style={styles.container}>
          <Formik
            enableReinitialize
            initialValues={{ name: '', email: '', crmv: '', career: '', date: '' }}
            onSubmit={(values) => {
              const user = {
                name: values.name,
                email: values.email,
                crmv: values.crmv,
                career: values.career,
                bio: values.bio
              }
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
                />
                {/* <DatePicker
                  style={{width: 200}}
                  date={values.date}
                  format="DD-MM-YYYY"
                  locale='pt-BR'
                  onDateChange={handleChange('date')}
                  
                />    */}
                <MVText style={{fontSize: 25}} >{values.date}</MVText>
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