import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles'

export function LoginScreen({ navigation }) {

  function handleSubmit() {
    navigation.navigate('UserType')
  }

  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <StatusBar style="auto" />
      <TouchableOpacity onPress={handleSubmit}>
        <Text>Próxima</Text>
      </TouchableOpacity>
    </View>
  );
}