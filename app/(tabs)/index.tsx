import { ImageBackground, ScrollView } from "react-native";
import { s } from "../../App.style";
import { View, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { Header } from "@/components/Header/Header";
import { CardTodo } from "@/components/CardTodo/CardTodo";

const TODO_LIST = [
  {
    id: 1,
    title: "Learn React Native",
    description: "Learn how to build mobile applications with React Native.",
    isCompleted: true,
  },
  {
    id: 2,
    title: "Learn TypeScript",
    description: "Learn how to write type-safe JavaScript with TypeScript.",
    isCompleted: false,
  },
  {
    id: 3,
    title: "Learn Expo",
    description: "Learn how to use the Expo platform to build mobile apps.",
    isCompleted: false,
  },
];

export default function HomeScreen() {
  const [todoList, setTodoList] = useState([
    ...TODO_LIST,
    ...TODO_LIST,
    ...TODO_LIST,
    ...TODO_LIST,
  ]);

  const renderTodoList = () => {
    return todoList.map((todo) => (
      <View key={todo.id} style={s.cardItem}>
        <CardTodo key={todo.id} todo={todo} />
      </View>
    ));
  };

  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={s.app}>
          <View style={s.header}>
            <Header />
          </View>
          <View style={s.body}>
            <ScrollView style={s.scrollView}>{renderTodoList()}</ScrollView>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>

      <View style={s.footer}>
        <Text>Footer</Text>
      </View>
    </>
  );
}
