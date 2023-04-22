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
      <View style={{ height: 350 }}>
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
              <TouchableOpacity
                // onPress={() => {
                  // setCurrentLesson(unit);
                  // setScreen("unit");
                // }}
                style={[
                  styles.card,
                  styles.cardShadow,
                  { backgroundColor: unit.metadata.color },
                  {
                    width: ITEM_WIDTH,
                    marginLeft: index === 0 ? OFFSET : undefined,
                    marginRight:
                      index === data.length - 1 ? OFFSET : undefined,
                    padding: 50,
                  },
                ]}
              >
                <Text style={{ textAlign: "center", fontSize: 30 }}>
                  Unit {unit.id}:
                </Text>
                <Text style={{ textAlign: "center", fontSize: 16 }}>
                  {unit.title}
                </Text>
              </TouchableOpacity>
              {/* <LessonCarousel/> */}
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

// function LessonCarousel

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderWidth: 1,
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "white",
    height: 150,
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
});