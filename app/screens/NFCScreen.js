import React from "react";
import { StyleSheet, Text, Image, View, Button, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";

import Colours from "../config/Colours";

function NFCScreen(props) {
  const handleTap = () => console.log("Card tapped");
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.banners}>
        <Text style={styles.textBanner}>
          Welcome to the Automatic Teller Mobile
        </Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.textMain} onPress={handleTap}>
          Tap your NFC card here
        </Text>
        <Image
          resizeMode="contain"
          source={require("../assets/CC_Symbol.png")}
        />
      </View>
      <View style={styles.banners} />
    </View>
  );
}

/*import NfcManager, {NfcEvents} from 'react-native-nfc-manager';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: Colours.primary,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  banners: {
    backgroundColor: Colours.secondary,
    justifyContent: "center",
    height: 120,
  },
  textMain: {
    color: Colours.secondary,
    fontSize: 20,
  },
  textBanner: {
    color: Colours.primary,
    fontSize: 25,
  },
});

export default NFCScreen;