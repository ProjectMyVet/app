import React, { useState, useEffect } from 'react'
import { View, TouchableOpacity, ScrollView } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'; 
import { MVText, MVButton } from '../../components'

import styles from './styles'

const mock = [
  {
    id: 1,
    name: 'Doguinho',
    birthDate: '19-11-2010',
    breed: 'Vira lata'
  },
  {
    id: 2,
    name: 'Belinha',
    birthDate: '19-11-2010',
    breed: 'lulu-da-pomerânia'
  },
  {
    id: 3,
    name: 'Orlindo',
    birthDate: '19-11-2010',
    breed: 'siames'
  },
  {
    id: 1,
    name: 'Doguinho',
    birthDate: '19-11-2010',
    breed: 'Vira lata'
  },
  {
    id: 2,
    name: 'Belinha',
    birthDate: '19-11-2010',
    breed: 'lulu-da-pomerânia'
  },
  {
    id: 3,
    name: 'Orlindo',
    birthDate: '19-11-2010',
    breed: 'siames'
  },
  {
    id: 1,
    name: 'Doguinho',
    birthDate: '19-11-2010',
    breed: 'Vira lata'
  },
  {
    id: 2,
    name: 'Belinha',
    birthDate: '19-11-2010',
    breed: 'lulu-da-pomerânia'
  },
  {
    id: 3,
    name: 'Orlindo',
    birthDate: '19-11-2010',
    breed: 'siames'
  },
  {
    id: 1,
    name: 'Doguinho',
    birthDate: '19-11-2010',
    breed: 'Vira lata'
  },
  {
    id: 2,
    name: 'Belinha',
    birthDate: '19-11-2010',
    breed: 'lulu-da-pomerânia'
  },
]

export function PetsScreen({ navigation }) {
    const [pets, setPets] = useState([])

    useEffect(() => {
      setPets(mock)
    },[navigation, pets])

    function handleSubmit(item) {
      navigation.navigate('PetDetail', { item })
    }

    return (
      <>
        <ScrollView contentContainerStyle={styles.container}>
          {pets.map((item) => (
              <TouchableOpacity style={styles.item} onPress={() => handleSubmit(item)}>
                <FontAwesome style={styles.icon} name="paw" size={24} color="black" />
                <MVText style={styles.title}>{item.name}</MVText>
              </TouchableOpacity>
            ))
          }
          
        </ScrollView>
        <MVButton style={styles.button}>
          <MVText>Adicionar Pet</MVText>
        </MVButton>
      </>
    );
}