import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Text, Image, View, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";

import styles from "../components/styles";

function NFCScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.topBanner}>
        <Text style={styles.topBanTxt}>
          Welcome to the{"\n"}Automatic Teller Mobile
        </Text>
      </View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.push("Finger")}
      >
        <View style={styles.container}>
          <Text style={styles.textMain}>Tap your NFC card here</Text>
          <Image
            resizeMode="contain"
            source={require("../assets/CC_Symbol.png")}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.btmBanner}>
        <Text style={styles.btmBanTxt}>
          Thank you for choosing to use a virtual ATM
        </Text>
      </View>
    </View>
  );
}

export default NFCScreen;

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
