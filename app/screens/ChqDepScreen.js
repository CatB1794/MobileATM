import React from 'react';
import { StyleSheet, Text, Image, View, Button, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
/*import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';
import { useKeyboard } from '@react-native-community/hooks'*/

function ChqDepScreen(props) {
    return (
        <div>
            
        </div>
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

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: "#FFFAFAn",
      alignItems: "center",
      alignContent: "center",
      justifyContent: "space-around",
      flexWrap: "wrap",
    },
    topBanner: {
      flex: 1,
      color: "#4169E1",
    },
    midBanner: {
      flex: 2,
      color: "#FFFAFAn",
    },
    btmBanner: {
      flex: 1,
      color: "#4169E1",
    },
    textMain: {
      color: "#4169E1",
      fontSize: 20,
    },
    textBanner: {
      color: "#FFFAFAn",
      fontSize: 25,
    },
  });

export default ChqDepScreen;