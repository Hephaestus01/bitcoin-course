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

import { data } from "../data/real-real-data";

import LessonCarousel from "./subcomponents/LessonCarousel";

export default function UnitCarousel({ setScreen, setCurrentLesson }) {
  const OFFSET = 40;
  const width = Dimensions.get("window").width;
  const ITEM_WIDTH = width - OFFSET * 2;
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <View
      style={{
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: "rgba(52, 52, 52, alpha)",
      }}
    >
      <ScrollView
        horizontal
        pagingEnabled
        snapToInterval={ITEM_WIDTH}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: OFFSET,
          alignItems: "center",
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
        disableIntervalMomentum={true}
      >
        {data.map((unit, index) => {
          const inputRange = [
            (index - 1) * ITEM_WIDTH,
            index * ITEM_WIDTH,
            (index + 1) * ITEM_WIDTH,
          ];

          const translate = scrollX.interpolate({
            inputRange,
            outputRange: [0.85, 1, 0.85],
          });

          return (
            <ScrollView
              showsVerticalScrollIndicator={false}
              key={index}
              style={{
                paddingHorizontal: 5,
                // backgroundColor: "blue",
                width: ITEM_WIDTH,
              }}
            >
              <Animated.View
                style={{
                  alignItems: "center",
                  height: 360,
                  width: ITEM_WIDTH,
                  padding: 50,
                  // backgroundColor: "green",
                  transform: [{ scale: translate }],
                }}
              >
                <TouchableOpacity
                  style={[
                    {
                      backgroundColor: unit.metadata.color,
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
              </Animated.View>
              <LessonCarousel
                unit={unit}
                setScreen={setScreen}
                setCurrentLesson={setCurrentLesson}
              />
            </ScrollView>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderWidth: 1,
    justifyContent: "center",
    borderRadius: 20,
    width: 260,
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
