import React from "react";
import { Text, Image, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import styles from "../components/styles";
import AppButton from "../components/AppButton";
import ExitBtn from "../components/ExitBtn";

function ReceiptOption(props) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.topBanner}>
        <Text style={styles.topBanTxt}>Print a receipt?</Text>
      </View>
      <View style={styles.container}>
        <Image resizeMode="contain" source={require("../assets/receipt.png")} />
        <AppButton
          style={styles.textMain}
          onPress={props.onPress}
          title="Yes"
        />
        <AppButton style={styles.textMain} onPress={props.onPress} title="No" />
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

export default ReceiptOption;
