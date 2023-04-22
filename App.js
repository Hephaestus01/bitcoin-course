import React, { useEffect, useState } from "react";

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

import { data } from "./data/real-data";

export default function App() {
  const [screen, setScreen] = useState("home");
  const [currentUnit, setCurrentUnit] = useState(data[0]);
  const [currentLesson, setCurrentLesson] = useState(data[0].lessons[0]);

  useEffect(() => {
    console.log(currentLesson);
  });

  return (
    <SafeAreaView style={styles.safeAreaView}>
      {screen === "home" ? (
        <HomeScreen
          setScreen={setScreen}
          setCurrentLesson={setCurrentLesson}
          currentLesson={currentLesson}
          setCurrentUnit={setCurrentUnit}
          currentUnit={currentUnit}
        />
      ) : screen === "lesson" ? (
        <LessonScreen
          setScreen={setScreen}
          setCurrentLesson={setCurrentLesson}
          currentLesson={currentLesson}
        />
      ) : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fef7e8",
  },
});
