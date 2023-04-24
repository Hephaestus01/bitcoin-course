import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

export default function NavScreen({
  setScreen,
  setCurrentLesson,
  currentLesson,
}) {
  let lesson = currentLesson;

  return (
    <ScrollView>
      <View style={styles.card}>
        <Text>NAV MENU</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
