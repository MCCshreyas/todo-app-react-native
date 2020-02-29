import React, { useState } from "react";
import { StyleSheet, View, Button, TextInput, Alert } from "react-native";

const AddTodo = ({ submitHandler }) => {
  const [text, setText] = useState("");

  const changeHandler = val => {
    setText(val);
  };

  const saveTodo = () => {
    if (text != "") {
      submitHandler(text);
      Alert.alert("Success", "Todo added successfully");
      setText("");
    }
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="add todo ..."
        onChangeText={changeHandler}
        value={text}
      />
      <Button onPress={saveTodo} title="Add todo" color="coral" />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomColor: "#ddd",
    borderBottomWidth: 1
  }
});

export default AddTodo;
