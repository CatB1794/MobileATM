import React from "react";
import { Text } from "react-native";

import styles from "./styles";

// Rather than a fixed value, a fetchAccountBalance function
// would be used to get the actual value from the bank

var initBalance = 1903.54;
var amount = 0;
var finalBalance = initBalance + amount;

var BankBalance = () => {
  return <Text style={styles.textMain}>£{finalBalance.toString()}</Text>;
};

export default BankBalance;
