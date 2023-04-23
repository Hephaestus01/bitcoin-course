import * as React from "react";
import {
  Animated,
  Dimensions,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";

export default function LessonCarousel({ unit, setScreen, setCurrentLesson }) {
  const ITEM_HEIGHT = 150;
  let unitColor = unit.metadata.color;

  return (
    <ScrollView
      style={{ marginTop: 8}}
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
  lessonCard: {
    flex: 1,
    borderWidth: 1,
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "white",
    alignSelf: "center",
    width: 260,
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
