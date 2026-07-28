import { StyleSheet, Text, ScrollView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function ToDoScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.welcomeMsg}>ToDo Page</Text>
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
