import React from "react";
import { View, TouchableHighlight, Text, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";

import Colours from "../config/Colours";
import styles from "./styles";

function ListItem({ text, selected = false, onPress, visible = true }) {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={listRow.container}>
        <Text style={styles.textMain}>{text}</Text>
        {selected ? (
          <Entypo
            name="check"
            size={24}
            color={Colours.steel}
            visible={visible}
          />
        ) : null}
      </View>
    </TouchableHighlight>
  );
}

const listRow = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flexDirection: "row",
    backgroundColor: Colours.snow,
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default ListItem;
