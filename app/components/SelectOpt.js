import React from "react";
import { TextInput, View, StyleSheet, FlatList, Text } from "react-native";
//import { Picker } from "@react-native-community/picker";

import Colours from "../config/Colours";
import TextConf from "../config/TextConf";
import CurrencyList from "../config/CurrencyList";

function SelectOpt(props) {
  //const [currencyOpts, setCurrencyOpts] = useState([]);

  return (
    <View style={curStyles.constainer}>
      <FlatList
        data={CurrencyList}
        keyExtractor={(CurrencyList) => CurrencyList.id.toString()}
        renderItem={({ item }) => <Text>{item.currency}</Text>}
      />
      <TextInput keyboardType="numeric" style={curStyles.txtInput} />
    </View>
  );
}

const curStyles = StyleSheet.create({
  constainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    padding: 8,
  },
  listContainer: {
    width: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  txtInput: {
    borderBottomColor: Colours.steel,
    borderTopColor: Colours.steel,
    borderRightColor: Colours.steel,
    borderLeftColor: Colours.steel,
    borderWidth: 2.5,
    width: 150,
    color: Colours.cornflower,
    textAlign: TextConf.txtAlign,
    fontSize: TextConf.txtFontBig,
  },
});

export default SelectOpt;
