import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Home({ navigation }) {
  return <View>
    <Text>Home</Text>
    <Button title="Ir para Sobre" onPress={ () => navigation.navigate('SobreTab') } />
    </View>
};