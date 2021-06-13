import React, { Component } from "react";
import { View } from "react-native";

import InputButton from "./InputButton";
import SelectOpt from "./SelectOpt";

class CurrencyInput extends Component {
  handlePressBaseCurrency = () => console.log("Pressed");
  handlePressQuoteCurrency = () => console.log("Pressed");
  handleTextBaseCurrency = (text) => console.log("Entered ", text);
  handleTextQuoteCurrency = (text) => console.log("Entered ", text);

  render() {
    return (
      <View>
        <InputButton
          buttonTxt={"EUR"}
          onPress={this.handlePressBaseCurrency}
          onChangeText={this.handleTextBaseCurrency}
          defaultValue={"1"}
        />
        <InputButton
          buttonTxt={"USD"}
          onPress={this.handlePressQuoteCurrency}
          onChangeText={this.handleTextQuoteCurrency}
          value={"1.210895"}
        />
      </View>
    );
  }
}

export default CurrencyInput;
