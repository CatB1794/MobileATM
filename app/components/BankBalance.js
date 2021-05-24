import React from "react";
import { Text } from "react-native";

import styles from "../components/styles";

var initBalance = 1903.54;
var amount = 0;
var finalBalance = initBalance + amount;

var BankBalance = () => {
  return <Text style={styles.textMain}>£{finalBalance.toString()}</Text>;
};

export default BankBalance;
