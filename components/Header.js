import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 100,
    paddingTop: 45,
    backgroundColor: "coral"
  },
  title: {
    textAlign: "center",
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  }
});
