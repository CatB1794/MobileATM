import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Text, Image, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import styles from "../components/styles";
import AppButton from "../components/AppButton";
import ExitBtn from "../components/ExitBtn";
import BankBalance from "../components/BankBalance";

function BalanceInquiry(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.topBanner}>
        <Text style={styles.topBanTxt}>Account Balance</Text>
      </View>
      <View style={styles.container}>
        <Image
          resizeMode="contain"
          source={require("../assets/icon-account-balance.png")}
        />
        <BankBalance />
        <AppButton
          style={styles.textMain}
          onPress={() => navigation.push("Receipt")}
          title="Print receipt"
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

export default BalanceInquiry;
