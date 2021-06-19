import React, { useState, useEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/core";
import { Text, View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import { Entypo } from "@expo/vector-icons";

function AppCamera() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const navigation = useNavigation();

  /*const cam = useRef(Camera);

  const takePic = async () => {
    if (cam.current) {
      const options = { quality: 1, base64: true, skipProcessing: false };
      await cam.current.takePictureAsync(options);
    }
  };*/

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
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: 1400,
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
