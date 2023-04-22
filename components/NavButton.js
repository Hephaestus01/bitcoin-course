import React, { useState } from "react";

import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

export default function NavButton() {
  return (
    <TouchableOpacity style={[styles.navButton, styles.buttonShadow]}>
      <Text style={styles.buttonText}>Text</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  navButton: {
    flexDirection: "row",
    height: 60,
    width: 60,
    margin: 8,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "right",
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
