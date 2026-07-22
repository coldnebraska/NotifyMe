import { Ionicons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import { useState } from "react";
import {
    Modal,
    Pressable,
    StyleSheet,
    Switch,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function Notification({
  time,
  timeOfDay,
  name,
  repeat,
  volume: initialVolume,
}) {
  const [isEnabled, setIsEnabled] = useState(true);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [showDisableOptions, setShowDisableOptions] = useState(false);
  const [currentVolume, setCurrentVolume] = useState(initialVolume ?? 0);

  const volumeIcon =
    currentVolume >= 85
      ? "volume-high-outline"
      : currentVolume >= 50
        ? "volume-medium-outline"
        : currentVolume >= 15
          ? "volume-low-outline"
          : "volume-mute-outline";
  const volumeLabel = Math.round(currentVolume);

  const handleToggle = (value) => {
    if (!value) {
      setShowDisableOptions(true);
      return;
    }

    setIsEnabled(true);
    setShowDisableOptions(false);
  };

  const handleDisableChoice = (choice) => {
    setShowDisableOptions(false);

    if (choice === "mute") {
      setIsEnabled(false);
      return;
    }

    setIsEnabled(false);
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.timeContainer}>
          <Text style={styles.time}>{time}</Text>
          <Text style={styles.timeOfDay}>{timeOfDay}</Text>
        </View>

        <View style={styles.timeDataContainer}>
          <Text style={styles.notificationText}>
            {name}, {repeat}
          </Text>
        </View>
      </View>

      <View style={styles.actionContainer}>
        <View style={styles.switchWrapper}>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#fff" : "#f4f3f4"}
            onValueChange={handleToggle}
            value={isEnabled}
            style={styles.switch}
          />
          <Modal
            visible={showDisableOptions}
            transparent
            animationType="fade"
            onRequestClose={() => setShowDisableOptions(false)}
          >
            <Pressable
              style={styles.optionBackdrop}
              onPress={() => setShowDisableOptions(false)}
            />

            <View style={styles.optionModalWrapper}>
              <View style={styles.optionModalCard}>
                <TouchableOpacity
                  style={styles.optionButton}
                  onPress={() => handleDisableChoice("mute")}
                  activeOpacity={0.8}
                >
                  <Text style={styles.optionButtonText}>Mute Once</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.optionButton}
                  onPress={() => handleDisableChoice("off")}
                  activeOpacity={0.8}
                >
                  <Text style={styles.optionButtonText}>Off</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.optionButtonCancel}
                  onPress={() => setShowDisableOptions(false)}
                  activeOpacity={0.8}
                >
                  <Text style={styles.optionButtonCancelText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>

        <View style={styles.volumeContainer}>
          <TouchableOpacity
            onPress={() => setShowVolumeSlider(true)}
            activeOpacity={0.7}
          >
            <Ionicons name={volumeIcon} size={20} color="#374151" />
          </TouchableOpacity>

          <Modal
            visible={showVolumeSlider}
            transparent
            animationType="fade"
            onRequestClose={() => setShowVolumeSlider(false)}
          >
            <Pressable
              style={styles.backdrop}
              onPress={() => setShowVolumeSlider(false)}
            />
            <View style={styles.modalWrapper}>
              <View style={styles.modalCard}>
                <View style={styles.modalHeader}>
                  <Text style={styles.modalTitle}>Volume</Text>
                  <TouchableOpacity
                    onPress={() => setShowVolumeSlider(false)}
                    activeOpacity={0.7}
                  >
                    <Ionicons name="close" size={18} color="#374151" />
                  </TouchableOpacity>
                </View>

                <View style={styles.sliderRow}>
                  <Slider
                    style={styles.slider}
                    value={currentVolume}
                    minimumValue={0}
                    maximumValue={100}
                    step={1}
                    minimumTrackTintColor="#3b82f6"
                    maximumTrackTintColor="#d1d5db"
                    thumbTintColor="#2563eb"
                    onValueChange={(value) =>
                      setCurrentVolume(Math.round(value))
                    }
                  />

                  <Text style={styles.volumeText}>{volumeLabel}%</Text>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 40,
    padding: 10,
    backgroundColor: "#d3d3d3",
    borderRadius: 10,
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  time: {
    fontSize: 48,
    fontWeight: "bold",
  },
  timeOfDay: {
    fontSize: 30,
    fontWeight: "bold",
    paddingBottom: 5,
  },
  timeDataContainer: {
    gap: 10,
  },
  notificationText: {
    fontSize: 16,
    fontWeight: "normal",
  },
  actionContainer: {
    gap: 20,
  },
  switchWrapper: {
    position: "relative",
  },
  switch: {
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
  },
  volumeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 5,
    position: "relative",
  },
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(15, 23, 42, 0.25)",
  },
  modalWrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 20,
    alignItems: "center",
    paddingHorizontal: 16,
  },
  modalCard: {
    width: "100%",
    maxWidth: 320,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 4,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },
  volumeText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#111827",
    textAlign: "right",
    marginTop: 4,
  },
  sliderRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  slider: {
    flex: 1,
    height: 36,
  },
  optionBackdrop: {
    flex: 1,
    backgroundColor: "transparent",
  },
  optionModalWrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 20,
    alignItems: "center",
    paddingHorizontal: 16,
  },
  optionModalCard: {
    width: "100%",
    maxWidth: 320,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 4,
  },
  optionButton: {
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: "center",
    marginBottom: 8,
    backgroundColor: "#f3f4f6",
  },
  optionButtonText: {
    color: "#111827",
    fontWeight: "600",
  },
  optionButtonCancel: {
    backgroundColor: "#dddddd",
    borderRadius: 10,
    marginTop: 10,
    paddingVertical: 10,
    alignItems: "center",
  },
  optionButtonCancelText: {
    color: "#111827",
    fontWeight: "600",
  },
});
