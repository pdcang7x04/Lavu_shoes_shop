import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import UserNavigation from './UserNavigation'

const useAppSelector = useSelector;

const AppNavigation = () => {
  const appState = useAppSelector((state) => state.lavu);
  return (
    <NavigationContainer>

      <UserNavigation/>
    </NavigationContainer>
  )
}

export default AppNavigation

