import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  FlatList,
  Text,
  TextInput,
  View,
  ScrollView,
  SafeAreaView,
  Button,
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
      <>
        <TouchableOpacity
          style={styles.homeButton}
          onPress={() => setScreen("home")}
        >
          <Text style={{ fontSize: 24 }}>Home</Text>
          <ScrollView>
            <View>
              <Text>Lesson {lesson.id}</Text>
              <Text>{lesson.title}</Text>
            </View>
            <View>
              {lesson.content.map((segment, index) =>
                // Conditional rendering based on the type of the segment
                typeof segment === "string" ? (
                  <Text key={index}>{segment}</Text>
                ) : (
                  segment.list && (
                    <View key={index} style={{ marginLeft: 20 }}>
                      {segment.list.map((item, itemIndex) => (
                        <Text key={itemIndex}>
                          {"\u2022"} {item}
                        </Text>
                      ))}
                    </View>
                  )
                )
              )}
            </View>
          </ScrollView>
        </TouchableOpacity>
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
