import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import TodoItem from "../components/TodoItem";

const HomeScreen = () => {
  const navigation = useNavigation();
  const goToProfile = () => {
    navigation.navigate("Profile"); // Navigate to the "Profile" screen
  };

  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (todoText.trim() !== "") {
      setTodos((prevTodos) => [...prevTodos, todoText]);
      setTodoText("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Todo App</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter todo item"
          value={todoText}
          onChangeText={(text) => setTodoText(text)}
        />
        <Button title="Add" onPress={handleAddTodo} />
      </View>
      <FlatList
        data={todos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <TodoItem title={item} />}
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          backgroundColor: "blue",
          width: "100%",
          marginTop: 20,
          paddingVertical: 10,
          borderRadius: 10,
        }}
      >
        <Button
          title="Go to Meetings"
          color={"black"}
          onPress={() => console.log("Going to Meetings Screen!")}
        />
        <Button title="Go to Profile" color={"black"} onPress={goToProfile} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  input: {
    flex: 1,
    marginRight: 10,
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default HomeScreen;
