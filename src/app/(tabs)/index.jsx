import { StyleSheet, Text, View, FlatList, ScrollView, Pressable } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Ionicons } from "@expo/vector-icons"
import { globalStyles } from "../../styles/global"
import HomeHeader from "../../components/HomeHeader"
import Notification from "../../components/Notification"
import Todo from "../../components/Todo"

const Notifications = [
  { id: "1", time: "6:00", timeOfDay: "AM", name: "Wake Up", repeat: "Daily", volume: 100 },
  { id: "2", time: "9:00", timeOfDay: "AM", name: "Breakfast", repeat: "Daily", volume: 50 },
  { id: "3", time: "6:00", timeOfDay: "PM", name: "Leave for volleyball", repeat: "Weekly", volume: 0 },
]

const ToDos = [
  { id: "1", name: "Complete project proposal", completed: false },
  { id: "2", name: "Schedule team meeting", completed: false },
  { id: "3", name: "Dishes", completed: true },
  { id: "4", name: "Laundry", completed: true },
  { id: "5", name: "Clean apartment", completed: false },
  { id: "6", name: "Pack for moving", completed: false },
  { id: "7", name: "Call Ryan", completed: false },
  { id: "8", name: "Workout", completed: true },
  { id: "9", name: "Build legos", completed: false },
  { id: "10", name: "Work on coding mobile app", completed: true },
  { id: "11", name: "Read 2 chapters", completed: false },
  { id: "12", name: "Shower", completed: false },
]

export default function HomeScreen() {
  return (
    <SafeAreaView>

      <FlatList
        data={ToDos}
        ListHeaderComponent={
          <View>
            <HomeHeader />

            <Text style={styles.welcomeMsg}>Welcome Back, John!</Text>

            <View style={styles.container}>
              <Text style={globalStyles.SectionTitle}>Notifications</Text>

              <Pressable>
                <Text>View All</Text>
              </Pressable>
            </View>

            <FlatList
              data={Notifications}
              horizontal
              renderItem={({ item }) => (
                <Notification {...item} />
              )}
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
              ListEmptyComponent={<Text style={{ paddingLeft: 10 }}>No notifications yet.</Text>}
            />

            <View style={styles.container}>
              <Text style={globalStyles.SectionTitle}>To Do</Text>

              <Pressable>
                <Text>View All</Text>
              </Pressable>
            </View>
          </View>

        }
        renderItem={({ item }) => (
          <Todo {...item} />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<Text style={{ paddingLeft: 10 }}>No todos yet.</Text>}
        ItemSeparatorComponent={() => <View style={{ borderBottomWidth: 1, borderBottomColor: "#ccc" }} />}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  welcomeMsg: {
    textAlign: "center",
    fontSize: 18,
  },
  container: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 5,
  },
})
