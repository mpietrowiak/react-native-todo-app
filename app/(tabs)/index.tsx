import { ImageBackground, ScrollView } from "react-native";
import { s } from "../../App.style";
import { View, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { Header } from "@/components/Header/Header";
import { CardTodo } from "@/components/CardTodo/CardTodo";

interface Todo {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
}

const TODO_LIST: Todo[] = [
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
  {
    id: 4,
    title: "Learn React Navigation",
    description: "Learn how to use the React Navigation library.",
    isCompleted: false,
  },
  {
    id: 5,
    title: "Learn Redux",
    description: "Learn how to manage state with the Redux library.",
    isCompleted: false,
  },

  {
    id: 6,
    title: "Learn React Native",
    description: "Learn how to build mobile applications with React Native.",
    isCompleted: true,
  },
  {
    id: 7,
    title: "Learn TypeScript",
    description: "Learn how to write type-safe JavaScript with TypeScript.",
    isCompleted: false,
  },
  {
    id: 8,
    title: "Learn Expo",
    description: "Learn how to use the Expo platform to build mobile apps.",
    isCompleted: false,
  },
];

export default function HomeScreen() {
  const [todoList, setTodoList] = useState([...TODO_LIST]);

  const renderTodoList = () => {
    return todoList.map((todo) => (
      <View key={todo.id} style={s.cardItem}>
        <CardTodo
          key={todo.id}
          todo={todo}
          onPress={(todo: Todo) => updateTodo(todo)}
        />
      </View>
    ));
  };

  function updateTodo(todo: Todo) {
    const updatedTodoList = todoList.map((t) =>
      t.id === todo.id ? { ...t, isCompleted: !t.isCompleted } : t
    );
    setTodoList(updatedTodoList);
  }

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
