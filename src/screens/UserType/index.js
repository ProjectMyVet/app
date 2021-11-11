import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';

import styles from './styles'

export function UserTypeScreen({ navigation }) {

  function handleSubmit(userType) {
    console.log(userType)
    navigation.navigate('Register')
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleSubmit('vet')} style={styles.vet}>
        <Image style={styles.image} source={{ uri: 'https://cdn.discordapp.com/attachments/576875163686010911/908133391621324800/unknown.png' }} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleSubmit('customer')} style={styles.customer}>
        <Image style={styles.image} source={{ uri: 'https://cdn.discordapp.com/attachments/576875163686010911/908133391621324800/unknown.png' }} />
      </TouchableOpacity>
    </View>
  );
}