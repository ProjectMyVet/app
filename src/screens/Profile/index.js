import React, { useEffect, useState } from 'react'
import { View, ScrollView, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { MVText } from '../../components'

import styles from './styles'

const mockCustomer = {
  id: 1,
  idToken: 1,
  name: 'Rhian Lopes da Costa',
  email: 'rhianlopes63@gmail.com',
  type: 'CUSTOMER',
  bio: 'Sou pai da Gata que foi sequestrada em troca de comida aqui no pátio',
  photoUrl: 'https://lh3.googleusercontent.com/a-/AOh14GjrntmDk8h1RclJOYjwH1tc7AJIVZy-_tR5Swnueg=s96-c',
  quantityAttendance: 12,
  quantityPet: 3
}

const mockVet = {
  id: 1,
  idToken: 1,
  name: 'Rhian Lopes da Costa',
  email: 'rhianlopes63@gmail.com',
  type: 'VET',
  crmv: '8683',
  career: 'Sou formado em veterinária pela ULBRA em 2005, desde então tomo conta da minha clínica de Canoas.',
  photoUrl: 'https://lh3.googleusercontent.com/a-/AOh14GjrntmDk8h1RclJOYjwH1tc7AJIVZy-_tR5Swnueg=s96-c',
  quantityFinishedAttendance: 12,
  quantityRequestedAttendance: 2,
  quantityConfirmedAttendance: 4,
  grade: 4.7,
}

export function ProfileScreen({ navigation }) {
  const [user, setUser] = useState({})

  useEffect(() => {
    setUser(mockVet)
    //TODO - 03/01/2021 - call to api to search user profile
  }, [navigation])

    return (
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.imageContainer}>
            <Image resizeMode='cover' style={styles.image} source={{ uri: user.photoUrl }} />
          </View>
          <MVText style={styles.name}>{user.name}</MVText>
          <MVText style={styles.email}>{user.email}</MVText>
          {user.type === 'VET' && 
            <MVText>CRMV: {user.crmv}</MVText>
          }
          <MVText style={styles.description}>{user.type === 'VET' ? user.career : user.bio}</MVText>
          {user.type === 'VET' ? 
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
          }
        </ScrollView>
    );
}