import React, { useState, useEffect } from 'react'
import { View, TouchableOpacity, ScrollView } from 'react-native'
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'; 
import { MVText, MVButton } from '../../components'
import axios from 'axios'

import styles from './styles'

export function MedicationsScreen({ navigation, route }) {
  const [pet, setPet] = useState([])
  const [userId, setUserId] = useState({})
  const [medications, setMedications] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8010/myvet/medications', { params: { customerId: route.params.userId, petId: route.params.pet.id }})
      .then(response => setMedications(response.data))
    setUserId(route.params.userId)
    setPet(route.params.pet)
  },[navigation, route])

  function handleAddMedication() {
    navigation.navigate('NewMedication', { userId, pet })
  }

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        {medications.map((item) => (
            <TouchableOpacity key={item.id} style={styles.item}>
              <MVText style={styles.title}>{"Medicamento - #" + item.id}</MVText>
              <MVText style={styles.subtitle}>{item.type.length >= 50 ? "Tipo: " + item.type.substring(0, 50) + "..." : "Tipo: " + item.type}</MVText>
              <MVText style={styles.subtitle}>{item.description.length >= 50 ? item.description.substring(0, 50) + "..." : item.description}</MVText>
            </TouchableOpacity>
          ))
        }
      </ScrollView>
      <MVButton style={styles.button} onPress={handleAddMedication}>Adicionar Medicamento</MVButton>
    </>
  )
}