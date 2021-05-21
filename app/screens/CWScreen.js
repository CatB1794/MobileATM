import React from "react";
import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
/*import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';
import { useKeyboard } from '@react-native-community/hooks'*/

import styles from "../components/styles";
import AppButton from "../components/AppButton";
import ExitBtn from "../components/ExitBtn";

function CWScreen(props) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.topBanner}>
        <Text style={styles.topBanTxt}>Please select an amount</Text>
      </View>
      <View style={styles.container}>
        <AppButton
          style={styles.textMain}
          onPress={props.onPress}
          title="£10"
        />
        <AppButton
          style={styles.textMain}
          onPress={props.onPress}
          title="£20"
        />
        <AppButton
          style={styles.textMain}
          onPress={props.onPress}
          title="£50"
        />
        <AppButton
          style={styles.textMain}
          onPress={props.onPress}
          title="Other Amount"
        />
        <AppButton
          style={styles.textMain}
          onPress={props.onPress}
          title="Currency Exchange"
        />
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

//<AppButton title="Test" />

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
