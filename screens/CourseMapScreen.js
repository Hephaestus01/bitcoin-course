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
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
      {data.map((unit, index) => (
        //   <Text>{unit.id}</Text>
        <Unit key={unit.id} unitData={unit} />
      ))}
    </ScrollView>
  );
}

function Unit({ unitData }) {
  let color = unitData.metadata.color;

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity style={[styles.unitCard, { backgroundColor: color }]}>
        <Text style={{ fontSize: 24, fontWeight: 500 }}>
          Unit {unitData.id}:
        </Text>
        <Text style={{ fontSize: 24, fontWeight: 500 }}>{unitData.title}</Text>
        <Text style={{ fontSize: 20 }}>{unitData.tagline}</Text>
      </TouchableOpacity>

      {unitData.lessons.map((lesson, index) => (
        <Lesson key={lesson.id} lessonData={lesson} color={color} />
      ))}
    </View>
  );
}

function Lesson({ lessonData, color }) {
  const style = lessonData.completed
    ? styles.completed
    : lessonData.unlocked
    ? styles.unlocked
    : styles.locked;

  return (
    <View style={[styles.lessonRow]}>
      <View style={styles.lessonStatus}>
        <Text>*</Text>
      </View>

      <TouchableOpacity style={[styles.lessonCard, { backgroundColor: color }]}>
        <Text style={style}>{lessonData.id}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  unitCard: {
    flex: 1,
    justifyContent: "space-around",
    borderWidth: 1,
    alignItems: "center",
    padding: 10,
    borderRadius: 20,
    height: 160,
    width: 320,
  },
  lessonRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    width: 320,
  },
  lessonStatus: {
    borderWidth: 1,
    padding: 10,
    alignItems: "center",
    borderRadius: 25,
    height: 50,
    width: 50,
  },
  lessonCard: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    height: 80,
    width: 220,
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
