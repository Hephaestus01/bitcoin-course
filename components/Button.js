import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

export default function Button({ buttonText, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.button, styles.buttonShadow]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
