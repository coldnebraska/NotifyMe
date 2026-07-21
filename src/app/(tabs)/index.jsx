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
]

const ToDos = [
  { id: "1", name: "Complete project proposal" },
  { id: "2", name: "Schedule team meeting" },
  { id: "3", name: "Complete project proposal" },
  { id: "4", name: "Schedule team meeting" },
  { id: "5", name: "Complete project proposal" },
  { id: "6", name: "Schedule team meeting" },
  { id: "7", name: "Complete project proposal" },
  { id: "8", name: "Schedule team meeting" },
  { id: "9", name: "Complete project proposal" },
  { id: "10", name: "Schedule team meeting" },
  { id: "11", name: "Complete project proposal" },
  { id: "12", name: "Schedule team meeting" },
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

              <Pressable style={styles.addButton}>
                <Ionicons name="add" size={24} color="black" />
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
              listEmptyComponent={<Text>No notifications yet.</Text>}
            />

            <View style={styles.container}>
              <Text style={globalStyles.SectionTitle}>To Do</Text>

              <Pressable style={styles.addButton}>
                <Ionicons name="add" size={24} color="black" />
              </Pressable>
            </View>
          </View>

        }
        renderItem={({ item }) => (
          <Todo {...item} />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        listEmptyComponent={<Text>No todos yet.</Text>}
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
    position: "relative",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 5,
  },
  addButton: {
    position: "absolute",
    right: 0,
    top: 0,
  },
  addButtonText: {
    fontSize: 24,
    fontWeight: "bold",
  },
})
