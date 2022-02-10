import React, { useState, useEffect } from 'react'
import { View, ScrollView } from 'react-native'
import { MVText, MVButton } from '../../components'

import styles from './styles'

export function AttendenceDetailScreen({ navigation, route }) {
  const [attendence, setAttendence] = useState({})
  const [pet, setPet] = useState({})

  useEffect(() => {
    setAttendence(route.params.attendence)
    setPet(route.params.attendence.pet)
  },[])

  function getPetAge(date) {
    const now = new Date()
    const splitedDate = new String(date).split('/')
    const birthDate = new Date(splitedDate[2], splitedDate[1], splitedDate[0])
    return now.getFullYear() - birthDate.getFullYear()
  }

  function handleSubmit() {

  }

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.field}>
          <MVText style={styles.label}>Nome Tutor:</MVText>
          <MVText style={styles.value}>{attendence.customerName}</MVText>
        </View>
        <View style={styles.field}>
          <MVText style={styles.label}>Nome Veterinário:</MVText>
          <MVText style={styles.value}>{attendence.vetName}</MVText>
        </View>
        <View style={styles.field}>
          <MVText style={styles.label}>Pet:</MVText>
          <MVText style={styles.value}>{pet.name}</MVText>
        </View>
        <View style={styles.field}>
          <MVText style={styles.label}>Idade Pet:</MVText>
          <MVText style={styles.value}>{getPetAge(pet.birthDate)}</MVText>
        </View>
        <View style={styles.field}>
          <MVText style={styles.label}>Turno:</MVText>
          <MVText style={styles.value}>{attendence.turn}</MVText>
        </View>
        <View style={styles.field}>
          <MVText style={styles.label}>Data:</MVText>
          <MVText style={styles.value}>{attendence.date}</MVText>
        </View>
        <View style={styles.field}>
          <MVText style={styles.label}>Horário:</MVText>
          <MVText style={styles.value}>{attendence.fromTime} - {attendence.toTime}</MVText>
        </View>
        <View style={styles.field}>
          <MVText style={styles.label}>Tipo de Atendimento:</MVText>
          <MVText style={styles.value}>{attendence.type}</MVText>
        </View>
        <View style={styles.field}>
          <MVText style={styles.label}>Status:</MVText>
          <MVText style={styles.value}>{attendence.status}</MVText>
        </View>
        {/* TODO: rhian.costa - implementar lógica de botões */}
        <View style={styles.button}>
          <MVButton onPress={handleSubmit}>
            CANCELAR
          </MVButton>
        </View>
        <View style={styles.button}>
          <MVButton onPress={handleSubmit}>
            CONFIRMAR
          </MVButton>
        </View>
      </ScrollView>
    </>
  )
}