import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import styles from './styles'

export function UserTypeScreen({ navigation }) {

  function handleSubmit(userType) {
    console.log(userType)
    navigation.navigate('Register')
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleSubmit('vet')} style={styles.vet}>
      
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleSubmit('customer')} style={styles.customer}>

      </TouchableOpacity>
    </View>
  );
}