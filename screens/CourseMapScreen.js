import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Modal,
} from "react-native";
import { BlurView } from "expo-blur";

import NavBar from "../components/NavBar";
import { data } from "../data/real-data";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export default function CourseMapScreen({
  setScreen,
  screen,
  setCurrentLesson,
  currentLesson,
}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <NavBar setScreen={setScreen} screen={screen} />

      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
        {data.map((unit, index) => (
          <Unit
            key={unit.id}
            unitData={unit}
            setCurrentLesson={setCurrentLesson}
            setScreen={setScreen}
            setModalVisible={setModalVisible}
          />
        ))}
      </ScrollView>
      {modalVisible && (
        <BlurView style={StyleSheet.absoluteFill} intensity={30} tint="dark" />
      )}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <TouchableWithoutFeedback
          onPress={() => setModalVisible(!modalVisible)}
        >
          <View style={styles.centeredView}>
            <TouchableWithoutFeedback onPress={() => {}}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Lesson {currentLesson.id}</Text>
                <Text style={styles.modalText}>{currentLesson.title}</Text>
                <TouchableOpacity
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Hide Modal</Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
}

function Unit({ unitData, setCurrentLesson, setScreen, setModalVisible }) {
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
        <Lesson
          key={lesson.id}
          lessonData={lesson}
          color={color}
          setCurrentLesson={setCurrentLesson}
          setScreen={setScreen}
          setModalVisible={setModalVisible}
        />
      ))}
    </View>
  );
}

function Lesson({
  lessonData,
  color,
  setCurrentLesson,
  setScreen,
  setModalVisible,
}) {
  const style = lessonData.completed
    ? styles.completed
    : lessonData.unlocked
    ? styles.unlocked
    : styles.locked;

  return (
    <View style={[styles.lessonRow]}>
      <View style={styles.lessonStatus}>
        <FontAwesomeIcon
          icon={faCircleCheck}
          size={50}
          style={{ color: color }}
        />
      </View>

      <TouchableOpacity
        style={[styles.lessonCard, { backgroundColor: color }]}
        onPress={() => {
          setCurrentLesson(lessonData);
          setModalVisible(true);
        }}
      >
        <Text style={{ fontSize: 20 }}>Lesson {lessonData.id}:</Text>
        <Text style={style}>{lessonData.title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  unitCard: {
    flex: 1,
    width: 340,
    justifyContent: "space-around",
    borderWidth: 1,
    alignItems: "center",
    padding: 10,
    borderRadius: 20,
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
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    height: 50,
    width: 50,
    backgroundColor: "gray",
  },
  lessonCard: {
    flex: 1,
    justifyContent: "space-around",
    marginLeft: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    height: 80,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  blurContainer: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  modalView: {
    margin: 20,
    width: 340,
    height: 340,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },

  modalText: {
    marginBottom: 15,
    textAlign: "center",
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
