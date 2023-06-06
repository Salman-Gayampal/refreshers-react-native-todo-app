import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TodoItem = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  title: {
    fontSize: 16,
  },
});

export default TodoItem;
