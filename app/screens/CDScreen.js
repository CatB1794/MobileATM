import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { Text, View, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";
/*import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';*/
import { Entypo } from "@expo/vector-icons";

import styles from "../components/styles";
import AppButton from "../components/AppButton";
import ExitBtn from "../components/ExitBtn";

function CDScreen(props) {
  const navigation = useNavigation();
  const [depAm, setDepAm] = useState("");
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.topBanner}>
        <Text style={styles.topBanTxt}>Enter an amount to deposit</Text>
      </View>
      <View style={styles.container}>
        <Entypo name="keyboard" size={50} color="black" />
        <TextInput
          keyboardType="numeric"
          onChangeText={(text) => setDepAm(text)}
          style={styles.txtInput}
        ></TextInput>
      </View>
      <View style={styles.btmBanner}>
        <ExitBtn
          style={styles.btmBanTxt}
          onPress={() => navigation.goBack()}
          title="Go Back"
        />
      </View>
    </View>
  );
}

/*saveFile = async () => {
  const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
  if (status === "granted") {
      let fileUri = FileSystem.documentDirectory + "Receipt.pdf";
      await FileSystem.writeAsStringAsync(fileUri, "Hello World", { encoding: FileSystem.EncodingType.UTF8 });
      const asset = await MediaLibrary.createAssetAsync(fileUri)
      await MediaLibrary.createAlbumAsync("Download", asset, false)
  }
}*/

/*
      <Button title="Cash Withdrawal" onPress={() => Alert.alert("Receipt", "£50", [{text: "Ok"}])}/>
*/

export default CDScreen;
