import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
  Animated
} from "react-native";
import RenderHTML from "react-native-render-html";
import Modal from "react-native-modal";
import Button from "../components/Button";
import NavBar from "../components/NavBar";

const customRenderers = {
  collectible: {
    Renderer: ({ key }) => {
      const [modalVisible, setModalVisible] = useState(false);

      const showModal = () => {
        setModalVisible(true);
      };

      const hideModal = () => {
        setModalVisible(false);
      };

      return (
        <>
          <TouchableOpacity key={key} onPress={showModal}>
            <Text style={{ fontWeight: "bold" }}>Collectible</Text>
          </TouchableOpacity>
          <Modal isVisible={modalVisible} onBackdropPress={hideModal}>
            <View style={styles.modalContent}>
              <Text>Modal content goes here</Text>
            </View>
          </Modal>
        </>
      );
    },
  },
};

 const LessonScrollView = ({
   lesson,
   width,
   customRenderers,
   setCurrentLesson,
   currentUnit,
   setScreen,
   screen
 }) => {
   const scrollViewRef = useRef(new Animated.Value(0)).current;

   useEffect(() => {
     if (scrollViewRef.current) {
       scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: true });
     }
   }, [lesson]);

   return (
     <ScrollView ref={scrollViewRef}>
       <NavBar setScreen={setScreen} screen={screen} />
       <View style={{ width: width - 20 }}>
         <Text style={styles.lessonId}>Lesson {lesson.id}</Text>
         <Text style={styles.lessonTitle}>{lesson.title}</Text>
         <View>
           {lesson.content.map((segment, index) => {
             if (typeof segment === "string") {
               return (
                 <React.Fragment key={index}>
                   <View>
                     <RenderHTML
                       contentWidth={width}
                       source={{ html: segment }}
                       customRenderers={customRenderers}
                       tagsStyles={{
                         li: { fontSize: 18, lineHeight: 30 }, // Set the font size for list elements
                         p: { fontSize: 18, lineHeight: 30 }, // Set the font size for regular text segments
                       }}
                       style={{ fontSize: 30 }}
                     />
                   </View>
                 </React.Fragment>
               );
             } else if (segment.list) {
               return (
                 <View key={index} style={styles.listContainer}>
                   {segment.list.map((item, itemIndex) => (
                     <React.Fragment key={itemIndex}>
                       <View>
                         <RenderHTML
                           contentWidth={width}
                           source={{ html: item }}
                           tagsStyles={{
                             collectible: { fontWeight: "bold" },
                             li: {
                               fontSize: 18,
                               marginBottom: 10,
                               lineHeight: 30,
                             }, // Set the font size for list elements
                             p: { fontSize: 20 }, // Set the font size for regular text segments
                           }}
                         />
                       </View>
                     </React.Fragment>
                   ))}
                 </View>
               );
             } else if (segment.listIntro) {
               return (
                 <View key={index} style={styles.listIntro}>
                   <RenderHTML
                     contentWidth={width}
                     source={{ html: segment.listIntro }}
                     tagsStyles={{
                       collectible: { fontWeight: "bold" },
                       li: { fontSize: 18, marginBottom: 10 }, // Set the font size for list elements
                       p: { fontSize: 16, lineHeight: 24 }, // Set the font size for regular text segments
                     }}
                   />
                 </View>
               );
             }
           })}
         </View>
       </View>
       <Button
         buttonText={"Next Lesson"}
         onPress={() => {
           const lessons = currentUnit.lessons;
           const currentIndex = lessons.indexOf(lesson);
           const nextIndex = currentIndex + 1;
           setCurrentLesson(lessons[nextIndex] || lesson);
         }}
       />
     </ScrollView>
   );
 };

 export default function LessonScreen({
   setScreen,
   screen,
   setCurrentLesson,
   currentLesson,
   currentUnit,
 }) {
   const { width } = useWindowDimensions();

     return (
       <LessonScrollView
         lesson={currentLesson}
         width={width}
         customRenderers={customRenderers}
         setCurrentLesson={setCurrentLesson}
         currentUnit={currentUnit}
         setScreen={setScreen}
         screen={screen}
       />
     );   
 }


const styles = StyleSheet.create({
  lessonId: {
    fontSize: 48,
    fontWeight: "bold",
    textAlign: "center",
  },
  lessonTitle: {
    marginBottom: 20,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
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
  modalContent: {
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 1,
    padding: 10,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
