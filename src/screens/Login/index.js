import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function Login({ navigation }) {
  return <View>
      <Text>Login</Text>
      <TouchableOpacity
        style={{ margin: 20, backgroundColor: '#000', height: 20  }}
        onPress={ () => navigation.navigate('Home')}
      >
        <Text style={{ color: '#FFF' }}>Ir para Home</Text>
      </TouchableOpacity>
    </View>
};