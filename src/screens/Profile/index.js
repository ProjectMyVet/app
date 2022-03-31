import React, { useEffect, useState } from 'react'
import { View, ScrollView, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { MVText } from '../../components'
import axios from 'axios'

import styles from './styles'

export function ProfileScreen({ navigation, route }) {
  const [user, setUser] = useState({})
  const [userId, setUserId] = useState({})

  useEffect(() => {
    axios.get('http://localhost:8010/myvet/users/' + route.params.userId)
        .then(response => setUser(response.data))
    setUserId(route.params.userId)
  }, [navigation])

    return (
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.imageContainer}>
            <Image resizeMode='cover' style={styles.image} source={{ uri: user.photoUrl }} />
          </View>
          <MVText style={styles.name}>{user.name}</MVText>
          <MVText style={styles.email}>{user.email}</MVText>
          {user.type === 'VET' && 
            <MVText style={styles.crmv}>CRMV: {user.crmv}</MVText>
          }
          <MVText style={styles.description}>{user.type === 'VET' ? user.career : user.bio}</MVText>
          {/* {user.type === 'VET' ? TODO: adicionar contagem de atendimentos
            <>
              <MVText style={styles.statsTitle}>Atendimentos:</MVText>
              <View style={styles.statsContainer}>
                <View style={styles.card}>
                  <MVText style={styles.cardName}>Finalizados</MVText>
                  <MVText style={styles.cardValue}>{user.quantityFinishedAttendance}</MVText>
                </View>
                <View style={styles.card}>
                  <MVText style={styles.cardName}>Solicitados</MVText>
                  <MVText style={styles.cardValue}>{user.quantityRequestedAttendance}</MVText>
                </View>
                <View style={styles.card}>
                  <MVText style={styles.cardName}>Confirmados</MVText>
                  <MVText style={styles.cardValue}>{user.quantityConfirmedAttendance}</MVText>
                </View>
              </View> 
              <View style={styles.cardGrade}>
                  <MVText style={styles.cardName}>Avaliação</MVText>
                  <MVText style={styles.cardValue}>
                    {user.grade}
                    <AntDesign name="star" size={24} color="black" />
                  </MVText>
              </View>
            </> :
            <View style={styles.statsContainer}>
              <View style={styles.card}>
                <MVText style={styles.cardName}>Atendimentos</MVText>
                <MVText style={styles.cardValue}>{user.quantityAttendance}</MVText>
              </View>
              <View style={styles.card}>
                <MVText style={styles.cardName}>Pets</MVText>
                <MVText style={styles.cardValue}>{user.quantityPet}</MVText>
              </View>
            </View>
          } */}
        </ScrollView>
    );
}