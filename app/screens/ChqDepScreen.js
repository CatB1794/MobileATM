import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";

import styles from "../components/styles";
import AppButton from "../components/AppButton";
import ExitBtn from "../components/ExitBtn";
import Keyboard from "../components/Keyboard";

function ChqDepScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.topBanner}>
        <Text style={styles.topBanTxt}>Enter an amount to deposit</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.txtMainSmall}>
          Tap the image below to scan your cheque
        </Text>
        <TouchableOpacity onPress={() => navigation.push("Cam")}>
          <Image
            resizeMode="contain"
            source={require("../assets/chq-deposit-icon.png")}
          />
        </TouchableOpacity>
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

export default ChqDepScreen;

// image attribution https://www.pngkit.com/view/u2r5q8w7q8r5i1w7_mobile-banking-and-deposit-mobile-deposit-icon-png/
