import React, { useState, useEffect } from 'react'
import { View, TouchableOpacity, ScrollView } from 'react-native'
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'; 
import { MVText, MVButton } from '../../components'

import styles from './styles'

const mock = [
  {
    id: 1,
    name: 'Doguinho',
    birthDate: '19-11-2010',
    breed: 'Vira lata',
    type: 'DOG'
  },
  {
    id: 2,
    name: 'Belinha',
    birthDate: '19-11-2010',
    breed: 'lulu-da-pomerânia',
    type: 'OTHER'
  },
  {
    id: 3,
    name: 'Orlindo',
    birthDate: '19-11-2010',
    breed: 'siames',
    type: 'CAT'
  },
  {
    id: 4,
    name: 'Doguinho',
    birthDate: '19-11-2010',
    breed: 'Vira lata',
    type: 'DOG'
  },
  {
    id: 5,
    name: 'Belinha',
    birthDate: '19-11-2010',
    breed: 'lulu-da-pomerânia',
    type: 'OTHER'
  },
  {
    id: 6,
    name: 'Orlindo',
    birthDate: '19-11-2010',
    breed: 'siames',
    type: 'CAT'
  },
  {
    id: 7,
    name: 'Doguinho',
    birthDate: '19-11-2010',
    breed: 'Vira lata',
    type: 'DOG'
  },
  {
    id: 8,
    name: 'Belinha',
    birthDate: '19-11-2010',
    breed: 'lulu-da-pomerânia',
    type: 'OTHER'
  },
  {
    id: 9,
    name: 'Orlindo',
    birthDate: '19-11-2010',
    breed: 'siames',
    type: 'CAT'
  },
  {
    id: 10,
    name: 'Doguinho',
    birthDate: '19-11-2010',
    breed: 'Vira lata',
    type: 'DOG'
  },
  {
    id: 11,
    name: 'Belinha',
    birthDate: '19-11-2010',
    breed: 'lulu-da-pomerânia',
    type: 'OTHER'
  },
]

export function PetsScreen({ navigation }) {
    const [pets, setPets] = useState([])

    useEffect(() => {
      setPets(mock)
    },[navigation, pets])

    function handlePetDetail(item) {
      navigation.navigate('PetDetail', { item })
    }

    function handleAddPet() {
      navigation.navigate('NewPet')
    }

    function renderIcon(type) {
      if (type === 'DOG') {
        return <FontAwesome5 style={styles.icon} name="dog" size={24} color="black" />
      } else if (type === 'CAT') {
        return <FontAwesome5 style={styles.icon} name="cat" size={24} color="black" />
      } else {
        return <FontAwesome style={styles.icon} name="paw" size={24} color="black" />
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