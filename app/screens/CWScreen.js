import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
/*import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';*/

import styles from "../components/styles";
import AppButton from "../components/AppButton";
import ExitBtn from "../components/ExitBtn";

function CWScreen(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.topBanner}>
        <Text style={styles.topBanTxt}>Please select an amount</Text>
      </View>
      <View style={styles.container}>
        <AppButton
          style={styles.textMain}
          onPress={() => navigation.push("Receipt")}
          title="£10"
        />
        <AppButton
          style={styles.textMain}
          onPress={() => navigation.push("Receipt")}
          title="£20"
        />
        <AppButton
          style={styles.textMain}
          onPress={() => navigation.push("Receipt")}
          title="£50"
        />
        <AppButton
          style={styles.textMain}
          onPress={() => navigation.push("Other")}
          title="Other Amount"
        />
        <AppButton
          style={styles.textMain}
          onPress={() => navigation.push("CurEx")}
          title="Currency Exchange"
        />
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

export default CWScreen;
