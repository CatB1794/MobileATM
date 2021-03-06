import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Text, Image, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import styles from "../components/styles";
import AppButton from "../components/AppButton";
import ExitBtn from "../components/ExitBtn";
import BankBalance from "../components/BankBalance";

function AccountBalance() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.topBanner}>
        <Text style={styles.topBanTxt}>Available Balance</Text>
      </View>
      <View style={styles.container}>
        <Image
          resizeMode="contain"
          source={require("../assets/AccBalance.png")}
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

export default AccountBalance;

// image attribution <a href="https://www.vecteezy.com/free-vector/balance-icon">Balance Icon Vectors by Vecteezy</a>
