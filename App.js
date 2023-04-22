import React, { useState } from "react";

import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  Button,
  TouchableOpacity,
} from "react-native";

import HomeScreen from "./screens/HomeScreen";
import LessonScreen from "./screens/LessonScreen";

export default function App() {
  const [screen, setScreen] = useState("home");

  return (
    <SafeAreaView style={styles.safeAreaView}>
      {screen === "home" ? (
        <HomeScreen setScreen={setScreen} />
      ) : screen === "lesson" ? (
        <LessonScreen setScreen={setScreen} setLesson={setLesson} />
      ) : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F3E5F5",
  },
});
