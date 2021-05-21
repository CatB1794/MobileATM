import React from "react";
import { StyleSheet, Text, Image, View, Button, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
/*import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';*/

import styles from "../components/styles";
import ExitBtn from "../components/ExitBtn";

function BalanceInquiry(props) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.topBanner}>
        <Text style={styles.topBanTxt}>Balance Amount</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.textMain}>£1905.32</Text>
      </View>
      <View style={styles.btmBanner}>
        <ExitBtn
          style={styles.btmBanTxt}
          onPress={props.onPress}
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

export default BalanceInquiry;
