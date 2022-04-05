import React, { useEffect, useState } from 'react'
import { View, ScrollView, Image } from 'react-native'
import { MVText, MVButton } from '../../components'
import axios from 'axios'

import styles from './styles'

export function NewAttendanceVetDetailScreen({ navigation, route }) {
  const [petId, setPetId] = useState({})
  const [type, setType] = useState({})
  const [userId, setUserId] = useState({})
  const [date, setDate] = useState({})
  const [turn, setTurn] = useState({})
  const [fromTime, setFromTime] = useState({})
  const [toTime, setToTime] = useState({})
  const [vet, setVet] = useState({})

  useEffect(() => {
    setPetId(route.params.petId)
    setUserId(route.params.userId)
    setType(route.params.type)
    setDate(route.params.date)
    setTurn(route.params.turn)
    setFromTime(route.params.fromTime)
    setToTime(route.params.toTime)
    setVet(route.params.vet)
  }, [navigation, route])

  function handleSubmit() {
    const body = {
      customerId: userId,
      vetId: vet.id,
      petId,
      type,
      turn,
      date,
      fromTime,
      toTime
    }
    axios.post('http://localhost:8010/myvet/attendances', body)
      .then(response => navigation.navigate('NewAttendance', { userId }))
  }

  return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.imageContainer}>
          <Image resizeMode='cover' style={styles.image} source={{ uri: vet.photoUrl }} />
        </View>
        <MVText style={styles.name}>{vet.name}</MVText>
        <MVText style={styles.email}>{vet.email}</MVText>
        <MVText style={styles.crmv}>CRMV: {vet.crmv}</MVText>
        <MVText style={styles.description}>{vet.career}</MVText>
        {/* {user.type === 'VET' ? TODO: adicionar contagem de atendimentos */}
        <MVButton onPress={handleSubmit}>
            Marcar Atendimento
          </MVButton>
      </ScrollView>
  )
}