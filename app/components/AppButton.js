import React from "react";
import { Text, TouchableOpacity } from "react-native";

import styles from "./styles";

function AppButton(props) {
  return (
    <TouchableOpacity style={styles.btns} onPress={props.onPress}>
      <Text style={styles.btnsTxt}>{props.title}</Text>
    </TouchableOpacity>
  );
}

export default AppButton;
