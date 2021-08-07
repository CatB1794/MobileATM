import React, { useState } from "react";
import { Text, Pressable } from "react-native";

import styles from "./styles";

function BankBalance() {
  const goodBalance = "£1903.54";
  const badBalance = "-£130.12";

  const [value, setValue] = useState(goodBalance);

  const negative = () => {
    setValue(badBalance);
  };

  return (
    <Pressable
      children={({ pressed }) => (
        <Text
          style={(styles.textMain, { color: pressed ? "#4169e1" : "#b22222" })}
          onPress={negative}
        >
          {value}
        </Text>
      )}
    />
  );
}

export default BankBalance;
