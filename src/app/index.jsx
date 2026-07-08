import { Text, View } from "react-native";
import { globalStyles } from "../styles/global";

export default function HomeScreen() {
  return (
    <View style={globalStyles.container}>
      <Text>Edit src/app/index.tsx to edit this screen.</Text>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
