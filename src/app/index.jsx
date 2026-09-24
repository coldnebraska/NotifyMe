import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../components/CustomButton'
import { StatusBar } from 'expo-status-bar'
import { Redirect, router } from 'expo-router'

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Image source={''} />
          <Image source={''} />

          <View>
            <Text>Discover endless possibilities with{' '}
              <Text>NotifyMe</Text>
            </Text>
          </View>

          <Text>Where creativity meets innovation: embark on a journey of limitless exploration with NotifyMe</Text>

          <CustomButton title="Continue with Email" handlePress={() => router.push('/signIn')} />
        </View>
      </ScrollView>

      <StatusBar style='dark' />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})
