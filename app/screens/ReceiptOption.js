import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Text, Image, View, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";

import styles from "../components/styles";
import AppButton from "../components/AppButton";

function ReceiptOption() {
  const navigation = useNavigation();
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
          onPress={() =>
            Alert.alert(
              "Dummy Receipt",
              "Transaction information would be emailed to customer",
              [
                {
                  text: "Main Menu",
                  onPress: () => navigation.navigate("Main"),
                },
                { text: "Exit", onPress: () => navigation.popToTop() },
              ]
            )
          }
          title="Yes"
        />
        <AppButton
          style={styles.textMain}
          onPress={() => navigation.navigate("Main")}
          title="No"
        />
      </View>
      <View style={styles.btmBanner}>
        <Text style={styles.btmBanTxt}>Transaction completed</Text>
      </View>
    </View>
  );
}

export default ReceiptOption;

// image attribution https://icon-icons.com/icon/receipt-shopping/49849
