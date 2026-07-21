import { AntDesign, Ionicons } from "@expo/vector-icons"
import { useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { colors, globalStyles } from "../styles/global"
import NotificationList from "./NotificationList"
import TodoList from "./TodoList"

export default function HomeSection({ props }) {
  return (
    <View style={styles.container}>
        {props.title === "To Do" ? <TodoList /> : <NotificationList />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  sectionTitle: {
    color: colors.title,
    fontSize: 24,
    fontWeight: "bold",
  },
})
