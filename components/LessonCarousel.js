import * as React from "react";
import {
  Dimensions,
  Text,
  View,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";

import { data } from "../data/course-data";

export default function LessonCarousel() {
  const OFFSET = 40;
  const width = Dimensions.get("window").width;
  const ITEM_WIDTH = width - OFFSET * 2;

  // Extract lessons from the data object
  const lessons = data.flatMap((lessonGroup) => Object.values(lessonGroup));

  return (
    <View style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      <View style={{ height: 150 }}>
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
          {lessons.map((lesson, index) => (
            <View style={{ backgroundColor: "red", paddingHorizontal: 5 }}>
              <View
                key={index}
                style={[
                  styles.card,
                  styles.cardShadow,
                  {
                    width: ITEM_WIDTH,
                    marginLeft: index === 0 ? OFFSET : undefined,
                    marginRight:
                      index === lessons.length - 1 ? OFFSET : undefined,
                  },
                ]}
              >
                <Text style={{ textAlign: "center", fontSize: 30 }}>
                  {lesson.title}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderWidth: 1,
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "white",
    height: 150,
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
});