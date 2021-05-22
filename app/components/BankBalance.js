import React, { useState } from "react";
import { Text } from "react-native";

import styles from "../components/styles";

const BankBalance = () => {
  const [initBalance] = useState(1903.54);
  const [total, setTotal] = useState(0);
  const [finalBalance] = useState(initBalance + total);

  return <Text style={styles.textMain}>£{finalBalance.toString()}</Text>;
};

export default BankBalance;
