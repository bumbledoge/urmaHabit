import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import * as Haptics from "expo-haptics";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Urma Habits</Text>
      <BouncyCheckbox
        onPress={(isChecked) => {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
        }}
        text="Talk 5min to camera"
      />
      <BouncyCheckbox
        onPress={(isChecked) => {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
        }}
        text="5min willpower training"
        fillColor="red"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 20,
    gap: 10,
  },
  header: {
    paddingTop: 30,
    paddingBottom: 25,
    fontSize: 40,
    letterSpacing: 1.5,
  },
});
