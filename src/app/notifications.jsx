import { StyleSheet, Text, ScrollView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { FlatList } from "react-native"
import { colors } from "../styles/global"

import Notification from "../components/Notification"

export default function NotificationScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.welcomeMsg}>Notification Page</Text>

        <FlatList
          data={notifications}
          horizontal
          renderItem={({ item }) => (
            <Notification {...item} />
          )}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={<Text style={{ paddingLeft: 10, color: colors.lightMode.textMuted }}>No notifications yet.</Text>}
        />
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
