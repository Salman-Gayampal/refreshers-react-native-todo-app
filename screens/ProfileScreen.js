import React from "react";
import { Text, View, Button } from "react-native";

const ProfileScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Text style={{}}>Welcome to the Profile Screen!</Text>
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
          title="Go Back To Home"
          color={"black"}
          onPress={() => console.log("Going back to Home Screen!")}
        />
      </View>
    </View>
  );
};

export default ProfileScreen;
