import React from "react";
import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import styles from "../components/styles";
import AppButton from "../components/AppButton";
import ExitBtn from "../components/ExitBtn";

function MainMenu(props) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.topBanner}>
        <Text style={styles.topBanTxt}>Please select a transaction</Text>
      </View>
      <View style={styles.container}>
        <AppButton
          style={styles.textMain}
          onPress={props.onPress}
          title="Cash Withdrawal"
        />
        <AppButton
          style={styles.textMain}
          onPress={props.onPress}
          title="Cash Deposit"
        />
        <AppButton
          style={styles.textMain}
          onPress={props.onPress}
          title="Cheque Deposit"
        />
        <AppButton
          style={styles.textMain}
          onPress={props.onPress}
          title="Balance Inquiry"
        />
      </View>
      <View style={styles.btmBanner}>
        <ExitBtn
          style={styles.btmBanTxt}
          onPress={props.onPress}
          title="Exit"
        />
      </View>
    </View>
  );
}

export default MainMenu;
