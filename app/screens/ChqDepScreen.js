import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { Text, View, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Entypo } from "@expo/vector-icons";

import styles from "../components/styles";
import AppButton from "../components/AppButton";
import ExitBtn from "../components/ExitBtn";

function ChqDepScreen(props) {
  const navigation = useNavigation();
  const [chqAm, setChqAm] = useState("");
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.topBanner}>
        <Text style={styles.topBanTxt}>Enter an amount to deposit</Text>
      </View>
      <View style={styles.container}>
        <Entypo name="keyboard" size={50} color="black" />
        <TextInput
          keyboardType="numeric"
          onChangeText={(text) => setChqAm(text)}
          style={styles.txtInput}
        ></TextInput>
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
