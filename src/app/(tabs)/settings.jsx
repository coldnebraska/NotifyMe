import Slider from "@react-native-community/slider"
import { useState } from "react"
import {
    Pressable,
    ScrollView,
    StyleSheet,
    Switch,
    Text,
    View,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function SettingsScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)
  const [darkModeEnabled, setDarkModeEnabled] = useState(false)
  const [defaultVolume, setDefaultVolume] = useState(0.75)

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.pageTitle}>Settings</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferences</Text>
          <View style={styles.optionRow}>
            <Text style={styles.optionLabel}>Notifications</Text>
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
            />
          </View>
          <View style={styles.optionRow}>
            <Text style={styles.optionLabel}>Dark mode</Text>
            <Switch
              value={darkModeEnabled}
              onValueChange={setDarkModeEnabled}
            />
          </View>
          <View style={styles.sliderSection}>
            <View style={styles.sliderHeader}>
              <Text style={styles.optionLabel}>Default volume</Text>
              <Text style={styles.sliderValue}>
                {Math.round(defaultVolume * 100)}%
              </Text>
            </View>
            <Slider
              style={styles.slider}
              value={defaultVolume}
              minimumValue={0}
              maximumValue={1}
              step={0.01}
              minimumTrackTintColor="#3b82f6"
              maximumTrackTintColor="#d1d5db"
              thumbTintColor="#2563eb"
              onValueChange={setDefaultVolume}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>
          <Pressable
            style={styles.navItem}
            android_ripple={{ color: "#ececec" }}
          >
            <Text style={styles.navText}>Profile</Text>
          </Pressable>
          <Pressable
            style={styles.navItem}
            android_ripple={{ color: "#ececec" }}
          >
            <Text style={styles.navText}>Security</Text>
          </Pressable>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Support</Text>
          <Pressable
            style={styles.navItem}
            android_ripple={{ color: "#ececec" }}
          >
            <Text style={styles.navText}>About</Text>
          </Pressable>
          <Pressable
            style={styles.navItem}
            android_ripple={{ color: "#ececec" }}
          >
            <Text style={styles.navText}>Help & Feedback</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  container: {
    padding: 20,
    paddingBottom: 40,
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 20,
  },
  section: {
    marginBottom: 24,
    borderRadius: 14,
    backgroundColor: "#f8f8f8",
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
  },
  optionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#e3e3e3",
  },
  sliderSection: {
    paddingVertical: 14,
  },
  sliderHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  slider: {
    width: "100%",
    height: 40,
  },
  sliderValue: {
    fontSize: 16,
    color: "#6b7280",
  },
  optionLabel: {
    fontSize: 16,
    color: "#222222",
  },
  navItem: {
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  navText: {
    fontSize: 16,
    color: "#222222",
  },
});
