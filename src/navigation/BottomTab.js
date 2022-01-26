import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  HomeNavigation,
  SobreNavigation
} from './StackNavigation';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return(
     <Tab.Navigator screenOptions={{ headerShown: false }} >
       <Tab.Screen name="HomeTab" component={ HomeNavigation } />
       <Tab.Screen name="SobreTab" component={ SobreNavigation }/>
     </Tab.Navigator>
  );
};