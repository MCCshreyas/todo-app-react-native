import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: 1 },
    { text: "create an app", key: 2 },
    { text: "play on the switch", key: 3 }
  ]);

  const pressHandler = key => {
    setTodos(todos => {
      return todos.filter(item => item.key != key);
    });
  };

  const submitHandler = text => {
    if(text != '') {
      setTodos(prevTodos => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodos];
      });
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss();  } } >
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          {todos.length > 0 ? (
            <Text>Todo's left - {todos.length}</Text>
          ) : (
            <Text style={styles.done}>All done. </Text>
          )}

          <FlatList
            data={todos}
            renderItem={({ item }) => {
              return <TodoItem item={item} pressHandler={pressHandler} />;
            }}
          />
        </View>
      </View>
    </View>
</TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
  done: {
    color: 'green'
  }
});
