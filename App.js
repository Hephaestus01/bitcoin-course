import React, { useEffect, useState } from "react";

import {
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  Button,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import NavButton from "./components/NavButton";
import HomeScreen from "./screens/HomeScreen";
import LessonScreen from "./screens/LessonScreen";

import { data } from "./data/real-data";

export default function App() {
  const [screen, setScreen] = useState("home");
  const [currentUnit, setCurrentUnit] = useState(data[0]);
  const [currentLesson, setCurrentLesson] = useState(data[0].lessons[0]);

  useEffect(() => {
    console.log(currentLesson.title);
  });

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeAreaView}>
        <View style={{backgroundColor:'transparent', zIndex:-1}}>
          <NavButton />
        </View>
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
    </>
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
