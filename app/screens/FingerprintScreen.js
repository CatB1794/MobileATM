import React from "react";
import { StyleSheet, Text, Image, View, Button, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";

import MainMenu from "./MainMenu";

import styles from "../components/styles";

function FingerprintScreen(props) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.btmBanner} />
      <View style={styles.container}>
        <Text style={styles.textMain} onPress={props.onPress}>
          Scan your fingerprint
        </Text>
        <Image
          resizeMode="contain"
          source={require("../assets/fingerprint.png")}
        />
      </View>
      <View style={styles.btmBanner} />
    </View>
  );
}

export default FingerprintScreen;
