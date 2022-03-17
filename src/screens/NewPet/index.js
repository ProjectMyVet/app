import React from 'react'
import { View, ScrollView, Picker } from 'react-native'
import { MVText, MVButton, MVInput, MVDatePicker } from '../../components'
import { Formik } from 'formik'
import axios from 'axios'

import styles from './styles'
import { COLORS } from '../../constants'

export function NewPetScreen({ navigation, route }) {

    return (
        <ScrollView style={styles.container}>
          <Formik
            enableReinitialize
            initialValues={{ name: '', breed: '', type: 'OTHER', birthDate: '10-11-2015' }}
            onSubmit={(values) => {
              const pet = {
                userId: route.params.userId,
                name: values.name,
                breed: values.breed,
                type: values.type,
                birthDate: values.birthDate
              }
              axios.post('http://localhost:8010/myvet/pets', pet)
                .then(response => navigation.navigate('Pets'))
            }}
          >
            {({handleChange, handleBlur, handleSubmit, values}) => (
              <View>
                <MVText style={styles.title}>Cadastro de Pet</MVText>
                <MVInput 
                  label='Nome' 
                  placeholder='Bob' 
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                />
                <MVDatePicker
                  label='Data de Nascimento'
                  mode='date'
                  date={values.birthDate}
                  onDateChange={handleChange('birthDate')}
                />
                <MVInput 
                  label='Raça' 
                  placeholder='Spitz-alemão-anão' 
                  onChangeText={handleChange('breed')}
                  onBlur={handleBlur('breed')}
                  value={values.breed}
                />
                <View style={styles.picker}>
                  <MVText style={styles.label}>Selecione o tipo do seu Pet</MVText>
                  <Picker
                    selectedValue={values.type}
                    style={{ height: 20, width: 100}}
                    onValueChange={handleChange('type')}
                    itemStyle={{ fontSize: 16 }}
                    prompt='OTHER'
                  >
                    <Picker.Item label="Cachorro" value="DOG" />
                    <Picker.Item label="Gato" value="CAT" />
                    <Picker.Item label="Outros" value="OTHER" />
                  </Picker>
                </View>
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