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

export default function LessonScreen({
  setScreen,
  setCurrentLesson,
  currentLesson,
}) {
  let lesson = currentLesson;

  const renderItem = () => {
    return (
      <ScrollView>
        <View style={styles.card}>
          <Text style={styles.lessonId}>Lesson {lesson.id}</Text>
          <Text style={styles.lessonTitle}>{lesson.title}</Text>
          <View>
            {lesson.content.map((segment, index) =>
              // Conditional rendering based on the type of the segment
              typeof segment === "string" ? (
                <Text style={styles.segmentText} key={index}>
                  {segment}
                </Text>
              ) : (
                segment.list && (
                  <View key={index} style={styles.listContainer}>
                    {segment.list.map((item, itemIndex) => (
                      <Text style={styles.listItem} key={itemIndex}>
                        {"\u2022"} {item}
                      </Text>
                    ))}
                  </View>
                )
              )
            )}
          </View>
        </View>
      </ScrollView>
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
  card: {
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 1,
    padding: 20,
    margin: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgb(249, 168, 212)",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  lessonId: {
    fontSize: 18,
    fontWeight: "bold",
  },
  lessonTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  segmentText: {
    fontSize: 16,
    marginBottom: 10,
  },
  listContainer: {
    marginLeft: 20,
    marginBottom: 10,
  },
  listItem: {
    fontSize: 16,
    marginBottom: 5,
  },
});
