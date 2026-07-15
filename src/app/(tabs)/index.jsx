import { StyleSheet, Text, View, ScrollView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { globalStyles } from "../../styles/global"
import HomeHeader from "../../components/HomeHeader"
import HomeSection from "../../components/HomeSection"

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <HomeHeader />

        <Text style={styles.welcomeMsg}>Welcome Back, John!</Text>

        {/* add collapsible touchable to sections */}
        <HomeSection props={{ title: "To Do" }} />
        <HomeSection props={{ title: "Alarms" }} />
        <HomeSection props={{ title: "Notifications" }} />
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
