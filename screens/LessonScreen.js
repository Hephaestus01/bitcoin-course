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

import LessonCarousel from "../components/LessonCarousel";

export default function LessonScreen(setScreen, setCurrentLesson, currentLesson) {
useEffect(() => {
  console.log("The Current Lesson ", currentLesson.title);
});
    
  return (
    <View>
          <Text>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
