import React from "react";
import { Text, TouchableOpacity } from "react-native";

import styles from "./styles";

function ExitBtn(props) {
  return (
    <TouchableOpacity style={styles.btnsExit} onPress={props.onPress}>
      <Text style={styles.btnsExitTxt}>{props.title}</Text>
    </TouchableOpacity>
  );
}

export default ExitBtn;
