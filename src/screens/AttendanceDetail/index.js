import React, { useState, useEffect } from 'react'
import { View, ScrollView } from 'react-native'
import { MVText, MVButton } from '../../components'
import { getTurnLabel, getAttendanceStatusLabel, getAttendanceTypeLabel } from '../../utils'
import axios from 'axios'

import styles from './styles'

export function AttendanceDetailScreen({ navigation, route }) {
  const [attendance, setAttendance] = useState({})
  const [userType, setUserType] = useState({})
  const [pet, setPet] = useState({})
  const [userId, setUserId] = useState({})
  
  useEffect(() => {
    setAttendance(route.params.attendance)
    setPet(route.params.attendance.pet)
    setUserType(route.params.userType)
    setUserId(route.params.userId)
  },[navigation, route])

  function getPetAge(date) {
    const now = new Date()
    const splitedDate = new String(date).split('-')
    const birthDate = new Date(splitedDate[2], splitedDate[1], splitedDate[0])
    return now.getFullYear() - birthDate.getFullYear()
  }

  function handleSubmitCancel() {
    const body = {
      userId,
      attendanceId: attendance.id
    }
    axios.patch('http://localhost:8010/myvet/attendances/cancel', body)
      .then(response => navigation.navigate('Attendance', { userId, userType }))
  }

  function handleSubmitConfirm() {
    const body = {
      userId,
      attendanceId: attendance.id
    }
    axios.patch('http://localhost:8010/myvet/attendances/confirm', body)
      .then(response => navigation.navigate('Attendance', { userId, userType }))
  }

  function handleSubmitFinish() {
    navigation.navigate('AttendanceFinish', { userId, attendanceId: attendance.id })
  }

  function handleSubmitEvaluate() {
    
  }

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.field}>
          <MVText style={styles.label}>Nome Tutor:</MVText>
          <MVText style={styles.value}>{attendance.customerName}</MVText>
        </View>
        <View style={styles.field}>
          <MVText style={styles.label}>Nome Veterinário:</MVText>
          <MVText style={styles.value}>{attendance.vetName}</MVText>
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
          <MVText style={styles.value}>{getTurnLabel(attendance.turn)}</MVText>
        </View>
        <View style={styles.field}>
          <MVText style={styles.label}>Data:</MVText>
          <MVText style={styles.value}>{attendance.date}</MVText>
        </View>
        <View style={styles.field}>
          <MVText style={styles.label}>Horário:</MVText>
          <MVText style={styles.value}>{attendance.fromTime} - {attendance.toTime}</MVText>
        </View>
        <View style={styles.field}>
          <MVText style={styles.label}>Tipo de Atendimento:</MVText>
          <MVText style={styles.value}>{getAttendanceTypeLabel(attendance.type)}</MVText>
        </View>
        <View style={styles.field}>
          <MVText style={styles.label}>Status:</MVText>
          <MVText style={styles.value}>{getAttendanceStatusLabel(attendance.status)}</MVText>
        </View>
        {attendance.status === 'REQUESTED' && userType === 'CUSTOMER' &&
          <View style={styles.button}>
            <MVButton onPress={handleSubmitCancel}>
              CANCELAR
            </MVButton>
          </View>
        }
        {attendance.status === 'REQUESTED' && userType === 'VET' &&
          <View style={styles.button}>
            <MVButton onPress={handleSubmitConfirm}>
              CONFIRMAR
            </MVButton>
          </View>
        }
        {attendance.status === 'CONFIRMED' && userType === 'VET' &&
          <View style={styles.button}>
            <MVButton onPress={handleSubmitFinish}>
              FINALIZAR
            </MVButton>
          </View>
        }
        {attendance.status === 'FINISHED' && userType === 'CUSTOMER' &&
          <View style={styles.button}>
            <MVButton onPress={handleSubmitEvaluate}>
              AVALIAR
            </MVButton>
          </View>
        }
      </ScrollView>
    </>
  )
}