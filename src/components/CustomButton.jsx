import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

import { colors } from '../styles/global'

const CustomButton = ({ title, handlePress, isLoading }) => {
  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.7} disabled={isLoading} style={styles.button}>
      <LinearGradient colors={['hsl(204, 99%, 49%)', 'hsl(216, 100%, 47%)']} style={styles.button}>
        <Text style={styles.text}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    minHeight: 62,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 7
  },
  text: {
    color: colors.lightMode.text,
    fontWeight: 'bold',
    fontSize: 18,
  }
})

export default CustomButton
