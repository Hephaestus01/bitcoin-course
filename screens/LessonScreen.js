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

import LessonCarousel from "../components/LessonCarousel";

export default function HomeScreen() {
  const [count, setCount] = useState(0);
  const onPress = () => {
    setCount((prevCount) => prevCount + 1);
    console.log("Add One");
  };
  const onReset = () => {
    setCount(0);
    console.log("Reset");
  };

  return (
    <View>
      <LessonCarousel />
      <View style={styles.counterView}>
        <Text style={styles.counterText}>{count}</Text>
      </View>
      <TouchableOpacity
        style={[styles.button, styles.buttonShadow]}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>Add One</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.buttonShadow]}
        onPress={onReset}
      >
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  counterView: {
    marginBottom: 20,
  },
  counterText: {
    fontSize: 48,
    color: "#000",
    paddingHorizontal: 4,
  },
  button: {
    flexDirection: "row",
    height: 48,
    margin: 8,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    borderWidth: 1,
    backgroundColor: "#FFF",
  },
  buttonText: {
    fontSize: 18,
    color: "#000",
    paddingHorizontal: 4,
  },
  buttonShadow: {
    shadowColor: "rgb(249, 168, 212)",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
});
