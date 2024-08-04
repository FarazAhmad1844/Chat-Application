import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => {
  return (
    <View>
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Text>HomeScreen</Text>
            </TouchableOpacity>
        </View>
 
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})