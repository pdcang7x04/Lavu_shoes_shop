import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { colors } from '../../styles/colors'
import { mainstack } from '../../navigation/mainstack'
import { t } from '../../styles/font'

const Welcome = (props) => {
  const {navigation} = props

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(mainstack.onboard1)
    }, 3000);
  }, [])
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Lavu Shoes</Text>
    </View>

  )
}

export default Welcome

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blue1,
  },
  text: {
    fontFamily: t.Acme_Regular,
    fontWeight: '400',
    fontSize: 28,
    lineHeight: 36,
  }
});
