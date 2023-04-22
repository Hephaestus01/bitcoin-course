import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  FlatList,
  Text,
  TextInput,
  View,
  SafeAreaView,
  Button,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-web";

export default function LessonScreen({
  setScreen,
  setCurrentLesson,
  currentLesson,
}) {
  let lesson = currentLesson;

  const renderItem = () => {
    return (
      <>
        <TouchableOpacity
          style={styles.homeButton}
          onPress={() => setScreen("home")}
        >
          <Text style={{ fontSize: 24 }}>Home</Text>
        </TouchableOpacity>
        <View>
          <Text>Lesson {lesson.id}</Text>
          <Text>{lesson.title}</Text>
        </View>
      </>
    );
  };

  return (
    <FlatList
      data={[{}]} // Use an array with a single empty object to render one item
      renderItem={renderItem}
      keyExtractor={(_, index) => index.toString()}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  homeButton: {},
});
