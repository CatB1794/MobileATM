import React, { Component } from "react";
import { TextInput, StyleSheet, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

import styles from "../components/styles";

class Keyboard extends Component {
  constructor() {
    super();
    this.state = {
      amount: "",
    };
  }

  handleAmount(txt) {
    this.setState({
      amount: txt,
    });
  }

  render() {
    return (
      <View style={keyStyles.keyContainer}>
        <Entypo name="keyboard" size={35} color="black" />
        <TextInput
          keyboardType="numeric"
          onChangeText={this.handleAmount.bind(this)}
          value={this.state.amount}
          style={styles.txtInput}
        ></TextInput>
      </View>
    );
  }
}

const keyStyles = StyleSheet.create({
  keyContainer: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    padding: 8,
  },
});

export default Keyboard;