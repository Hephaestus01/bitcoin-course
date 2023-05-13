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

import { data } from "../data/real-data";

export default function CourseMapScreen({
  setScreen,
  setCurrentLesson,
  currentLesson,
}) {
  let lesson = currentLesson;

  return (
    <ScrollView>
      {data.map((unit, index) => (
        //   <Text>{unit.id}</Text>
        <Unit key={unit.id} unitData={unit} />
      ))}
    </ScrollView>
  );
}

function Unit({ unitData }) {
  return (
    <View>
      <Text>{unitData.id}</Text>
      {unitData.lessons.map((lesson, index) => (
        <Lesson key={lesson.id} lessonData={lesson} />
      ))}
    </View>
  );
}

function Lesson({ lessonData }) {
  const style = lessonData.completed
    ? styles.completed
    : lessonData.unlocked
    ? styles.unlocked
    : styles.locked;

  return (
    <View>
      <TouchableOpacity style={style}>
        <Text style={style}>{lessonData.id}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  unitCard: {
    /* Completed lesson styles go here */
  },
  lessonCard: {
    /* Completed lesson styles go here */
  },
  lessonStatus: {
    /* Completed lesson styles go here */
  },
  completed: {
    /* Completed lesson styles go here */
  },
  unlocked: {
    /* Unlocked lesson styles go here */
  },
  locked: {
    /* Locked lesson styles go here */
  },
});
