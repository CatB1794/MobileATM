import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Text, Image, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import styles from "../components/styles";
import ExitBtn from "../components/ExitBtn";

function FingerprintScreen(props) {
  const navigation = useNavigation();
  const src = "../assets/fingerscan.png";

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.topBanner}>
        <Text style={styles.topBanTxt}>Please scan your fingerprint</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.textMain} onPress={() => navigation.push("Main")}>
          Scan here
        </Text>
        <Image resizeMode="contain" source={require(src)} />
      </View>
      <View style={styles.btmBanner}>
        <ExitBtn
          style={styles.btmBanTxt}
          onPress={() => props.navigation.popToTop()}
          title="Exit"
        />
      </View>
    </View>
  );
}

export default FingerprintScreen;
