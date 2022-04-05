import React, { useEffect, useState } from 'react'
import { View, ScrollView, Picker } from 'react-native'
import { MVText, MVButton } from '../../components'
import { Formik } from 'formik'
import axios from 'axios'

import styles from './styles'

export function NewAttendanceFormScreen({ navigation, route }) {
  const [pets, setPets] = useState([])
  const [defaultPetId, setDefaultPetId] = useState([])
  const [type, setType] = useState({})
  const [userId, setUserId] = useState({})

  useEffect(() => {
    axios.get('http://localhost:8010/myvet/pets', { params: { userId: route.params.userId }})
      .then(response => { 
        setPets(response.data) 
        setDefaultPetId(response.data[0].id)
      })
    
    setUserId(route.params.userId)
    setType(route.params.type)
  },[navigation, route])

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Formik
        enableReinitialize
        initialValues={{ petId: defaultPetId }}
        onSubmit={(values) => {
          navigation.navigate('NewAttendanceDate', { type, userId, petId: values.petId })
        }}
      >
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View>
            <MVText style={styles.title}>Selecione o seu Pet</MVText>
            <View style={styles.picker}>
              <Picker
                selectedValue={values.type}
                style={{ height: 20, width: 100}}
                onValueChange={handleChange('petId')}
                itemStyle={{ fontSize: 16 }}
                prompt={defaultPetId}
              > 
                {pets.map((item) => (
                    <Picker.Item key={item.id} label={item.name} value={item.id} />
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
  )
}