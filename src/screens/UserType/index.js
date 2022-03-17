import React from 'react'
import { TouchableOpacity, View, Image } from 'react-native'
import { Fontisto, Foundation } from '@expo/vector-icons'
import { MVText } from '../../components'

import styles from './styles'

export function UserTypeScreen({ navigation, route }) {

  function handleSubmit(userType) {
    const user = route.params.user
    navigation.navigate('Register', { userType, user })
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleSubmit('VET')} style={styles.vet}>
        {/* <Image style={styles.image} source={{ uri: 'https://cdn.discordapp.com/attachments/576875163686010911/908133391621324800/unknown.png' }} /> */}
        <Fontisto name="doctor" size={120} color="white" />
        <MVText style={styles.userTitle}>Veterinário</MVText>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleSubmit('CUSTOMER')} style={styles.customer}>
        {/* <Image style={styles.image} source={{ uri: 'https://cdn.discordapp.com/attachments/576875163686010911/908133391621324800/unknown.png' }} /> */}
        <Foundation name="guide-dog" size={120} color="white" />
        <MVText style={styles.userTitle}>Tutor</MVText>
      </TouchableOpacity>
    </View>
  );
}