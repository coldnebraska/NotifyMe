import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../components/CustomButton'
import { StatusBar } from 'expo-status-bar'
import { Redirect, router } from 'expo-router'

import logo from '../../assets/images/logo.png'
import hero from '../../assets/images/onboarding.png'

import { colors } from '../styles/global'

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View style={styles.container}>
          <Image source={logo} resizeMode='contain' style={styles.logo} />
          <Image source={hero} resizeMode='contain' style={styles.hero} />

          <View>
            <Text style={styles.header}>Customize your Schedule with {''}
              <Text>NotifyMe</Text>
            </Text>
          </View>

          <Text style={styles.slogan}>Where customization meets productivity: Take control of your busy life with NotifyMe</Text>

          <CustomButton title="Continue with Email" handlePress={() => router.push('/signIn')} />
        </View>
      </ScrollView>

      <StatusBar style='dark' />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 4,
    height: '100%',
    width: '100%'
  },
  logo: {
    width: 180,
    height: 84
  },
  hero: {
    maxWidth: 380,
    width: '100%',
    height: 300,
    marginTop: -50
  },
  header: {
    color: colors.lightMode.text,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  slogan: {
    textAlign: 'center',
    color: colors.lightMode.textMuted,
    marginTop: 7
  }
})
