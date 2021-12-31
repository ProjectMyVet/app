import React from 'react'
import { View, ScrollView } from 'react-native'
import { MVText, MVButton, MVInput, MVDatePicker } from '../../components'
import { Formik } from 'formik'

import styles from './styles'
import { COLORS } from '../../constants'

export function NewPetScreen({ navigation }) {

    return (
        <ScrollView style={styles.container}>
          <Formik
            enableReinitialize
            initialValues={{ name: '', email: '', crmv: '', career: '', date: '10-11-2015' }}
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
                />
                {/* <View>
                  <MVText style={styles.datePickerLabel}>Data de Nascimento</MVText>
                  <DatePicker
                    style={styles.datePickerStyle}
                    date={values.date}
                    mode="date"
                    placeholder="select date"
                    format="DD-MM-YYYY"
                    confirmBtnText="Confirmar"
                    cancelBtnText="Cancelar"
                    useNativeDriver={true}
                    useN
                    customStyles={{
                      dateIcon: {
                        display: 'none',
                      },
                      dateInput: {
                        alignItems: 'center',
                        borderColor: COLORS.WHITE,
                        borderBottomColor: COLORS.BLACK,
                        marginTop: 10,
                        color: COLORS.DIM_GRAY,
                      },
                    }}
                    onDateChange={handleChange('date')}
                  />
                </View> */}
                <MVDatePicker
                  label='Data de Nascimento'
                  date={values.date}
                  onDateChange={handleChange('date')}
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