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
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";

export default function NavBar({ setScreen, screen }) {
  return (
    <View style={{ flexDirection: "row"}}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "flex-end",
          paddingHorizontal: 15,
          paddingVertical: 20,
        }}
      >
        {screen !== "home" ? (
          <TouchableOpacity
            style={styles.arrowIcon}
            onPress={() => setScreen("home")}
          >
            <FontAwesomeIcon icon={faArrowLeft} size={40} />
          </TouchableOpacity>
        ) : null}

        <TouchableOpacity
          style={styles.navIcon}
          onPress={() => setScreen("home")}
        >
          <FontAwesomeIcon icon={faBars} size={40} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  arrowIcon: {
    position: "absolute",
    left: 20,
    alignSelf: "center",
  },
  navIcon: {
    alignSelf: "center",
  },
});
