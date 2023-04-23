import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

import NavButton from "./subcomponents/NavButton";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";

export default function NavBar({ setScreen }) {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={styles.backArrow}
          onPress={() => setScreen("home")}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </TouchableOpacity>
        <NavButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
  backArrow: {},
});
