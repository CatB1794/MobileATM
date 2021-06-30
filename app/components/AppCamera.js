import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import { Text, View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import { Entypo } from "@expo/vector-icons";

function AppCamera() {
  const [hasPermission, setHasPermission] = useState(null);
  const type = Camera.Constants.Type.back;
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Camera style={{ flex: 1, aspectRatio: 1 }} type={type} ratio={`1:1`}>
        <View
          style={{
            top: "85%",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Entypo name="circle" size={50} color="#4169e1" />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

export default AppCamera;
