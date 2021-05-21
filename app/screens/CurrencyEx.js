import React from "react";
import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Entypo } from "@expo/vector-icons";

import styles from "../components/styles";
import AppButton from "../components/AppButton";
import ExitBtn from "../components/ExitBtn";

function CurrencyEx(props) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.topBanner}>
        <Text style={styles.topBanTxt}>Select a currency</Text>
      </View>
      <View style={styles.container}>
        <Entypo name="keyboard" size={50} color="black" />
      </View>
      <View style={styles.btmBanner}>
        <ExitBtn
          style={styles.btmBanTxt}
          onPress={props.onPress}
          title="Go Back"
        />
      </View>
    </View>
  );
}

export default CurrencyEx;
