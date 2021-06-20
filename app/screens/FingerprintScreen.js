import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Text, Image, View, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";

import styles from "../components/styles";
import ExitBtn from "../components/ExitBtn";

function FingerprintScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.topBanner}>
        <Text style={styles.topBanTxt}>Please scan your fingerprint</Text>
      </View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.push("Main")}
      >
        <View>
          <Image resizeMode="contain" source={require("../assets/scan.gif")} />
        </View>
      </TouchableOpacity>
      <View style={styles.btmBanner}>
        <ExitBtn
          style={styles.btmBanTxt}
          onPress={() => navigation.popToTop()}
          title="Exit"
        />
      </View>
    </View>
  );
}

export default FingerprintScreen;
