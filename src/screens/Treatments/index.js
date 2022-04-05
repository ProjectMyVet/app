import React, { useState, useEffect } from 'react'
import { View, TouchableOpacity, ScrollView } from 'react-native'
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'; 
import { MVText, MVButton } from '../../components'
import axios from 'axios'

import styles from './styles'

export function TreatmentsScreen({ navigation, route }) {
    const [pet, setPet] = useState({})
    const [userId, setUserId] = useState({})
    const [treatments, setTreatments] = useState([])

    useEffect(() => {
      axios.get('http://localhost:8010/myvet/treatments', { params: { userId: route.params.userId, petId: route.params.pet.id }})
        .then(response => setTreatments(response.data))
      setUserId(route.params.userId)
      setPet(route.params.pet)
    },[navigation, route])

    return (
      <>
        <ScrollView contentContainerStyle={styles.container}>
          {treatments.map((item) => (
              <TouchableOpacity key={item.id} style={styles.item}>
                <MVText style={styles.title}>{"Tratamento - #" + item.id}</MVText>
                <MVText style={styles.subtitle}>{item.period.length >= 50 ? item.period.substring(0, 50) + "..." : item.period} </MVText>
                <MVText style={styles.subtitle}>{item.description.length >= 50 ? item.description.substring(0, 50) + "..." : item.description} </MVText>
              </TouchableOpacity>
            ))
          }
        </ScrollView>
      </>
    );
}