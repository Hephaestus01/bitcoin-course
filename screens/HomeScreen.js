import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

import UnitCarousel from "../components/UnitCarousel";
import Button from "../components/Button";

export default function HomeScreen({
  setScreen,
  setCurrentLesson,
  currentLesson,
  setCurrentUnit,
  currentUnit,
}) {
  return (
    <>
      <UnitCarousel
        setScreen={setScreen}
        setCurrentLesson={setCurrentLesson}
        currentLesson={currentLesson}
        setCurrentUnit={setCurrentUnit}
        currentUnit={currentUnit}
      />
    </>
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
