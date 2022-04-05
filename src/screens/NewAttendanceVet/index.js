import React, { useState, useEffect } from 'react'
import { View, TouchableOpacity, ScrollView, Image } from 'react-native'
import { MVText } from '../../components'
import axios from 'axios'

import styles from './styles'

export function NewAttendanceVetScreen({ navigation, route }) {
  const [petId, setPetId] = useState({})
  const [type, setType] = useState({})
  const [userId, setUserId] = useState({})
  const [date, setDate] = useState({})
  const [turn, setTurn] = useState({})
  const [fromTime, setFromTime] = useState({})
  const [toTime, setToTime] = useState({})
  const [vets, setVets] = useState([])
  const [hasValue, setHasValue] = useState(false)

  useEffect(() => {
    setPetId(route.params.petId)
    setUserId(route.params.userId)
    setType(route.params.type)
    setDate(route.params.date)
    setTurn(route.params.turn)
    setFromTime(route.params.fromTime)
    setToTime(route.params.toTime)
    axios.get('http://localhost:8010/myvet/schedulers/vets', { params: { userId: route.params.userId, fromTime: route.params.fromTime, toTime: route.params.toTime, turn: route.params.turn, date: route.params.date }})
      .then(response => { 
        setVets(response.data)
        setHasValue(response.data.length === 0)
      })
  }, [navigation, route])

  function handleVetDetail(vet) {
    navigation.navigate('NewAttendanceVetDetail', { type, userId, petId, date, turn, fromTime, toTime, vet })
  }

  function handleRedirect() {
    if (hasValue) {
      setTimeout(() => navigation.navigate('NewAttendance', { userId }), 2000)
    }
  }

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        {hasValue &&
          <View style={styles.default}>
            <MVText style={styles.subtitle}>Nenhum Veterinário Disponível</MVText>
            {handleRedirect()}
          </View>
        }
        {vets?.map((item) => (
            <TouchableOpacity key={item.id} style={styles.item} onPress={() => handleVetDetail(item)}>
              <View style={styles.imageContainer}>
                <Image resizeMode='cover' style={styles.image} source={{ uri: item.photoUrl }} />
              </View>
              <MVText style={styles.title}>{"Dr. " + item.name}</MVText>
              {/* //TODO implementar nota */}
            </TouchableOpacity>
          ))
        }
      </ScrollView>
    </>
  )
}