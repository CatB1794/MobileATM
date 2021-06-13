import React, { Component } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

import CurrencyList from "../config/CurrencyList";
import ListItem from "./ListItem";
import Colours from "../config/Colours";

class SelectOpt extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar style="auto" />
        <FlatList
          data={CurrencyList}
          keyExtractor={(CurrencyList) => CurrencyList.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              text={item.currency.toString()}
              selected={item.currency.toString() === "EUR"}
              onPress={() => item.rate}
            />
          )}
          ItemSeparatorComponent={() => (
            <View
              style={{
                width: "100%",
                height: StyleSheet.hairlineWidth,
                backgroundColor: Colours.steel,
              }}
            />
          )}
        />
      </View>
    );
  }
}

export default SelectOpt;
