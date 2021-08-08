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
            source={require("../assets/NFC_Symbol.png")}
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

// image attribution https://icons8.com/icon/set/nfc/color
