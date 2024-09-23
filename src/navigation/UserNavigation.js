import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { mainstack } from './mainstack';
import Welcome from '../page/welcome/Welcome';
import Login from '../page/Login/Login';
import Onboard from '../page/onboar/screen/Onboard';


const Stack = createNativeStackNavigator();

const UserNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={mainstack.welcome}
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name={mainstack.welcome} component={Welcome}/>
      <Stack.Screen name={mainstack.onboard1} component={Onboard}/>

    </Stack.Navigator>
  )
}

export default UserNavigation

