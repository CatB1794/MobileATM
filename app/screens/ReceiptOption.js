import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Text, Image, View } from "react-native";
import { StatusBar } from "expo-status-bar";
/*import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';*/

import styles from "../components/styles";
import AppButton from "../components/AppButton";
import ExitBtn from "../components/ExitBtn";

function ReceiptOption(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.topBanner}>
        <Text style={styles.topBanTxt}>Print a receipt?</Text>
      </View>
      <View style={styles.container}>
        <Image resizeMode="contain" source={require("../assets/receipt.png")} />
        <AppButton
          style={styles.textMain}
          onPress={props.onPress}
          title="Yes"
        />
        <AppButton
          style={styles.textMain}
          onPress={() => navigation.navigate("Main")}
          title="No"
        />
      </View>
      <View style={styles.btmBanner}>
        <Text style={styles.btmBanTxt}>Transaction completed</Text>
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

export default ReceiptOption;
