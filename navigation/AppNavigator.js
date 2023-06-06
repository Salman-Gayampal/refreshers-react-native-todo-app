import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen"; // Import your screen components
import ProfileScreen from "../screens/ProfileScreen";
import {HeaderBackground, HeaderShownContext } from "@react-navigation/elements";

// Create a stack navigator
const Stack = createStackNavigator();

// Define your navigation structure
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* Add more screen components and their respective names here */}
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
