import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  Login,
  Home,
  Sobre
} from '../screens';
import BottomTabs from './BottomTab';


const Stack = createNativeStackNavigator();

export default function LogiNavigation() {
  return (
    <Stack.Navigator 
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={ Login } />
      <Stack.Screen name="Home" component={ BottomTabs } />
    </Stack.Navigator>
  );
};

export function HomeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={ Home } />
    </Stack.Navigator>
  );
};

export function SobreNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Sobre" component={ Sobre } />
    </Stack.Navigator>
  )
}