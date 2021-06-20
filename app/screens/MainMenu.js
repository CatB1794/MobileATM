import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import styles from "../components/styles";
import AppButton from "../components/AppButton";
import ExitBtn from "../components/ExitBtn";

function MainMenu() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.topBanner}>
        <Text style={styles.topBanTxt}>Please select a transaction</Text>
      </View>
      <View style={styles.container}>
        <AppButton
          style={styles.textMain}
          onPress={() => navigation.push("CWS")}
          title="Cash Withdrawal"
        />
        <AppButton
          style={styles.textMain}
          onPress={() => navigation.push("CDS")}
          title="Cash Deposit"
        />
        <AppButton
          style={styles.textMain}
          onPress={() => navigation.push("ChqDep")}
          title="Cheque Deposit"
        />
        <AppButton
          style={styles.textMain}
          onPress={() => navigation.push("Balance")}
          title="Balance Inquiry"
        />
      </View>
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

export default MainMenu;
