import { StyleSheet, Text, ScrollView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function ScheduleScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.welcomeMsg}>Schedule Page</Text>
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
