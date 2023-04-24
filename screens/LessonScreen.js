import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import RenderHTML from "react-native-render-html";

export default function LessonScreen({
  setScreen,
  setCurrentLesson,
  currentLesson,
}) {
  let lesson = currentLesson;
  const { width } = useWindowDimensions();

  const renderItem = ({ item }) => {
    return (
      <ScrollView>
        <View style={styles.card}>
          <Text style={styles.lessonId}>Lesson {lesson.id}</Text>
          <Text style={styles.lessonTitle}>{lesson.title}</Text>
          <View>
            {lesson.content.map((segment, index) => {
              if (typeof segment === "string" || segment.style) {
                return (
                  <React.Fragment key={index}>
                    <RenderHTML
                      contentWidth={width}
                      source={{ html: segment }}
                    />
                  </React.Fragment>
                );
              } else if (segment.list) {
                return (
                  <View key={index} style={styles.listContainer}>
                    {segment.list.map((item, itemIndex) => (
                      <React.Fragment key={itemIndex}>
                        <RenderHTML
                          contentWidth={width}
                          source={{ html: item }}
                        />
                      </React.Fragment>
                    ))}
                  </View>
                );
              }
            })}
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
    padding: 10,
    margin: 10,
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
  listContainer: {
    marginLeft: 20,
    marginBottom: 10,
  },
});
