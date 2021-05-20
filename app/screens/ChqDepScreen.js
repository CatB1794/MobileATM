import React from 'react';
import { StyleSheet, Text, Image, View, Button, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
/*import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';
import { useKeyboard } from '@react-native-community/hooks'*/
import { Entypo } from '@expo/vector-icons';

import ReceiptOption from "./ReceiptOption";

import styles from "../components/styles";

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

export default ChqDepScreen;