import { AntDesign, Ionicons } from "@expo/vector-icons"
import { useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { colors, globalStyles } from "../styles/global"
import AlarmList from "./AlarmList"
import NotificationList from "./NotificationList"
import TodoList from "./TodoList"

export default function HomeSection({ props }) {
  const [todoDisplay, setTodoDisplay] = useState(true)
  const [alarmDisplay, setAlarmDisplay] = useState(true)
  const [notificationDisplay, setNotificationDisplay] = useState(true)

  const isExpanded =
    props.title === "To Do"
      ? todoDisplay
      : props.title === "Alarms"
        ? alarmDisplay
        : notificationDisplay

  return (
    <View style={styles.container}>
      <Text style={globalStyles.SectionTitle}>
        <TouchableOpacity
          onPress={() => {
            if (props.title === "To Do") {
              setTodoDisplay((todoDisplay) => !todoDisplay)
            } else if (props.title === "Alarms") {
              setAlarmDisplay((alarmDisplay) => !alarmDisplay)
            } else if (props.title === "Notifications") {
              setNotificationDisplay(
                (notificationDisplay) => !notificationDisplay,
              )
            }
          }}
        >
          {isExpanded ? (<AntDesign name="up" size={24} color="black" />) : (<AntDesign name="down" size={24} color="black" />)}
        </TouchableOpacity>
        {props.title}
      </Text>

      <TouchableOpacity style={styles.addButton}>
        <Ionicons name="add" size={24} color="black" />
      </TouchableOpacity>

      <View>
        {props.title === "To Do" && todoDisplay === true ? <TodoList /> : null}
        {props.title === "Alarms" && alarmDisplay === true ? (
          <AlarmList />
        ) : null}
        {props.title === "Notifications" && notificationDisplay === true ? (
          <NotificationList />
        ) : null}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    position: "relative",
  },
  sectionTitle: {
    color: colors.title,
    fontSize: 24,
    fontWeight: "bold",
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
