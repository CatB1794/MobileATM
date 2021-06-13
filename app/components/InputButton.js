import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";

import Colours from "../config/Colours";
import TextConf from "../config/TextConf";

function InputButton(props) {
  return (
    <View style={curStyles.container}>
      <TouchableOpacity onPress={props.onPress} style={curStyles.btnContainer}>
        <Text>{props.buttonTxt}</Text>
      </TouchableOpacity>
      <View>
        <TextInput
          keyboardType="numeric"
          style={curStyles.txtInput}
          onChangeNumber={props.onChangeNumber}
          {...props}
        />
      </View>
    </View>
  );
}

const curStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    padding: 10,
  },
  btnContainer: {
    borderBottomColor: Colours.steel,
    borderTopColor: Colours.steel,
    borderRightColor: Colours.steel,
    borderLeftColor: Colours.steel,
    borderWidth: 2.5,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    marginHorizontal: 4,
    padding: 8,
  },
  txtInput: {
    borderBottomColor: Colours.steel,
    borderTopColor: Colours.steel,
    borderRightColor: Colours.steel,
    borderLeftColor: Colours.steel,
    borderWidth: 2.5,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    width: 195,
    marginRight: 4,
    color: Colours.cornflower,
    textAlign: TextConf.txtAlign,
    fontSize: TextConf.txtFontBig,
  },
});

export default InputButton;
