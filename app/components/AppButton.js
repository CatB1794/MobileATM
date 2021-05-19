import React from "react";
import { Text, TouchableOpacity } from "react-native";

import styles from "./styles";

function AppButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.btns} onPress={onPress}>
      <Text style={styles.btnsTxt}>{title}</Text>
    </TouchableOpacity>
  );
}

export default AppButton;
