import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Text, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";

import styles from "../components/styles";
import SelectOpt from "../components/SelectOpt";
import ExitBtn from "../components/ExitBtn";

function CurrencyEx(props) {
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
        <SelectOpt />
        <SelectOpt />
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
