import { StyleSheet, Text, ScrollView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function NotificationScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.welcomeMsg}>Notification Page</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  welcomeMsg: {
    textAlign: "center",
    fontSize: 18,
  },
})
