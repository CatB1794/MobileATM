import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, View, Button, Alert } from 'react-native';
/*import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';
import { useKeyboard } from '@react-native-community/hooks'
import NfcManager, {NfcEvents} from 'react-native-nfc-manager';

// Pre-step, call this before any NFC operations
async function initNfc() {
  await NfcManager.start();
}

function readNdef() {
  const cleanUp = () => {
    NfcManager.setEventListener(NfcEvents.DiscoverTag, null);
    NfcManager.setEventListener(NfcEvents.SessionClosed, null);
  };

  return new Promise((resolve) => {
    let tagFound = null;

    NfcManager.setEventListener(NfcEvents.DiscoverTag, (tag) => {
      tagFound = tag;
      resolve(tagFound);
      NfcManager.setAlertMessageIOS('NDEF tag found');
      NfcManager.unregisterTagEvent().catch(() => 0);
    });

    NfcManager.setEventListener(NfcEvents.SessionClosed, () => {
      cleanUp();
      if (!tagFound) {
        resolve();
      }
    });

    NfcManager.registerTagEvent();
  });
}*/

export default function App() {
  const handleTap = () => console.log("Card tapped");
  return (
    <View style={styles.container}>
      <View style={styles.topBanner}>
        <Text style={styles.textBanner}>Welcome to the Automatic-Teller Mobile</Text>
      </View>
      <Text style={styles.textMain} onPress={handleTap}>Tap your NFC card here</Text>
      <Image resizeMode="contain" source={require("./assets/CC_Symbol.png")}/>
      <StatusBar style="auto" />
      <View style={styles.btmBanner}/>
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

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'column',
    backgroundColor: '#FFFAFAn',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  topBanner: {
    flex: 1,
    color: '#4169E1',
  },
  btmBanner: {
    flex: 1,
    color: '#4169E1',
  },
  textMain: {
    color: '#4169E1',
    fontSize: 20,
  },
  textBanner: {
    color: '#FFFAFAn',
    fontSize: 25,
  },
});

/*
      <Button title="Cash Withdrawal" onPress={() => Alert.alert("Receipt", "£50", [{text: "Ok"}])}/>
*/