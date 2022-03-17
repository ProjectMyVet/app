import React, { useState, useEffect } from 'react'
import { View, TouchableOpacity, ScrollView } from 'react-native'
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'; 
import { MVText, MVButton } from '../../components'
import axios from 'axios'

import styles from './styles'

export function PetsScreen({ navigation, route }) {
    const [pets, setPets] = useState([])
    const [userId, setUserId] = useState({})

    useEffect(() => {
      axios.get('http://localhost:8010/myvet/pets', { params: { userId: route.params.userId }})
        .then(response => setPets(response.data))
      setUserId(route.params.userId)
    },[navigation, route])

    function handlePetDetail(pet) {
      navigation.navigate('PetDetail', { pet, userId })
    }

    function handleAddPet() {
      navigation.navigate('NewPet', { userId })
    }

    function renderIcon(type) {
      if (type === 'DOG') {
        return <FontAwesome5 style={styles.icon} name='dog' size={24} color='black' />
      } else if (type === 'CAT') {
        return <FontAwesome5 style={styles.icon} name='cat' size={24} color='black' />
      } else {
        return <FontAwesome style={styles.icon} name='paw' size={24} color='black' />
      }
    }

    return (
      <>
        <ScrollView contentContainerStyle={styles.container}>
          {pets.map((item) => (
              <TouchableOpacity key={item.id} style={styles.item} onPress={() => handlePetDetail(item)}>
                {renderIcon(item.type)}
                <MVText style={styles.title}>{item.name}</MVText>
              </TouchableOpacity>
            ))
          }
        </ScrollView>
        <MVButton style={styles.button} onPress={handleAddPet}>Adicionar Pet</MVButton>
      </>
    );
}