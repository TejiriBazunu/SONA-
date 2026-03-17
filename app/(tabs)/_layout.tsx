import { Colors } from '@/constants/colors'
import { Slot } from 'expo-router'
import React from 'react'
import { StatusBar, View } from 'react-native'

export default function RootLayout() {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.background }}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.background} />
      <Slot />
    </View>
  )
}