import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Text, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";

import styles from "../components/styles";
import CurrencyInput from "../components/CurrencyInput";
import AppButton from "../components/AppButton";
import ExitBtn from "../components/ExitBtn";

function CurrencyEx() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.topBanner}>
        <Text style={styles.topBanTxt}>Select a currency</Text>
      </View>
      <View style={styles.container}>
        <Image
          resizeMode="contain"
          source={require("../assets/currency-exchange.png")}
        />
        <CurrencyInput />
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

export default CurrencyEx;

// image attribution https://www.pinclipart.com/pindetail/iTibbhT_currency-vector-exchange-rate-card-exchange-icon-clipart/
