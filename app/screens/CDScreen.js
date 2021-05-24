import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Text, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";

import styles from "../components/styles";
import AppButton from "../components/AppButton";
import ExitBtn from "../components/ExitBtn";
import Keyboard from "../components/Keyboard";

function CDScreen(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.topBanner}>
        <Text style={styles.topBanTxt}>Enter an amount to deposit</Text>
      </View>
      <View style={styles.container}>
        <Image
          resizeMode="contain"
          source={require("../assets/cash-dep.png")}
        />
        <Keyboard />
        <AppButton
          style={styles.textMain}
          onPress={() => navigation.push("Receipt")}
          title="Accept"
        />
      </View>
      <View style={styles.btmBanner}>
        <ExitBtn
          style={styles.btmBanTxt}
          onPress={() => navigation.goBack()}
          title="Go Back"
        />
      </View>
    </View>
  );
}

export default CDScreen;
