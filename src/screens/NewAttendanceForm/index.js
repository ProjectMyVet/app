import React, { useEffect, useState } from 'react'
import { View, ScrollView, Picker } from 'react-native'
import { MVText, MVButton } from '../../components'
import { Formik } from 'formik'
import axios from 'axios'

import styles from './styles'

export function NewAttendanceFormScreen({ navigation, route }) {
  const [pets, setPets] = useState([])
  const [defaultPet, setDefaultPet] = useState([])
  const [type, setType] = useState({})
  const [userId, setUserId] = useState({})

  useEffect(() => {
    axios.get('http://localhost:8010/myvet/pets', { params: { userId: route.params.userId }})
      .then(response => { 
        setPets(response.data) 
        setDefaultPet(response.data[0])
      })
    
    setUserId(route.params.userId)
    setType(route.params.type)
  },[navigation, route])

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <Formik
          enableReinitialize
          initialValues={{ petId: new String(defaultPet.id) }}
          onSubmit={(values) => {
            const petIdFormatted = pets.find(item => item.id === parseInt(values.petId))
            navigation.navigate('NewAttendanceDate', { type, userId, petId: parseInt(petIdFormatted.id) })
          }}
        >
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <View>
              <MVText style={styles.title}>Selecione o seu Pet</MVText>
              <View style={styles.picker}>
                <Picker
                  selectedValue={values.petId}
                  style={{ height: 20, width: 100}}
                  onValueChange={handleChange('petId')}
                  itemStyle={{ fontSize: 16 }}
                  prompt={defaultPet.name}
                > 
                  {pets.map((item) => (
                      <Picker.Item key={item.id} label={item.name} value={item.id.toString()} />
                    ))
                  }
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
    </>
  )
}