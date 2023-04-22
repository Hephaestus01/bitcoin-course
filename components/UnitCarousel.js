import * as React from "react";
import {
  Dimensions,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";

import { data } from "../data/real-data";

export default function UnitCarousel({ setScreen, setCurrentLesson }) {
  const OFFSET = 40;
  const width = Dimensions.get("window").width;
  const ITEM_WIDTH = width - OFFSET * 2;

  // Extract lessons from the data object
  // const lessons = data.flatMap((lessonGroup) => Object.values(lessonGroup));

  return (
    <View style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
        <ScrollView
          horizontal
          pagingEnabled
          snapToInterval={ITEM_WIDTH}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 0 }}
          onScroll={(event) => {
            const currentIndex = Math.round(
              event.nativeEvent.contentOffset.x / ITEM_WIDTH
            );
          }}
          scrollEventThrottle={16}
          disableIntervalMomentum={true}
        >
          {data.map((unit, index) => (
            <View key={index} style={{ paddingHorizontal: 5 }}>
              <View style={{height: 350}}>
                <TouchableOpacity
                  style={[
                    {
                      backgroundColor: unit.metadata.color,
                      width: ITEM_WIDTH,
                      marginLeft: index === 0 ? OFFSET : undefined,
                      marginRight:
                        index === data.length - 1 ? OFFSET : undefined,
                      padding: 50,
                    },
                    styles.card,
                    styles.cardShadow,
                  ]}
                >
                  <Text style={{ textAlign: "center", fontSize: 30 }}>
                    Unit {unit.id}:
                  </Text>
                  <Text style={{ textAlign: "center", fontSize: 16 }}>
                    {unit.title}
                  </Text>
                </TouchableOpacity>
              </View>

              <LessonCarousel
                unit={unit}
                setScreen={setScreen}
                setCurrentLesson={setCurrentLesson}
              />
            </View>
          ))}
        </ScrollView>
    </View>
  );
}

function LessonCarousel({ unit, setScreen, setCurrentLesson }) {
  const ITEM_HEIGHT = 150;

  return (
    <ScrollView
      style={{ marginTop: 8 }}
      snapToInterval={ITEM_HEIGHT}
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={16}
      disableIntervalMomentum={true}
    >
      {unit.lessons.map((lesson, index) => (
        <View key={index} style={{ paddingVertical: 5 }}>
          <TouchableOpacity
            onPress={() => {
              setCurrentLesson(lesson);
              setScreen("lesson");
            }}
            style={[
              styles.lessonCard,
              styles.lessonCardShadow,
              // { backgroundColor: lesson.metadata.color },
              {
                height: ITEM_HEIGHT,
                padding: 20,
                marginVertical: index === 0 ? 8 : undefined,
              },
            ]}
          >
            <Text style={{ textAlign: "center", fontSize: 16 }}>
              Lesson {lesson.id}:
            </Text>
            <Text style={{ textAlign: "center", fontSize: 12 }}>
              {lesson.title}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderWidth: 1,
    justifyContent: "center",
    borderRadius: 20,
    marginVertical: 8,
  },
  cardShadow: {
    shadowColor: "rgb(249, 168, 212)",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  lessonCard: {
    flex: 1,
    borderWidth: 1,
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "white",
    height: 155,
    marginVertical: 8,
  },
  lessonCardShadow: {
    shadowColor: "rgb(249, 168, 212)",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
});
